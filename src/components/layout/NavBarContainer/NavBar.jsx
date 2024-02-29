import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./NavBar.css";
import Cartwidget from "../../common/CartWidgetContainer/Cartwidget";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar className="navbar-container">
        <div id="divLogo" className="logo"></div>
        <div id="divItems" className="nav-items">
          <ul>
            <li>
              <Link to="category/mujeres" className="nav-link">
                Mujeres
              </Link>
            </li>
            <li>
              <a href="/category/hombres" className="nav-link">
                Hombres
              </a>
            </li>
            <li>
              <a href="/category/kids" className="nav-link">
                Kids
              </a>
            </li>
          </ul>
        </div>
        <div id="divCartWidget" className="cart-widget">
          <Cartwidget />
        </div>
      </Toolbar>
    </AppBar>
  );
}
