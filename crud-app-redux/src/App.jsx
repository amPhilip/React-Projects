import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./Redux/Reducer/usersReducer";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");

  return (
    <div className="App">
      <h4>CRUD APP</h4>
      {""}
      <section className="addUser">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name: name,
                username: username,
              })
            );
          }}
        >
          {""}
          Add a User
        </button>
      </section>
      <section className="listUsers" style={{ marginTop: "20px" }}>
        {userList.map((user) => (
          <div className="users">
            <span className="user-name" style={{ padding: "10px 20px" }}>
              {user.name}
            </span>
            <span className="user-name" style={{ padding: "10px 20px" }}>
              {user.username}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
