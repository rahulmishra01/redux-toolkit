import React, { useState } from "react";
import "./registration.css";
import { createData } from "../redux/action";
import { useDispatch } from "react-redux";
const Registration = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
    birthday: "",
  });

  const InputEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const dispatch = useDispatch();
  // const selector = useSelector((state) => (state.data));
  const changeSubmit = (e) => {
    e.preventDefault();
    dispatch(createData(data));
  };

  return (
    <>
      <div className="container">
        <h2>This is Registration Page..</h2>
        <form onSubmit={changeSubmit}>
          <div className="row">
            <div className="mb-3 col col-6">
              <label htmlFor="exampleInputFirstname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                name="fname"
                value={data.fname}
                onChange={InputEvent}
              />
            </div>

            <div className="mb-3 col col-6">
              <label htmlFor="exampleInputFirstname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                name="lname"
                value={data.lname}
                onChange={InputEvent}
              />
            </div>

            <div className="mb-3 col col-6">
              <label htmlFor="exampleInputFirstname" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={data.email}
                onChange={InputEvent}
              />
            </div>

            <div className="mb-3 col col-6">
              <label htmlFor="exampleInputFirstname" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                name="phone"
                value={data.phone}
                onChange={InputEvent}
              />
            </div>

            <div className="mb-3 col col-6">
              <label htmlFor="exampleInputFirstname" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={data.address}
                onChange={InputEvent}
              />
            </div>

            <div className="mb-3 col col-6">
              <label htmlFor="exampleInputFirstname" className="form-label">
                Birthday
              </label>
              <input
                type="text"
                className="form-control"
                name="birthday"
                value={data.birthday}
                onChange={InputEvent}
              />
            </div>

            <div className="row">
              <button type="submit" className="btn btn-primary col col-1">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Registration;
