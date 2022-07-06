import { useFormik } from "formik";
import React from "react";
import "../App.css";

const BasicForm = () => {
  const { values, handleBlur, handleChange } = useFormik({
    initialValues: {
      username: "",
      age: "",
      email: "",
      password: "",
    },
  });

  return (
    <section className="basic__form">
      <form className="form">
        <div className="username">
          <label>
            <h4>Username</h4>
          </label>
          <input
            onChange={handleChange}
            value={values.username}
            type="text"
            id="text"
            placeholder="username"
            onBlur={handleBlur}
          />
        </div>
        <div className="Age">
          <label>
            <h4>Age</h4>
          </label>
          <input
            onChange={handleChange}
            value={values.age}
            type="number"
            id="number"
            placeholder="age"
            onBlur={handleBlur}
          />
        </div>
        <div className="email">
          <label>
            <h4>Enter Email</h4>
          </label>
          <input
            onChange={handleChange}
            value={values.email}
            type="email"
            id="email"
            placeholder="email address"
            onBlur={handleBlur}
          />
        </div>
        <div className="password">
          <label>
            <h4>Password</h4>
          </label>
          <input
            onChange={handleChange}
            value={values.password}
            type="password"
            id="password"
            placeholder="password"
            onBlur={handleBlur}
          />
        </div>
        <button className="submit__btn">
          <h4>Login</h4>
        </button>
      </form>
    </section>
  );
};

export default BasicForm;
