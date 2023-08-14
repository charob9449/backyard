import React, { Component } from "react";
import {
  Route,
  Routes,
  NavLink,
  HashRouter,
  Navigate,
} from "react-router-dom";
import Home from "../src/Home";
import NightLounge from "./NightLounge.js";
import Orders from "./Orders";
import pic1 from "./Screenshot 2023-07-12 at 3.01.07 PM (1).png";

import "./App.css";

const handleLogoImageChange = (event) => {
  const selectedImage = event.target.files[0];
  if (selectedImage) {
    const reader = new FileReader();
    reader.onload = () => {
      const logoImageElement = document.getElementById("logoimg");
      if (logoImageElement) {
        logoImageElement.src = reader.result;
      }
    };
    reader.readAsDataURL(selectedImage);
  }
};

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink className="nav-link" to="/Home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/NightLounge">
                  Night Lounge
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Orders">
                  Orders
                </NavLink>
              </li>
            </ul>
          </header>

          <div>
            <header style={{ textAlign: "center" }}>
              <div className="hero">
                <div className="card">
                  <div className="image-container">
                    <img src={pic1} alt="Back Yard" id="logoimg" />
                    <input
                      type="file"
                      accept="image/jpeg, image/jpg, image/png"
                      id="input-file"
                      onChange={handleLogoImageChange}
                    />
                  </div>
                  <label htmlFor="input-file" className="update-button">
                    Update Image
                  </label>
                </div>
              </div>
            </header>
            <div className="content">
              <Routes>
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/NightLounge" element={<NightLounge />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default App;
