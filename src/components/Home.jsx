import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Registration from "./Registration";
// import Confetti from "react-confetti";
import { useDispatch, useSelector } from "react-redux";
import { getData, deleteData } from "../redux/action";
const Home = () => {
  const [data, setData] = useState([]);

  //search method
  const [search, setSearch] = useState("");

  // Called dispatch method
  const dispatch = useDispatch();

  // Called selector method
  const selector = useSelector((state) => state);
  const hello = selector?.app?.post[0]?.message;

  // Getting Data
  useEffect(() => {
    dispatch(getData());
  }, []);

  const inputSearch = (e) => {
    setSearch(e.target.value);
  };
  const filterSearch = !search
    ? hello
    : hello.filter((item) =>
        item.fname.toLowerCase().includes(search.toLowerCase())
      );

  const [popupOpen, setPopupOpen] = useState(false);

  const toggle = () => {
    setPopupOpen((prev) => !prev);
  };
  const onClick = () => {
    setPopupOpen(!popupOpen);
    setTimeout(() => {
      toggle();
    }, 1000);
  };
  // win = {
  //   width: window.innerWidth,
  //   height: window.innerHeight
  // };
  const { width, height } = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  // const event = <Confetti/>

  // const [eventhandle, setEventhandle] = useState(event);

  // useEffect(() => {
  //   setTimeout(() => {
  //       setEventhandle(false)
  //   },4500)
  // },[eventhandle])

  return (
    <div>
      {/* {eventhandle} */}
      {/* <Confetti recycle={false}
        width={width}
        height={height}
        numberOfPieces={1000}
      /> */}
      <Registration props={data} />
      <h3 className="d-flex justify-content-center p-2">This is Home Page..</h3>
      <div className="d-flex justify-content-center mb-2 ">
        <input type="search" onChange={inputSearch} placeholder="Search" />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Birthdate</th>
            <th scope="col">Gender</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {filterSearch?.map((item, index) => (
            <tr key={index}>
              <th scope="col" key={item.id}>
                {index + 1}
              </th>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>{item.birthday}</td>
              <td>{item.gender}</td>
              <td>
                <Link className="btn btn-primary" to={`/edit/${item._id}`}>
                  Edit
                </Link>

                <Link
                  to=""
                  className="btn btn-danger ms-2"
                  onClick={() => {
                    dispatch(deleteData(item._id));
                  }}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
// run port
/* npm run start-dev */
