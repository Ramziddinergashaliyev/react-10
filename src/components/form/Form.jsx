import React, { useState } from "react";
import "./form.scss";
import axios from "../../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Form() {
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();
    let user = {
      username,
      password,
    };

    console.log(user);

    axios
      .post(`/auth/login`, user)
      .then((res) => {
        console.log(res);
        toast.success("Malumot to'gri kiritildi");
        localStorage.setItem(`x-auth-token`, res.data.token);
        navigate("/admin/products");
      })
      .catch((err) => {
        toast.error("Malumot noto'g'ri kiritildi");
        console.log(err);
      });
  };

  return (
    <div className="forms">
      <form onSubmit={formSubmit} className="form" action="">
        <h1 className="form__title">Register</h1>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button>Learn more</button>
      </form>
    </div>
  );
}

export default Form;
