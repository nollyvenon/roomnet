import React from "react";
import Header from "../../Header";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Alert from "@material-ui/lab/Alert";

import { SETPOSTROOMPROCESS } from "../../../redux/action";
import Footer from "../../footer";
const PostRooms3 = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleBack = () => history.goBack();
  const [errors, setErrors] = React.useState([]);

  const [formResponse, setFormResponse] = React.useState({
    existing_room_mates: {
      smoker: "",
      no_males: 0,
      no_femalse: 0,
      pets: "",
      language_spoken: "",
      sexual_orientation: "",
      nationality: "",
    },
    new_room_mate: {
      smoker: "",
      language_spoken: "",
      sexual_orientation: "",
      nationality: "",
      occupation: "",
      pets: "",
      mimimum_age: "",
      maximum_age: "",
      couples_welcomed: "",
    },
  });

  const validatePage = async () => {
    // const {
    //   smoker,
    //   no_males,
    //   no_femalse,
    //   pets,
    //   language_spoken,
    //   sexual_orientation,
    //   nationality,
    // } = formResponse.existing_room_mates;
    const {
      couples_welcomed,
      maximum_age,
      mimimum_age,
      nationality,
      occupation,
      pets,
      sexual_orientation,
      smoker,
    } = formResponse.new_room_mate;
    const newError = new Array();
    // if (!smoker) {
    //   newError.push("You didnt set smoker");
    // }

    // if (!pets) {
    //   newError.push("You did not set pets");
    // }

    // if (!sexual_orientation) {
    //   newError.push("You did not set sexual orientation");
    // }
    // if (!nationality) {
    //   newError.push("You did not set nationality");
    // }
    return newError;
  };
  const handleNext = async () => {
    await validatePage().then((res) => {
      if (res.length > 0) {
        setErrors(res);
        window.scrollTo(0, 150);
      } else {
        history.push("/process-rooms-advert4s");
        dispatch(SETPOSTROOMPROCESS(formResponse));
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
                    Advertise your room
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
                      <div className="text-center">
                        <h4 className=" color-primary">Existing Room mates</h4>
                      </div>

                      <div className="text-right">
                        <p>3 of 4</p>
                      </div>
                      <div style={{ height: "10px" }} />

                      <div className="row my-40">
                        <div className="form-group col-lg-6">
                          <label>Smokers ?</label>
                          <ul className="list-bottom amenities select-option p-0">
                            <li>
                              <input
                                id="feature-smoker-yes"
                                className="d-none"
                                type="checkbox"
                                name="smoker"
                                checked={
                                  formResponse.existing_room_mates.smoker ==
                                  "yes"
                                }
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,
                                    existing_room_mates: {
                                      ...formResponse.existing_room_mates,
                                      smoker: "yes",
                                    },
                                  })
                                }
                              />
                              <label htmlFor="feature-smoker-yes">Yes</label>
                            </li>
                            <li>
                              <input
                                id="feature-smoker-no"
                                className="d-none"
                                type="checkbox"
                                name="smoker"
                                checked={
                                  formResponse.existing_room_mates.smoker ==
                                  "No"
                                }
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,
                                    existing_room_mates: {
                                      ...formResponse.existing_room_mates,
                                      smoker: "No",
                                    },
                                  })
                                }
                              />
                              <label htmlFor="feature-smoker-no">No</label>
                            </li>
                          </ul>
                        </div>

                        <div className="form-group col-lg-6">
                          <label>Number of Males Present</label>
                          <input
                            className="form-control bg-gray"
                            type="number"
                            name="property-id"
                          />
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Number Of Females Present</label>
                          <input type="number" class="form-control  bg-gray" />
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Pets ? </label>
                          <select class="form-control br-gray">
                            <option value="">-Select-</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Language spoken? </label>
                          <select class="form-control bg-gray">
                            <option value="">-Not Disclosed-</option>
                            <option value="Mixed">Mixed</option>
                            <option value="English">English</option>
                            <option value="African">Africans</option>
                            <option value="Russian">Russian</option>
                            <option value="Arabic">Arabic</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Sexual Orientation ? </label>
                          <select class="form-control br-gray">
                            <option value="Not Disclosed">
                              -Not Disclosed-
                            </option>
                            <option value="Straight">Straight</option>
                            <option value="Mixed">Mixed</option>
                            <option value="Gay/lesbian">Gay/Lesbians</option>
                            <option value="Bisexual">Bi-sexual</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Nationality ? </label>
                          <select class="form-control">
                            <option value="Not Disclosed">
                              -Not Disclosed-
                            </option>
                            <option value="Nigeria">Nigeia</option>
                            <option value="Mixed">Mixed</option>
                            <option value="Ghana">Ghana</option>
                            <option value="South Africa">South Africa</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Uk">Uk</option>
                          </select>
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
                        {/* <div className="form-group col-lg-6">
                          <label>Broker (Agent) Fee?</label>
                          <ul className="list-bottom amenities select-option p-0">
                            <li>
                              <input
                                id="feature-13"
                                className="d-none"
                                type="radio"
                                name="Agent_fee"
                              />
                              <label htmlFor="feature-13">Yes</label>
                            </li>
                            <li>
                              <input
                                id="feature-14"
                                className="d-none"
                                type="radio"
                                name="Agent_fee"
                              />
                              <label htmlFor="feature-14">No</label>
                            </li>
                          </ul>
                        </div> */}
                      </div>

                      <div className="text-center">
                        <h4 className=" color-primary">
                          New Roommate Requirement{" "}
                        </h4>
                      </div>
                      <div className="row my-40">
                        <div className="form-group col-lg-6">
                          <label>Smoker ?</label>
                          <ul className="list-bottom amenities select-option p-0">
                            <li>
                              <input
                                id="feature-123"
                                className="d-none"
                                type="checkbox"
                                name="smoker"
                                checked={
                                  formResponse.new_room_mate.smoker == "yes"
                                }
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,
                                    new_room_mate: {
                                      ...formResponse.new_room_mate,
                                      smoker: "yes",
                                    },
                                  })
                                }
                              />
                              <label htmlFor="feature-123">Yes</label>
                            </li>
                            <li>
                              <input
                                id="feature-124"
                                className="d-none"
                                type="checkbox"
                                name="smoker"
                                checked={
                                  formResponse.new_room_mate.smoker == "No"
                                }
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,
                                    new_room_mate: {
                                      ...formResponse.new_room_mate,
                                      smoker: "No",
                                    },
                                  })
                                }
                              />
                              <label htmlFor="feature-124">No</label>
                            </li>
                          </ul>
                        </div>

                        <div className="form-group col-lg-6">
                          <label>Occupation? </label>
                          <select class="form-control bg-gray">
                            <option value="Undisclosed">-Undisclosed-</option>
                            <option value="Student">Student</option>
                            <option value="Professional">Professional</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Gender </label>
                          <select class="form-control bg-gray">
                            <option value="Not Disclosed">
                              -Not Disclosed-
                            </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Pets Allowed ? </label>
                          <select class="form-control bg-gray">
                            <option value="">-Select-</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Couples Welcomed ? </label>
                          <select class="form-control bg-gray">
                            <option value="">-Select-</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Mimimum Age ? </label>
                          <select class="form-control bg-gray">
                            <option value="Any">Any</option>
                            <option value="10 or Above">10 or Above</option>
                            <option value="20 or Above">20 or Above</option>
                            <option value="30 or Above">30 or Above</option>
                            <option value="40 or Above">40 or Above</option>
                            <option value="50 or Above">50 or Above</option>
                            <option value="60 or Above">60 or Above</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Maximum Age ? </label>
                          <select class="form-control bg-gray">
                            <option value="">-Select-</option>
                            <option value="Any">Any</option>
                            <option value="10 Or Below">10 Or Below</option>
                            <option value="20 Or Below">20 Or Below</option>
                            <option value="30 Or Below">30 Or Below</option>
                            <option value="40 Or Below">40 Or Below</option>
                            <option value="50 Or Below">50 Or Below</option>
                            <option value="60 Or Below">60 Or Below</option>
                            <option value="70 Or Below">70 Or Below</option>
                            <option value="100 Or Below">100 Or Below</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Sexual Orientation ? </label>
                          <select class="form-control bg-gray">
                            <option value="">-Not Disclosed-</option>
                            <option value="Straight">Straight</option>
                            <option value="Mixed">Mixed</option>
                            <option value="Gay/Lesbians">Gay/Lesbians</option>
                            <option value="Bi-sexual">Bi-sexual</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Nationality ? </label>
                          <select class="form-control bg-gray">
                            <option value="">-Not Disclosed-</option>
                            <option value="Nigeria">Nigeia</option>
                            <option value="Mixed">Mixed</option>
                            <option value="Ghana">Ghana</option>
                            <option value="South Africa">South Africa</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Uk">Uk</option>
                          </select>
                        </div>
                      </div>

                      <div className="row"></div>
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
                          Next
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default PostRooms3;
