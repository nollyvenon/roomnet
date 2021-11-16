import React, { useState } from "react";
import Header from "../../Header";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { LOGINSUCCESS } from "../../../redux/action";
import Footer from "../../footer";

const PostRooms4s = () => {
  const history = useHistory();
  const [registerLoading, setRegisterLoaading] = useState(false);
  const handleBack = () => history.goBack();
  const dispatch = useDispatch();
  const [loading2, setLoading2] = useState(false);
  const [isUserRegister, setIsUserRegister] = useState(false);

  const PostRommsAddReducer = useSelector(
    ({ PostRommsAddReducer }) => PostRommsAddReducer
  );
  const currentUser = useSelector(({ user }) => user.currentUser);
  const [formResponse2, setFormResponse2] = React.useState({
    password: "",
    email: PostRommsAddReducer.email,
  });
  const [formResponse, setFormResponse] = React.useState({
    email: PostRommsAddReducer.email,
    password: "",
    firstName: "",
    lastName: "",
    password2: "",
    Gender: "",
    mobileNumber: "",
    country:""
  });

  const handleNext2 = async () => {
    const { email, password } = formResponse2;
    if (!formResponse2.email || !formResponse2.password) {
      return alert("All fields are compulsory");
    }
    setLoading2(true);
    await axios
      .post(`/api/v1/login`, {
        Email: email,
        Password: password,
      })
      .then((response) => {
        setLoading2(false);
        console.log(response.data);
        dispatch(LOGINSUCCESS(response.data.userData));
        // history.push("/");

        // response.data.userData &&
        //   response.data.userData.length > 0 &&
      })
      .then(() => {
        history.push("/process-rooms-advert4");
      })
      .catch((err) => {
        setLoading2(false);

        if (err.response && err.response.data.message) {
          alert(err.response.data.message);
        } else {
          alert("An error occured, make sure you have a working network");
        }
        console.log(err);
      });
  };
  // const handleNext = () => history.push("/process-rooms-advert4");
  const handleNext = () => {
    console.log(formResponse);
    if (
      !formResponse.password ||
      !formResponse.password2 ||
      !formResponse.firstName ||
      !formResponse.lastName ||
      !formResponse.email ||
      !formResponse.country
    ) {
      return alert("all fields are compulsory");
    }
    if (formResponse.password != formResponse.password2) {
      return alert("both password do not match");
    }

    handleRegister();
  };

  const handleRegister = async () => {
    setRegisterLoaading(true);
    await axios
      .post(`/api/v1/Register`, formResponse)
      .then((response) => {
        setRegisterLoaading(false);
        // console.log(response.data);
        dispatch(LOGINSUCCESS(response.data.userData));
        history.push("/process-rooms-advert4");
        // response.data.userData &&
        //   response.data.userData.length > 0 &&
      })
      .catch((err) => {
        setRegisterLoaading(false);
        if (err.response.data) {
          alert(err.response.data.message);
        }
        console.log(err);
      });
  };
  const checkUserRegistered = async () => {
    await axios
      .get(`/api/v1/isUserRegistered/${PostRommsAddReducer.email}`)
      .then((response) => {
        console.log(response.data);
        response.data.status && setIsUserRegister(true);
        // dispatch(LOGINSUCCESS(response.data.userData));
        // history.push("/users-dashboard");
        // response.data.userData &&
        //   response.data.userData.length > 0 &&
      })
      .catch((err) => {
        if (err.response.data.message) {
          !err.response.data.status && setIsUserRegister(false);
        } else {
          console.log("error occured");
        }
        // console.log(err);
      });
  };

  const Loginpage = () => {
    return (
      <div className="col-lg-8 myform">
        <div className="submit-property bg-light">
          <form
            className="property-submit-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="property-info mt-30 bg-white py-40 px-30">
              <div className="text-center">
                <h5 className="color-primary">
                  Welcome {PostRommsAddReducer.email}, login to contnue
                </h5>
              </div>
              <div className="row my-40 justify-content-center">
                <div className="form-group col-lg-8">
                  <label>Your- Email</label>
                  <input
                    className="form-control bg-gray"
                    type="text"
                    name="property-id"
                    disabled
                    value={PostRommsAddReducer.email}
                  />
                </div>
                <div className="form-group col-lg-8">
                  <label>Password</label>
                  <input
                    className="form-control bg-gray"
                    type="password"
                    name="property-id"
                    value={formResponse2.password}
                    onChange={(e) =>
                      setFormResponse2({
                        ...formResponse2,
                        password: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="col-lg-12 my-80">
                  <button onClick={handleBack} className="btn btn-primary">
                    Back
                  </button>
                  <button
                    onClick={handleNext2}
                    className="btn btn-primary float-right"
                  >
                    Proceed
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
  const Registerpage = () => {
    return (
      <div className="col-lg-8 myform">
        <div className="submit-property bg-light">
          <form
            className="property-submit-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="property-info mt-30 bg-white py-40 px-30">
              <div className="text-center">
                <h5 className="color-primary">You Are New to RoomNets</h5>
              </div>
              <div className="row my-40">
                <div className="form-group col-lg-6">
                  <label>Your- Email</label>
                  <input
                    className="form-control bg-gray"
                    type="text"
                    name="property-id"
                    disabled
                    value={PostRommsAddReducer.email}
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label>Set Password</label>
                  <input
                    className="form-control bg-gray"
                    type="password"
                    name="property-id"
                    value={formResponse.password}
                    onChange={(e) =>
                      setFormResponse({
                        ...formResponse,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label>Confirm Password</label>
                  <input
                    className="form-control bg-gray"
                    type="password"
                    name="property-id"
                    value={formResponse.password2}
                    onChange={(e) =>
                      setFormResponse({
                        ...formResponse,
                        password2: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="form-group col-lg-6">
                  <label>Your Firstname</label>
                  <input
                    className="form-control bg-gray"
                    type="text"
                    name="property-id"
                    value={formResponse.firstName}
                    onChange={(e) =>
                      setFormResponse({
                        ...formResponse,
                        firstName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label>Your Lastname</label>
                  <input
                    className="form-control bg-gray"
                    type="text"
                    name="property-id"
                    value={formResponse.lastName}
                    onChange={(e) =>
                      setFormResponse({
                        ...formResponse,
                        lastName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group col-lg-5">
                  <label>Your-Mobile Number</label>
                  <input
                    className="form-control bg-gray"
                    type="number"
                    name="property-id"
                    value={formResponse.mobileNumber}
                    onChange={(e) =>
                      setFormResponse({
                        ...formResponse,
                        mobileNumber: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group col-lg-6">
                          <label>Country Of Resident</label>
                          <select
                            value={formResponse.country}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                               country: e.target.value,
                              })
                            }
                            class="form-control bg-gray"
                          >
                            <option value="">Select Country</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Usa">Usa</option>
                            <option value="South Africa">South Africa</option>
                            <option value="Ghana">Ghana</option>
                          </select>
                        </div>
                <div className="col-lg-12">
                  <button onClick={handleBack} className="btn btn-primary">
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    className="btn btn-primary float-right"
                  >
                    {registerLoading ? (
                      <CircularProgress size={16} color="#fff" />
                    ) : (
                      "Proceed"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  React.useEffect(() => {
    currentUser
      ? history.push("/process-rooms-advert4")
      : checkUserRegistered();
  }, []);
  return (
    <div>
      <Header />
      <div>
        <div className="topPatch" style={{ height: "80px" }} />
        <div className="poststep pricing my-80">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 wow animated slideInUp">
                <div className="main-title w-75 mx-auto d-table text-center mb-30">
                  {/* <span className="small-title color-primary position-relative line-2-primary">
                    What We Do?
                  </span> */}
                  <h2 className="title mb-20 color-primary">
                    Advertise your room
                  </h2>
                </div>
              </div>
              {!isUserRegister ? Registerpage() : Loginpage()}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostRooms4s;
