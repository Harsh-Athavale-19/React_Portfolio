import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <header className="fixed-top">
        {/* Navbar starts  */}
        <nav className="navbar navbar-expand-lg nav_bar">
          <div className="container">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-65}
              duration={500}
              className="navbar-brand fw-bold text-uppercase"
            >
              Portfolio
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar_links gap-3">
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-65}
                    duration={500}
                    className="nav-link"
                    aria-current="page"
                    activeStyle={{ color: "var(--secondary-color)" }}
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-5}
                    duration={500}
                    className="nav-link"
                    activeStyle={{ color: "var(--secondary-color)" }}
                  >
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-5}
                    duration={500}
                    className="nav-link"
                    activeStyle={{ color: "var(--secondary-color)" }}
                  >
                    Projects
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-5}
                    duration={500}
                    className="nav-link"
                    activeStyle={{ color: "var(--secondary-color)" }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar  Ends */}
      </header>
    </>
  );
};

export default Navbar;
