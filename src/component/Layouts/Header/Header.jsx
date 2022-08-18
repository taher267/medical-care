import Topber from "./Topbar";
import "./nav.css";
import { Link } from "react-router-dom";
import { useAuth } from "./../../context/AuthProvider";

export default function Header() {
  const { logout, currentUser } = useAuth();
  // console.log(currentUser);
  return (
    <header>
      <Topber />
      <nav className="navbar navbar-expand-lg navigation" id="navbar">
        <div className="container">
          <Link className="navbar-brand" to="">
            <img src="/assets/images/logo.png" alt="" className="img-fluid" />
          </Link>

          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarmain"
            aria-controls="navbarmain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icofont-navigation-menu"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarmain">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>

              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="department.html"
                  id="dropdown02"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Department <i className="icofont-thin-down"></i>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="dropdown02">
                  <li>
                    <Link className="dropdown-item" to="department.html">
                      Departments
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="department-single.html">
                      Department Single
                    </Link>
                  </li>

                  <li className="dropdown dropdown-submenu dropright">
                    <Link
                      className="dropdown-item dropdown-toggle"
                      to="#!"
                      id="dropdown0301"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Sub Menu
                    </Link>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdown0301"
                    >
                      <li>
                        <Link className="dropdown-item" to="">
                          Submenu 01
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="">
                          Submenu 02
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/doctors"
                  id="dropdown03"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Doctors <i className="icofont-thin-down"></i>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="dropdown03">
                  <li>
                    <Link className="dropdown-item" to="/doctors">
                      Doctors
                    </Link>
                  </li>
                  {/* <li>
                    <Link className="dropdown-item" to="doctor-single.html">
                      Doctor Single
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="appoinment.html">
                      Appoinment
                    </Link>
                  </li> */}

                  {/* <li className="dropdown dropdown-submenu dropleft">
                    <Link
                      className="dropdown-item dropdown-toggle"
                      to="#!"
                      id="dropdown0501"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Sub Menu
                    </Link>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdown0501"
                    >
                      <li>
                        <Link className="dropdown-item" to="">
                          Submenu 01
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="">
                          Submenu 02
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </li>

              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="blog-sidebar.html"
                  id="dropdown05"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Blog <i className="icofont-thin-down"></i>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="dropdown05">
                  <li>
                    <Link className="dropdown-item" to="blog-sidebar.html">
                      Blog with Sidebar
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="blog-single.html">
                      Blog Single
                    </Link>
                  </li>
                </ul>
              </li> */}

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

              {currentUser?.email ? (
                <li className="nav-item position-relative">
                  <Link
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      return logout();
                    }}
                    to=""
                  >
                    Logout
                  </Link>
                  <div className="profile">
                    {currentUser?.photoURL && (
                      <img
                        src={currentUser?.photoURL}
                        alt={currentUser?.displayName}
                      />
                    )}

                    <span className="name">{currentUser?.displayName}</span>
                  </div>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Signup
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
