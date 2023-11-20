import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navigation = ({ currentPage, setPage }) => {
  const handleLinkClick = (path) => {
    setPage(path);
  };

  return (
    <>
      <Link
        className={`navbar-brand`}
        to="/"
        onClick={() => handleLinkClick("/")}
      >
        Daniel Merkin
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li
            className={`nav-item ${
              currentPage === "/about" ? "active" : ""
            } && ${currentPage === "/" ? "active" : ""}`}
          >
            <Link
              className="nav-link"
              to="/about"
              onClick={() => handleLinkClick("/about")}
            >
              About
            </Link>
          </li>
          <li
            className={`nav-item ${
              currentPage === "/portfolio" ? "active" : ""
            }`}
          >
            <Link
              className="nav-link"
              to="/portfolio"
              onClick={() => handleLinkClick("/portfolio")}
            >
              Portfolio
            </Link>
          </li>
          <li
            className={`nav-item ${currentPage === "/contact" ? "active" : ""}`}
          >
            <Link
              className="nav-link"
              to="/contact"
              onClick={() => handleLinkClick("/contact")}
            >
              Contact
            </Link>
          </li>
          <li
            className={`nav-item ${currentPage === "/resume" ? "active" : ""}`}
          >
            <Link
              className="nav-link"
              to="/resume"
              onClick={() => handleLinkClick("/resume")}
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;