import React from "react";

const AdvancedForm = () => {
  return (
    <section className="basic__form">
      <form className="form">
        <div className="username">
          <label>
            <h4>Username</h4>
          </label>
          <input type="text" placeholder="username" />
        </div>
        <div className="options">
          <div className="checkbox">
            <input type="checkbox" />
          </div>
          <div className="select">
            <select>
              <option>Choose Your Option</option>
              <option>Developer</option>
              <option>Engineer</option>
              <option>Doctor</option>
            </select>
          </div>
        </div>

        <button className="submit__btn">
          <h4>Login</h4>
        </button>
      </form>
    </section>
  );
};

export default AdvancedForm;
