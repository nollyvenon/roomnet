import React from "react";

import { useHistory } from "react-router-dom";

import { useSelector } from "react-redux";
import Header from "../Header";
import Moment from "react-moment";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Footer from "../footer";

const Accounts = () => {
  const history = useHistory();
  const country = useSelector(({ CountryReducer }) => CountryReducer.country);
  const currentUser = useSelector(({ user }) => user.currentUser);
  //   const handleNext = () => {
  //     history.push("/process-rooms-advert2");
  //   };
  React.useEffect(() => console.log(currentUser), []);
  const state = {};
  return (
    <div>
      <Header />
      <div>
        <div className="topPatch" style={{ height: "80px" }} />
        <div className="poststep pricing my-80">
          <div className="container">
            <h3 className="color-secondary line-bottom pb-15 mb-20">
              My Accounts
            </h3>
            {currentUser ? (
              <div className="row">
                <div className="col-md-12 col-lg-4">
                  <div className="sidebar-widget bg-white mt-50 shadow py-40 px-30 wow slideInUp animated">
                    <h3 className="color-secondary line-bottom pb-15 mb-20">
                      Profile
                    </h3>
                    <div className="d-flex">
                      <div className="contact-agent-image mr-20 float-left">
                        <img
                          src="images/team/1.png"
                          className="rounded-circle"
                          alt="images"
                        />
                      </div>
                      <div className="align-self-center color-gray">
                        <h6 className="d-block mb-1 w-100 color-secondary">
                          {currentUser.user.firstName}{" "}
                          {currentUser.user.lastName}
                        </h6>
                        {/* <p> {state.posted_by.Email}</p> */}
                        <p> {currentUser.user.mobileNumber}</p>
                      </div>
                    </div>
                    {/* send message form to seller */}
                    {/* <form action="#" method="post" className="mt-30">
                  <div className="row">
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        className="form-control bg-gray"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="email"
                        className="form-control bg-gray"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        className="form-control bg-gray"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <textarea
                        className="form-control bg-gray"
                        rows={4}
                        placeholder="Type Your Massage"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-primary w-100">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
               */}
                  </div>
                </div>

                <div className="col-lg-8 border-top-1-gray py-30 wow slideInRight animated">
                  <h3 className="color-secondary line-bottom pb-15 mb-20">
                    My Details
                  </h3>
                  <div className="row">
                    <div className="col-md-12 col-lg-12">
                      <ul className="list-by-tag">
                        <li>
                          First Name: <span>{currentUser.user.firstName}</span>
                        </li>
                        <li>
                          Last Name : <span>{currentUser.user.lastName}</span>
                        </li>
                        <li>
                          Email: <span>{currentUser.user.Email}</span>
                        </li>
                        <li>
                          Mobile Number :{" "}
                          <span>{currentUser.user.mobileNumber}</span>
                        </li>
                       { currentUser.user.country&&<li>
                         Country Of Resident :{" "}
                          <span>
                          {currentUser.user.country}
                          </span>
                        </li>}
                        <li>
                          Registeration Date :{" "}
                          <span>
                            <Moment>{currentUser.user.created_at}</Moment>
                          </span>
                        </li>
                        <li>
                          My Post :{" "}
                          <a href="/">
                            <span>View</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <p className="alert alert-danger">
                    <ErrorOutlineIcon /> You Must Be Logged In To View This Page
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Accounts;
