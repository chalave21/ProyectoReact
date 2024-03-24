import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./navBarStyle.css";
import Cartwidget from "../../common/CartWidgetContainer/Cartwidget";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar className="navbar-container">
          <div id="divLogo" className="logo">
            <Link to="/" className="nav-link">
              <img
                src="https://res.cloudinary.com/dxe1ly9oz/image/upload/v1709815453/images_czyxeb.png"
                alt="logo"
              />
            </Link>
          </div>
          <div id="divItems" className="nav-items">
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="category/mujeres" className="nav-link">
                  Mujeres
                </Link>
              </li>
              <li>
                <Link to="/category/hombres" className="nav-link">
                  Hombres
                </Link>
              </li>
              <li>
                <Link to="/category/kids" className="nav-link">
                  Kids
                </Link>
              </li>
            </ul>
          </div>
          <div id="divCartWidget" className="cart-widget">
            <Link to="/Cart" className="nav-link">
              <Cartwidget />
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
