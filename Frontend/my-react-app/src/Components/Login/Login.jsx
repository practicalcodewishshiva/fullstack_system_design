import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [userSignUpDetails, setUserSignUpDetails] = useState({
    userName: "",
    password: "",
    captcha: "",
  });
  const [access_token, setAccess_token] = useState("");

  function handleuserLoginDetails(event) {
    const { name, value } = event.target;
    console.log(name, value, "name value");
    setUserSignUpDetails((previousUserSignUpDetails) => ({
      ...previousUserSignUpDetails,
      [name]: value,
    }));
  }

  async function handleLogin() {
    debugger;

    const { userName, password } = userSignUpDetails;
    if (!(userName && password)) {
      alert("you have to enter all the fileds");
    }
    const result = await axios.post(
      "http://localhost:8000/login",
      { userName: userName, password },
    );
    debugger;
    if (result.data.access_token) {
      setAccess_token(result.data.access_token);
      localStorage.setItem("access_token", result.data.access_token);
      navigate("/train-list");
      console.log(result, "result");
    }
  }

  return (
    <>
      <div>
        FullName
        <div class="form-group">
          <label for="exampleInputEmail1">UserName</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="userName"
            onChange={handleuserLoginDetails}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={handleuserLoginDetails}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Captcha</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="captcha"
            onChange={handleuserLoginDetails}
          />
        </div>
        <button
          style={{
            padding: "5px",
            border: "2px solid green",
            borderRadius: " 8px",
            marginTop: "10px",
            width: "203px",
          }}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </>
  );
}

// http://localhost:8000/login local ga vunna na backedn api access

// access deployment  https://api.escuelajs.co/api/v1/auth/login
//

// access_token generate ayindi manam save chesukovali ?

// local ga kavali ---- useState()

// global store --- localStorage or Session Storga or MongoDB or cookies

// browser edhina data save or data store localStorage life time validity
// session once browiser close automcati cla erase ayipovali data delete based on session

//       key = value
// const name = "shivakumar "

// cookies.setItem(access_token, access_token)

// call get

// cookies.getItem(access_token)
