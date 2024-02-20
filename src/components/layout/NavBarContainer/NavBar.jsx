import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./NavBar.css";
import Cartwidget from "../../common/CartWidgetContainer/Cartwidget";

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar className="navbar-container">
        <div id="divLogo" className="logo"></div>
        <div id="divItems" className="nav-items">
          <ul>
            <li>
              <a href="#" className="nav-link">
                Mujeres
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Hombres
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
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
