import React from "react";
import Header from "../../Header";
import Footer from "../../footer";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

import { SETPOSTFLATPROCESS } from "../../../redux/action";
const PostApart3 = () => {
  const history = useHistory();
  const [errors, setErrors] = React.useState([]);
  const dispatch = useDispatch();
  const handleBack = () => history.goBack();

  const [formResponse, setFormResponse] = React.useState({
    no_toilets: "",
    no_kitchen: "",
    amenities_private_toilets: null,

    rooms_size: "",
  });
  const validatePage = async () => {
    const { no_toilets, no_kitchen, amenities_private_toilets, rooms_size } =
      formResponse;
    const newError = new Array();
    if (!rooms_size) {
      newError.push("You did not set room size");
    }
    if (!no_toilets) {
      newError.push("You did not set number of toilets");
    }
    if (!no_kitchen) {
      newError.push("You did not provide number of kitches");
    }
    if (amenities_private_toilets == null) {
      newError.push("You did not select private toilets ?");
    }
    // if (!email) {
    //   newError.push("You did not provide your email");
    // }

    return newError;
  };
  const handleNext = async () => {
    await validatePage().then((res) => {
      if (res.length > 0) {
        setErrors(res);
        window.scrollTo(0, 150);
      } else {
        history.push("/process-apart-advert4");
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
                </div>
              </div>
              <div className="col-lg-8 myform">
                <div className="submit-property bg-light">
                  <form
                    className="property-submit-form"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="property-info mt-30 bg-white py-40 px-30">
                      <div className="text-left">
                        <h5 className="color-primary">The rooms</h5>
                      </div>
                      <div className="row my-40">
                        <div className="form-group col-lg-6">
                          <label>Number Of Toilets/Bathrooms</label>
                          <input
                            className="form-control bg-gray"
                            type="number"
                            name="land-area"
                            value={formResponse.no_toilets_}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                no_toilets: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div className="form-group col-lg-6">
                          <label>
                            Private Toilets ?
                            <span style={{ fontSize: "12px" }}>
                              {" "}
                              (tick if each room has its own toilet/shower)
                            </span>
                          </label>
                          <ul className="list-bottom amenities select-option p-0">
                            <li>
                              <input
                                id="feature-13po"
                                className="d-none"
                                type="checkbox"
                                name="Agent_fee"
                                checked={
                                  formResponse.amenities_private_toilets ===
                                  true
                                }
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,
                                    amenities_private_toilets: true,
                                  })
                                }
                              />
                              <label htmlFor="feature-13po">Yes</label>
                            </li>
                            <li>
                              <input
                                id="feature-14op"
                                className="d-none"
                                type="checkbox"
                                name="Agent_fee"
                                checked={
                                  formResponse.amenities_private_toilets ===
                                  false
                                }
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,
                                    amenities_private_toilets: false,
                                  })
                                }
                              />
                              <label htmlFor="feature-14op">No</label>
                            </li>
                          </ul>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Number of Kitchens </label>
                          <input
                            className="form-control bg-gray"
                            type="number"
                            name="property-id"
                            value={formResponse.no_kitchen}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                no_kitchen: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div className="form-group col-lg-6">
                          <label>Room Size</label>
                          <ul className="list-bottoms amenities select-option p-0">
                            <li>
                              <input
                                id="feature-10"
                                className="d-none"
                                type="checkbox"
                                name="Room_size"
                                checked={formResponse.rooms_size == "Small"}
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,
                                    rooms_size: "Small",
                                  })
                                }
                              />
                              <label htmlFor="feature-10">Small</label>
                            </li>
                            <li>
                              <input
                                id="feature-111"
                                className="d-none"
                                type="checkbox"
                                name="Room_size"
                                checked={
                                  formResponse.rooms_size == "Big/Average"
                                }
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,
                                    rooms_size: "Big/Average",
                                  })
                                }
                              />
                              <label htmlFor="feature-111">Big/Average</label>
                            </li>
                          </ul>
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

                        <div className="col-lg-12">
                          <button
                            onClick={handleBack}
                            className="btn btn-primary"
                          >
                            Back
                          </button>
                          <button
                            onClick={handleNext}
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostApart3;
