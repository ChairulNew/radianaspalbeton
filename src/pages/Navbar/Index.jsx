import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link as RouterLink, Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";
import Logo from "../Logo/Index";
import { navTabs } from "../../data";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import gsap from "gsap";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    setVisible(currentScrollPosition > 145);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      gsap.fromTo(".navbar", { y: -250 }, { y: 0, top: 0 });
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [visible]);

  const handleNavigate = (tab) => {
    setOpen(false);
    if (isHome && tab.type === "scroll") return;
    if (tab.type === "scroll") {
      navigate(`/?scrollTo=${tab.id}`);
    } else {
      navigate(tab.id);
    }
  };

  return (
    <nav className={`navbar ${visible ? "visible" : ""}`}>
      {open && (
        <div className="sidebar_overlay" onClick={() => setOpen(false)}></div>
      )}
      <Logo />
      <div className={`box nav_tabs ${open ? "open" : ""}`}>
        <div
          className="icon_container cancel_btn"
          onClick={() => setOpen(false)}
        >
          <FaTimes />
        </div>

        {navTabs.map((tab, index) => {
          if (isHome && tab.type === "scroll") {
            return (
              <Link
                key={index}
                to={tab.id}
                className="tab"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-70}
                onClick={() => setOpen(false)}
              >
                <p>{tab.name}</p>
              </Link>
            );
          } else if (tab.type === "link") {
            return (
              <Link
                key={index}
                to={tab.id}
                className="tab"
                onClick={() => {
                  localStorage.setItem("scrollTo", tab.scrollTo || "");
                  setOpen(false);
                }}
              >
                <p>{tab.name}</p>
              </Link>
            );
          } else {
            return (
              <RouterLink
                key={index}
                to={tab.id}
                className="tab"
                onClick={() => {
                  localStorage.setItem("scrollTo", tab.id);
                  setOpen(false);
                }}
              >
                <p>{tab.name}</p>
              </RouterLink>
            );
          }
        })}
      </div>

      <div className="box buttons">
        <Link
          to="/contact-detail"
          className="btn contact_btn"
          smooth={true}
          spy={true}
          offset={-70}
        >
          Contact US
        </Link>
        <div className="icon_container menu_btn" onClick={() => setOpen(!open)}>
          <RiMenu3Fill />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
