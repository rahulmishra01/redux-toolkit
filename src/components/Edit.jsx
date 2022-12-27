import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById, getData, updateData } from "../redux/action";
import axios from "axios";

const Edit = () => {
  const { id } = useParams();

  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
    birthday: "",
  });

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const helo = selector?.app?.post[0]?.message;
  console.log("🚀 ~ file: Edit.jsx:22 ~ Edit ~ helo", helo);

  useEffect(() => {
    dispatch(getById(id));
  }, []);

  useEffect(() => {
    setData(helo);
  }, [helo]);

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

  const changeSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateData(data))
    dispatch(getById(id));
  };

  return (
    <>
      <div className="container">
        <h2>This is Registration Page..</h2>
        <form onSubmit={changeSubmit}>
          <div className="row">
            <div className="mb-3 col col-6">
              <label for="exampleInputFirstname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                name="fname"
                // value={data.fname}
                defaultValue={helo?.fname}
                onChange={InputEvent}
              />
            </div>

            <div className="mb-3 col col-6">
              <label for="exampleInputFirstname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                name="lname"
                // value={data.lname}
                defaultValue={helo?.lname}
                onChange={InputEvent}
              />
            </div>

            <div className="mb-3 col col-6">
              <label for="exampleInputFirstname" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                // value={data.email}
                defaultValue={helo?.email}
                onChange={InputEvent}
              />
            </div>

            <div className="mb-3 col col-6">
              <label for="exampleInputFirstname" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                name="phone"
                // value={data.phone}
                defaultValue={helo?.phone}
                onChange={InputEvent}
              />
            </div>

            <div className="mb-3 col col-6">
              <label for="exampleInputFirstname" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                name="address"
                // value={data.address}
                defaultValue={helo?.address}
                onChange={InputEvent}
              />
            </div>

            <div className="mb-3 col col-6">
              <label for="exampleInputFirstname" className="form-label">
                Birthday
              </label>
              <input
                type="text"
                className="form-control"
                name="birthday"
                // value={data.birthday}
                defaultValue={helo?.birthday}
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

export default Edit;
