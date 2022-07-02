import React, { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmiRes, setBmiRes] = useState("");
  const [message, setMessage] = useState("");
  const [gender, setGender] = useState();

  const inputWeight = (e) => {
    setWeight(e.target.value);
  };
  const inputHeight = (e) => {
    setHeight(e.target.value);
  };
  const handlegender = (e) => {
    setGender(e.target.value);
  };

  const handleBMIRes = () => {
    let bmi = weight / (height * height);
    if (weight && height === 0) {
      alert("please Set Values");
    } else {
      bmi;
    }
    setBmiRes(bmi.toFixed(2));

    if (bmi < 18.5) {
      setMessage("You are UnderWeight");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setMessage("You have a Normal Weight");
    } else {
      setMessage("You are Obese");
    }
  };

  const clearResult = () => {
    window.location.reload();
  };
  return (
    <div className="calc__app">
      <section className="App">
        <header className="header">
          <div className="logo">
            <span>
              <h4>BMI calc</h4>
            </span>
          </div>
        </header>

        <div className="calc__container">
          <div className="weight">
            <button>weight</button>
            <div className="inputWeight">
              <input
                type="number"
                name="weight"
                id="weightNum"
                value={weight}
                onChange={inputWeight}
              />
              <h4>Kgs</h4>
            </div>
          </div>

          <div className="height">
            <button>height</button>
            <div className="inputHeight">
              <input
                type="number"
                name="height"
                id="heightNum"
                value={height}
                onChange={inputHeight}
              />
              <h4>mts</h4>
            </div>
          </div>

          <div className="gender">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={handlegender}
            />
            <label for="male">Male</label>
            <br />
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={handlegender}
            />
            <label for="female">Female</label>
            <br />
          </div>

          <div className="btns">
            <button className="submit__ans" onClick={handleBMIRes}>
              Submit
            </button>
            <button className="reload" onClick={clearResult}>
              Reload
            </button>
          </div>
        </div>
        <hr />

        <div className="result__sect">
          <div className="bmi__result">
            <h2>{bmiRes}BMI</h2>
            <span><p>{gender}</p></span>
          </div>
          <div className="message">
            <span>
              <p>{message}</p>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
