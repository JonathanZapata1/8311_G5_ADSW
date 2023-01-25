import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login.js/Login";
import { Update } from "./Vistas/Update";
import { Delete } from "./Vistas/Delete";
import { Create } from "./Vistas/Create";
import { Inicio } from "./Vistas/UserVistas/Inicio";
import { CatalogoUser } from "./Vistas/UserVistas/CatalogoUser";
import { Mantenimiento } from "./Vistas/UserVistas/Mantenimiento";
import { Contacto } from "./Vistas/UserVistas/Contacto";
import { Micuenta } from "./Vistas/UserVistas/Micuenta";
import {Register} from "./Components/Login.js/Register"
import {RegisterUser} from "./Vistas/UserVistas/RegisterUsuario"

function App() {
  return (
    <div className="App">
      <header className="headerLogin">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossOrigin="anonymous"
        />
      </header>
      <body>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/register" element={<Register />} />
            <Route path="/update" element={<Update />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/create" element={<Create />} />
            <Route path="/user/inicio" element={<Inicio/>} />
            <Route path="/user/catalogo" element={<CatalogoUser/>} />
            <Route path="/user/mantenimiento_y_servicio" element={<Mantenimiento/>} />
            <Route path="/user/contacto" element={<Contacto/>} />
            <Route path="/user/micuenta" element={<Micuenta/>} />
            <Route path="/user/register" element={<RegisterUser/>} />
          </Routes>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
