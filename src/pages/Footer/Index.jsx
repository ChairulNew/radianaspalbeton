import React from "react";
import "./Footer.css";
import { footer } from "../../data";
import { Link } from "react-scroll";
import Logo from "../Logo/Index";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="column">
            <Logo />
            <form action="" className="newsletter">
              <h3>Beton Kuat, Bangunan Hebat</h3>
              <div className="control_container">
                {/* <input
                  type="email"
                  placeholder="Masukkan email"
                  className="control"
                />
                subscirbe
                <button className="btn">Ikuti</button> */}
              </div>
            </form>
          </div>

          {footer.map((list, index) => (
            <div className="column" key={index}>
              <div className="routes_name">{list.name}</div>
              <div className="routes_container">
                {list.routes.map((route, routeIndex) => (
                  <Link to={route.id} className="route_item" key={routeIndex}>
                    <p className="name">{route.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <h3>Copyright &copy; All rights reserved || 2025</h3>
          <p className="text_muted">Build by Radian Aspal Beton</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
