import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { LOGINSUCCESS } from "../../redux/action";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [loading2, setLoading2] = React.useState();
  function validateEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const history = useHistory();
  const [errors, setErrors] = React.useState([]);
  const [formResponse, setFormResponse] = React.useState({
    email: "",
    password: "",
  });

  const validatePage = async () => {
    const { email, password } = formResponse;
    const newError = new Array();
    if (!email) {
      newError.push("email not provided");
    }

    if (!password) {
      newError.push("You did not provide a password");
    }
    if (email && !validateEmail(email)) {
      newError.push(`"${email}" is not valid email,`);
    }

    return newError;
  };
  const handleLogin = async (e) => {
    const { email, password } = formResponse;
    e.preventDefault();
    await validatePage().then(async (res) => {
      if (res.length > 0) {
        setErrors(res);
        window.scrollTo(0, 150);
      } else {
        setLoading2(true);
        await axios
          .post(`/api/v1/login`, {
            Email: email,
            Password: password,
          })
          .then((response) => {
            setLoading2(false);
            // console.log(response.data);
            dispatch(LOGINSUCCESS(response.data.userData));
            // history.push("/");
            history.push({
              pathname: "/",
              state: { message: `Welcome back ${email} !` },
            });
            // response.data.userData &&
            //   response.data.userData.length > 0 &&
          })
          .catch((err) => {
            setLoading2(false);

            if (err.response && err.response.data.message) {
              setErrors([err.response.data.message]);
            } else {
              setErrors([
                "An error occured, make sure you have a working network",
              ]);
            }
            console.log(err);
          });
        // history.push("/");
        // dispatch(SETPOSTROOMPROCESS(formResponse));
      }
    });
  };

  return (
    <div id="top">
      {/* Color Settings Start
      ==================================================*/}

      {/*  Color Settings End
          ==============================================*/}
      {/* Start Login Form
          ====================================================*/}
      <div className="login-form position-relative">
        <div className="login-form-area shadow p-50 lg-px-15 bg-white position-relative">
          <form className="position-relative" onSubmit={handleLogin}>
            <div className="form-logo text-center pb-50 wow slideInDown animated">
              <a href="/">
                <img
                  className="logo-bottom"
                  src="images/logo/logo2.png"
                  alt="logo-image"
                />
              </a>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-12 text-left">
                {errors.length > 0
                  ? errors.map((xxx) => (
                      <p className="error-card alert-danger">
                        <ErrorOutlineIcon
                          fontSize="small"
                          style={{ marginRight: "4px" }}
                        />
                        {xxx}
                      </p>
                      // <Alert severity="error">{xxx}</Alert>
                    ))
                  : null}
              </div>
            </div>
            <div
              className="form-group validate-input w-100 position-relative wow slideInRight animated"
              data-validate="Valid email is: a@b.c"
            >
              <input
                value={formResponse.email}
                onChange={(e) =>
                  setFormResponse({
                    ...formResponse,
                    email: e.target.value,
                  })
                }
                className="form-control"
                type="text"
                name="email"
              />
              <span className="data-placeholder" data-placeholder="Email " />
            </div>
            <div
              className="form-group validate-input w-100 position-relative wow slideInLeft animated"
              data-validate="Enter password"
            >
              <span className="btn-show-pass">
                <i className="fa fa-eye" aria-hidden="true" />
              </span>
              <input
                value={formResponse.password}
                onChange={(e) =>
                  setFormResponse({
                    ...formResponse,
                    password: e.target.value,
                  })
                }
                className="form-control"
                type="password"
                name="password"
              />
              <span className="data-placeholder" data-placeholder="Password" />
            </div>
            <a className="mb-30 color-primary" href="#">
              Forgot Password?
            </a>
            <button className="btn btn-primary d-table mx-auto w-100 wow slideInDown animated">
              {loading2 ? (
                <CircularProgress size={20} color="#fff" />
              ) : (
                "Sign In"
              )}
            </button>
            <div className="text-center mt-30 wow slideInUp animated">
              <span>Don’t have an account?</span>
              <Link to="register" className="color-primary">
                Sign Up!
              </Link>
            </div>
          </form>
          <div className="login-form-footer color-gray">
            <ul className="form-list d-table mx-auto color-secondary-a mt-md-30">
              <li>© 2021 RoomNets</li>
              <li>
                <a href="/contactForm">Contact Us</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End Login Form
          ====================================================*/}
      {/* jquery Links
      ==================================================================*/}
    </div>
  );
};

export default Login;
