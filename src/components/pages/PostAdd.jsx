import React from "react";
import Header from "../Header";
import { Link, useHistory } from "react-router-dom";
import Footer from "../footer";
const PostAdd = () => {
  const history = useHistory();
  const handleSelection1 = (options) => {
    return history.push({ pathname: `/post-options-1`, state: { options: 1 } });
  };
  const handleSelection2 = (options) => {
    return history.push({ pathname: `/post-options-2`, state: { options: 1 } });
  };
  const handleSelection3 = (options) => {
    return history.push({
      pathname: `/process-needrooms-advert1`,
      state: { options: 1 },
    });
  };
  return (
    <div>
      <Header />
      <div className="topPatch" style={{ height: "80px" }} />
      <div>
        <section style={{ backgroundColor: "#f5f5f5" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 wow animated slideInUp">
                <div className="main-title w-75 mx-auto d-table text-center mb-30">
                  {/* <span className="small-title color-primary position-relative line-2-primary">
                    What We Do?
                  </span> */}
                  <h2 className="title mb-20 color-secondary">
                    Advertise for your new roommate
                  </h2>
                  <span className="sub-title">
                    What do you want to advertise?
                  </span>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow animated slideInDown">
                <div className="service-item bg-white px-30 py-40 mt-30">
                  <div className="service-info hover-secondery-primary">
                    <Link
                      to={{
                        pathname: `/post-options-1`,
                        state: { options: 1 },
                      }}
                      className="my-20 d-table"
                      href=""
                    >
                      <h4>Rooms for Rent</h4>
                    </Link>
                    <p>
                      Post an add for a single or more rooms in a building or a
                      flat, including bed rooms shared apartments,
                    </p>
                    <div className="row justify-content-between">
                      <span className="flat-large icon-primary">
                        <i className="flaticon-house" />
                      </span>

                      <button
                        onClick={handleSelection1}
                        className="btn-primary"
                      >
                        Post free add
                      </button>
                    </div>
                    <hr className="border-top-1" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow animated slideInUp">
                <div className="service-item bg-white px-30 py-40 mt-30">
                  <div className="service-info hover-secondery-primary">
                    <Link
                      className="my-20 d-table"
                      to={{
                        pathname: `/post-options-2`,
                        state: { options: 2 },
                      }}
                    >
                      <h4>Whole Flat for rent</h4>
                    </Link>
                    <p>
                      Post add to rent out the whole apartment/flat including
                      service apartments, bed apartments
                    </p>
                    <div className="row justify-content-between">
                      <span className="flat-large icon-primary">
                        <i className="flaticon-deal" />
                      </span>
                      <button
                        onClick={handleSelection2}
                        className="btn-primary"
                      >
                        Post free add
                      </button>
                    </div>
                    <hr className="border-top-1" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow animated slideInDown">
                <div className="service-item bg-white px-30 py-40 mt-30">
                  <div className="service-info hover-secondery-primary">
                    <Link
                      to="/process-needrooms-advert1"
                      className="my-20 d-table"
                    >
                      <h4>I need a room </h4>
                    </Link>
                    <p>
                      Post and add indicating that you need a room/flat so that
                      , others can reach you with rooms offers
                    </p>
                    <div className="row justify-content-between">
                      <span className="flat-large icon-primary">
                        <i className="flaticon-sale" />
                      </span>
                      <button
                        onClick={handleSelection3}
                        className="btn-primary"
                      >
                        Post free add
                      </button>
                    </div>
                    <hr className="border-top-1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="my-80">
              <span className="sub-title ">
                How to View Your Existing Add?{" "}
                <Link to="/Accounts">Accounts</Link>
              </span>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PostAdd;
