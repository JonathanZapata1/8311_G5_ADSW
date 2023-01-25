import { useState } from 'react';
import './Login.css';
import { validarLogin } from '../../Controller/loginController';
export function LoginUser() {
  let [username,setUsername]=useState("");
  let [password,setPassword]=useState("");
  return (
    <div className="containerlogin">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3>Iniciar Sesion</h3>
          </div>
          <div className="card-body">
            <form onSubmit={(e)=>{
              e.preventDefault();
              validarLogin(username,password);
            }} >
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="username"
                  onChange={(e)=>{setUsername(e.target.value)}}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-key" />
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn float-right login_btn">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Don't have an account?<a href="/user/register">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
