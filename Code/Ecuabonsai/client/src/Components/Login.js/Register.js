import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css";
/*import { validarLogin } from "../../Controller/loginController";*/

export function Register() {
  const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:5000/user', {
          name,
          username,
          email,
          password,
        });
  
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <div className="containerlogin">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3>Registrar</h3>
          </div>
          <div className="card-body">
            <form
            >
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                />
              </div>


              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-envelope" />
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                
              </div>

              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                  <i class="fas fa-user-circle"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="username"
               
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
                  
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn float-right login_btn">
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
