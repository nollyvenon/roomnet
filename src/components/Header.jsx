import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { LOGOUTUSER } from "../redux/action";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { SETCOUNTRY } from "../redux/action";
const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector(({ user }) => user.currentUser);
  const country = useSelector(({ CountryReducer }) => CountryReducer.country);

  const handleLogout = () => {
    history.push({
      pathname: "/",
      state: { message: "You have been logout" },
    });
    dispatch(LOGOUTUSER());
  };
  const handleCountry = (code) => {
    const Setcountry = async () => dispatch(SETCOUNTRY(code));
    Setcountry().then(() =>
      setTimeout(() => {
        window.location.reload();
      }, 2000)
    );
    Setcountry();
  };

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        if (
          data.country_code === "NG" ||
          data.country_code === "GB" ||
          data.country_code === "US" ||
          data.country_code === "GH" ||
          data.country_code === "IE" ||
          data.country_code === "KE" ||
          data.country_code === "ZA"
        ) {
          //get country code from api then set it to default if the user has not
          // selected a country of his choice from drop down
          //otherwise use user defined country setting
          if (!country) {
            handleCountry(data.country_code);
          }
          // console.log(data.country_code);
        } else {
          if (!country) {
            handleCountry("NG");
          }
        }
      })
      .catch((error) => {
        console.log(error);
        if (!country) {
          handleCountry("NG");
        }
      });
  };
  React.useEffect(() => getGeoInfo(), []);
  return (
    <header className="nav-on-top">
      <div
        id="header"
        className="nav-header header-four bg-secondary py-10 border-bottom-1-dark"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light px-0">
                <a className="navbar-brand" href="/">
                  <img
                    className="nav-logo"
                    src="/images/logo/logo2.png"
                    alt="logo"
                  />
                </a>
                <button
                  className="toggle-btn"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span />
                  <span />
                  <span />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        // href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Location
                        <img
                          style={{
                            width: "30px",
                            objectFit: "contain",
                          }}
                          src={
                            country === "NG"
                              ? "/images/flags/ng.png"
                              : country === "US"
                              ? "/images/flags/us.png"
                              : country === "IE"
                              ? "/images/flags/ie.png"
                              : country === "KE"
                              ? "/images/flags/ke.png"
                              : country === "GH"
                              ? "/images/flags/ghana.png"
                              : country === "ZA"
                              ? "/images/flags/sa.png"
                              : country === "GB"
                              ? "/images/flags/uk.png"
                              : null
                          }
                        />
                      </a>
                      <ul className="dropdown-menu shadow">
                        <li onClick={() => handleCountry("NG")}>
                          <a className="dropdown-item">Nigeria</a>
                        </li>
                        <li onClick={() => handleCountry("KE")}>
                          <a className="dropdown-item">Kenya</a>
                        </li>
                        <li onClick={() => handleCountry("IE")}>
                          <a className="dropdown-item">Ireland</a>
                        </li>
                        <li onClick={() => handleCountry("US")}>
                          <a className="dropdown-item">Usa</a>
                        </li>
                        <li onClick={() => handleCountry("GB")}>
                          <a className="dropdown-item">Uk</a>
                        </li>
                        <li onClick={() => handleCountry("ZA")}>
                          <a className="dropdown-item">South Africa</a>
                        </li>
                        <li onClick={() => handleCountry("GH")}>
                          <a className="dropdown-item">Ghana</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/contactForm"
                        role="button"
                        aria-haspopup="true"
                      >
                        Contacts
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/aboutus"
                        // role="button"
                        // data-toggle="dropdown"
                        aria-haspopup="true"
                        // aria-expanded="false"
                      >
                        About us
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link"
                        href="/FAQ"
                        // role="button"
                        // data-toggle="dropdown"
                        aria-haspopup="true"
                        // aria-expanded="false"
                      >
                        FAQ
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link"
                        href="/Blogs"
                        // role="button"
                        // data-toggle="dropdown"
                        aria-haspopup="true"
                        // aria-expanded="false"
                      >
                        Blog
                      </a>
                    </li>

                    {/* <li className="nav-item">
                      <form className="search-field">
                        <input
                          type="search"
                          className="search form-control"
                          placeholder="Search Here"
                        />
                        <span>
                          <i className="fa fa-search" />
                          <i className="fa fa-times" />
                        </span>
                      </form>
                    </li> */}
                  </ul>
                  {currentUser ? (
                    <ul className="admin-info color-white-a">
                      <li>
                        <Link to="">{currentUser.user.firstName}</Link>
                      </li>
                      <li>
                        <a onClick={handleLogout}>Log Out</a>
                      </li>
                    </ul>
                  ) : (
                    <ul className="admin-info color-white-a">
                      <li>
                        <Link to="/login">Sign In</Link>
                      </li>
                      <li>
                        <Link to="/register">Sign Up</Link>
                      </li>
                    </ul>
                  )}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="header-src-fild bg-secondary py-5">
        <div className="container">
          <ul className="row color-white-a subnavuUl">
            <li>
              <Link to="postadd">Post Ad</Link>
            </li>
            <li>
              <Link to="/Browse-rooms">
                <a>Browse</a>
              </Link>
            </li>
            <li>
              <Link to="/Accounts">
                <a>Accounts</a>
              </Link>
            </li>

            <ul className="row color-white-a subnavuUl">
              <li className="color-primary">{country}</li>
            </ul>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
