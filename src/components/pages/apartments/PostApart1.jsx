import React from "react";
import Header from "../../Header";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SETPOSTFLATPROCESS } from "../../../redux/action";
import Footer from "../../footer";

const PostApart1 = () => {
  const history = useHistory();
  const [errors, setErrors] = React.useState([]);
  const dispatch = useDispatch();
  const country = useSelector(({ CountryReducer }) => CountryReducer.country);
  const [formResponse, setFormResponse] = React.useState({
    no_rooms: "",

    Building_type: "",
    rent: "",
    currency:
      country == "KE"
        ? "KES"
        : country == "US"
        ? "$"
        : country == "NG"
        ? "NGN"
        : country == "IE"
        ? "€"
        : country == "GB"
        ? "£"
        : country == "GH"
        ? "₵"
        : country == "ZA"
        ? "ZAR"
        : "",
    rent_method: "",
    email: "",
    email: "",
    i_am: "",
    post_code: "",
  });
  const validatePage = async () => {
    const {
      no_rooms,

      Building_type,
      rent,
      rent_method,
      email,
      post_code,
    } = formResponse;
    const newError = new Array();
    if (!no_rooms) {
      newError.push("You did not provide the number of rooms");
    }
    if (!email) {
      newError.push("You did not provide your email");
    }
    if (!Building_type) {
      newError.push("You did not provide the Building types");
    }
    if (!rent) {
      newError.push("You did not provide the Rent");
    }
    if (!rent_method) {
      newError.push("You did not provide the rent method");
    }
    // if (!email) {
    //   newError.push("You did not provide your email");
    // }
    if (!post_code) {
      newError.push("You did not provide your post code");
    }
    return newError;
  };
  const handleNext = async () => {
    await validatePage().then((res) => {
      if (res.length > 0) {
        setErrors(res);
        window.scrollTo(0, 150);
      } else {
        history.push({ pathname: "/process-apart-advert2" });
        dispatch(SETPOSTFLATPROCESS(formResponse));
      }
    });
  };

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
                    Advertise your House/Apartment for rent
                  </h2>
                  <div className="row justify-content-center">
                    <div className="col-lg-7 text-left">
                      {errors.length > 0
                        ? errors.map((xxx) => (
                            <p className="error-card alert-danger">{xxx}</p>
                          ))
                        : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 myform">
                <div className="submit-property bg-light">
                  <form
                    className="property-submit-form"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="property-info mt-30 bg-white py-40 px-30">
                      <div className="row">
                        <div className="form-group col-lg-6">
                          <label>Number Of Available Rooms</label>
                          <input
                            className="form-control bg-gray"
                            type="number"
                            name="property-id"
                            value={formResponse.no_rooms}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                no_rooms: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Building Type</label>
                          <select
                            value={formResponse.Building_type}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                Building_type: e.target.value,
                              })
                            }
                            class="form-control"
                          >
                            <option value="">Select Building Type</option>
                            <option value="Apartment">Apartment</option>
                            <option value="House">House</option>
                            <option value="High Rise">HighRise</option>
                            <option value="Duplex">Duplex</option>
                            <option value="Bungalow">Bungalow</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Rent ({formResponse.currency}) </label>
                          <input
                            className="form-control bg-gray"
                            type="number"
                            name="size-prefix"
                            value={formResponse.rent}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                rent: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div className="form-group col-lg-6">
                          <label>Rent Method:</label>
                          <select
                            value={formResponse.rent_method}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                rent_method: e.target.value,
                              })
                            }
                            class="form-control"
                          >
                            <option value="">Select Rent Method</option>
                            <option value="Per Week">Per Week</option>
                            <option value="Per Anum">Per Anum</option>
                            <option value="Per Month">Per Month</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-4">
                          <label>Zip/Post Code</label>
                          <input
                            className="form-control bg-gray"
                            type="text"
                            name="land-area-postfix"
                            value={formResponse.post_code}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                post_code: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Your email</label>
                          <input
                            className="form-control bg-gray"
                            type="text"
                            name="property-id"
                            value={formResponse.email}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                        {/* <div className="form-group col-lg-4">
                          <label>Bedrooms</label>
                          <input
                            className="form-control bg-gray"
                            type="text"
                            name="bedrooms"
                          />
                        </div> */}
                        {/* <div className="form-group col-lg-4">
                          <label>Bathrooms</label>
                          <input
                            className="form-control bg-gray"
                            type="text"
                            name="bathrooms"
                          />
                        </div> */}
                        {/* <div className="form-group col-lg-4">
                          <label>Garages</label>
                          <input
                            className="form-control bg-gray"
                            type="text"
                            name="garages"
                          />
                        </div> */}
                        {/* <div className="form-group col-lg-4">
                          <label>Garages Size</label>
                          <input
                            className="form-control bg-gray"
                            type="text"
                            name="garages-size"
                          />
                        </div> */}
                        {/* <div className="form-group col-lg-4">
                          <label>Built Year</label>
                          <input
                            className="form-control bg-gray"
                            type="text"
                            name="built-year"
                          />
                        </div> */}
                        {/* <div className="form-group col-lg-4">
                          <label>video URL</label>
                          <input
                            className="form-control bg-gray"
                            type="text"
                            name="video-link"
                          />
                        </div> */}
                        {/* <div className="form-group col-lg-4">
                          <label>360° Virtual Tour</label>
                          <input
                            className="form-control bg-gray"
                            type="text"
                            name="virtual-tour"
                          />
                        </div> */}
                        <div className="form-group col-lg-12">
                          <label>I am</label>
                          <ul className="list-bottom amenities select-option p-0">
                            <li>
                              <input
                                id="feature-landlord"
                                className="d-none"
                                type="checkbox"
                                checked={formResponse.i_am === "Landlord"}
                                onChange={() =>
                                  setFormResponse({
                                    ...formResponse,
                                    i_am: "Landlord",
                                  })
                                }
                              />
                              <label htmlFor="feature-landlord">Landlord</label>
                            </li>
                            <li>
                              <input
                                id="feature-landlord2"
                                className="d-none"
                                type="checkbox"
                                checked={
                                  formResponse.i_am === "Live Out Landlord"
                                }
                                onChange={() =>
                                  setFormResponse({
                                    ...formResponse,
                                    i_am: "Live Out Landlord",
                                  })
                                }
                              />
                              <label htmlFor="feature-landlord2">
                                Live Out Landlord
                              </label>
                            </li>
                            <li>
                              <input
                                id="feature-15"
                                className="d-none"
                                type="checkbox"
                                checked={
                                  formResponse.i_am === "Current Tennant"
                                }
                                onChange={() =>
                                  setFormResponse({
                                    ...formResponse,
                                    i_am: "Current Tennant",
                                  })
                                }
                              />
                              <label htmlFor="feature-15">
                                Current Tennant
                              </label>
                            </li>

                            <li>
                              <input
                                id="feature-16"
                                className="d-none"
                                type="checkbox"
                                checked={
                                  formResponse.i_am === "Real Estate Agent"
                                }
                                onChange={() =>
                                  setFormResponse({
                                    ...formResponse,
                                    i_am: "Real Estate Agent",
                                  })
                                }
                              />
                              <label htmlFor="feature-16">
                                Real Estate Agent
                              </label>
                            </li>
                          </ul>
                        </div>

                        <div className="col-lg-12">
                          {/* <button
                            onClick={handleBack}
                            className="btn btn-primary"
                          >
                            Back
                          </button> */}
                          <button
                            onClick={handleNext}
                            className="btn btn-primary float-right"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostApart1;
