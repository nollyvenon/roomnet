import React from "react";
import Header from "../Header";
import Footer from "../footer";
import { Link } from "react-router-dom";
import queryString from "query-string";
const Cities = ({ location: { search } }) => {
  const city = queryString.parse(search).city || "";
  return (
    <>
      <Header />
      <div className="topPatch" style={{ height: "120px" }} />
      <div className="row justify-content-center mt-40 mb-3 ">
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
          className=" text-center "
        >
          <div className="col-lg-7 col-8 mb-1">
            <img className="nav-logo" src="/images/logo/logo2.png" alt="logo" />
          </div>

          <h5>Let's Find you a roommate or room to rent</h5>
        </div>
      </div>
      <div className=" home-slider mt-2 ">
        <div className="col-12 slider-row ">
          <div className="overLaySlider">
            <div className="col-lg-12  d-flex flex-column align-items-center ">
              <div className="row">
                <div className="col-lg-7 ">
                  <h2 className="slider-title">Hi, {city}</h2>
                  <p className="slider-title-sub">
            Helping you to find the perfect room/roommates and apartments
                  </p>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-body pt-4 pb-3 text-left p-3">
                      <h5 className="my-3  line-bottom ">
                        I'm Interested in :
                      </h5>
                      <ul>
                        <li>
                          <a href="/postadd">Post Add</a>
                        </li>
                        <li>
                          <Link
                            to={{
                              pathname: "/Browse-rooms-list-rooms",
                              state: city,
                            }}
                          >
                            Find Rooms
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={{
                              pathname: "/Browse-rooms-list-apart",
                              state: city,
                            }}
                          >
                            Find Apartments
                          </Link>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img src="/images/cities/map.jpg" className="weathimg" alt="" />
        </div>
      </div>

      <section className="mb-40 border-top-1-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 wow slideInDown animated"></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cities;
