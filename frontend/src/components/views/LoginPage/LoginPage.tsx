import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";

function LoginPage() {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  interface IEmail {
    Email: String;
    Password: String;
  }

  const onEmailHandler = (event: any) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event: any) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event: any) => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body));
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" onChange={onPasswordHandler} />
        <button type="submit">로그인</button>
      </form>

      <br />
    </div>
  );
}

export default LoginPage;
