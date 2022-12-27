import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getById, getData, updateData } from "../redux/action";

const Edit = () => {
  const { id } = useParams();

  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
    birthday: "",
    gender: "",
  });
  const [input,setInput] = useState({})
  console.log("🚀 ~ file: Edit.jsx:18 ~ Edit ~ data", input)

  const dispatch = useDispatch();

  const selector = useSelector((state) => state);

  const hello = selector?.app?.post[0]?.message[0];

  useEffect(() => {
    dispatch(getById(id));
  }, []);

  // useEffect(() => {
  //   setData(selector);
  // }, [selector !== data]);


  // const inputEvent = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;

  //   setData((preValue) => {
  //     return {
  //       ...preValue,
  //       [name]: value,
  //     };
  //   });
  // };

  const inputEvent = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };



  const dataSubmit = async (e) => {
    console.log("setting in handle submit",data)
    e.preventDefault();
    dispatch(updateData(id, data));
    dispatch(getById(id));

  };
    console.log("🚀 ~ file: Edit.jsx:54 ~ dataSubmit ~ data", data)

  return (
    <>
      <h3 className="d-flex justify-content-center p-2"> This is Edit Page </h3>

      <form onSubmit={dataSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputFirstname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            name="fname"
            // value={hello?.fname}
            onChange={inputEvent}
            // contentEditable={true}
            value={data.fname}
            />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputLastname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            name="lname"
            // value={hello?.lname}
            onChange={inputEvent}
            value={data.lname}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputBirthday" className="form-label">
            Birthday
          </label>
          <input
            type="text"
            className="form-control"
            name="birthday"
            // value={hello?.birthday}
            onChange={inputEvent}
            value={data.birthday}
          />
        </div>

        <div class="col-md-6 mb-4">
          <h6 class="mb-2 pb-1">Gender: </h6>

          <div className="mb-3">
            <label htmlFor="exampleInputFemaleGender" className="form-label">
              Female
            </label>
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="female"
              onChange={inputEvent}
            //   defaultChecked={hello?.gender === "female"}
              checked={data.gender === "female"}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputMaleGender" className="form-label">
              Male
            </label>
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="male"
              onChange={inputEvent}
            //   defaultChecked={hello?.gender === "male"}
              checked={data.gender === "female"}
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            // value={hello?.email}
            onChange={inputEvent}
            value={data.email}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPhone" className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            name="phone"
            // value={hello?.phone}
            onChange={inputEvent}
            value={data.phone}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            name="address"
            // value={hello?.address}
            onChange={inputEvent}
            value={data.address}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Edit;
