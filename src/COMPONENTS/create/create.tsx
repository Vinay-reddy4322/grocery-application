import axios from "axios";

import { useState } from "react";
import {useNavigate } from "react-router-dom";
function Create() {
  const [details, setDetails] = useState({
    username:"",
    password:"",
  });
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(details);
    axios
      .post("http://localhost:8080/add/user",details)
      .then(() => { navigate("/"); });
      
    
  };

  return (
    <div>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login" onSubmit={handleSubmit}>
              <h1 className="head">LOGIN</h1>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="UserName"
                  name="uname"
                  
                  onChange={(e) => {
                    setDetails({...details, username:e.target.value})
                  }}
                  required
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  name="pass"
                  
                  onChange={(e) => {
                    setDetails({...details, password:e.target.value})
                  }}
                  required
                />
              </div>
              <button className="button login__submit">
                <span className="button__text">
                  Submit
                </span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Create;
