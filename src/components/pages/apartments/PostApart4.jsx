import React from "react";
import Header from "../../Header";
import Footer from "../../footer";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { SETPOSTFLATPROCESS } from "../../../redux/action";
const PostApart4 = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleBack = () => history.goBack();

  const [errors, setErrors] = React.useState([]);

  const [formResponse, setFormResponse] = React.useState({
    new_room_mate: {
      smoker: "",
      language_spoken: "",
      sexual_orientation: "",
      nationality: "",
      occupation: "",
      pets: "",
      minimum_age: "",
      maximum_age: "",
      couples_welcomed: "",
      gender: "",
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
        history.push("/process-apart-advert4s");
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
                      <div className="text-center">
                        <h4 className=" color-primary">
                          New Tenants Requirements
                        </h4>
                      </div>
                      <div className="row my-40">
                        <div className="form-group col-lg-6">
                          <label>Smoker ?</label>
                          <ul className="list-bottom amenities select-option p-0">
                            <li>
                              <input
                                id="feature-13op"
                                className="d-none"
                                type="checkbox"
                                name="Agent_fee"
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
                              <label htmlFor="feature-13op">Yes</label>
                            </li>
                            <li>
                              <input
                                id="feature-14op"
                                className="d-none"
                                type="checkbox"
                                name="Agent_fee"
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
                              <label htmlFor="feature-14op">No</label>
                            </li>
                          </ul>
                        </div>

                        <div className="form-group col-lg-6">
                          <label>Occupation? </label>
                          <select
                            value={formResponse.new_room_mate.occupation}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                new_room_mate: {
                                  ...formResponse.new_room_mate,
                                  occupation: e.target.value,
                                },
                              })
                            }
                            class="form-control bg-gray"
                          >
                            <option value="">-Select-</option>
                            <option value="Student">Student</option>
                            <option value="Professional">Professional</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Gender </label>
                          <select
                            value={formResponse.new_room_mate.gender}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                new_room_mate: {
                                  ...formResponse.new_room_mate,
                                  gender: e.target.value,
                                },
                              })
                            }
                            class="form-control bg-gray"
                          >
                            <option value="">-Not Disclosed-</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Pets Allowed ? </label>
                          <select
                            value={formResponse.new_room_mate.pets}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                new_room_mate: {
                                  ...formResponse.new_room_mate,
                                  pets: e.target.value,
                                },
                              })
                            }
                            class="form-control bg-gray"
                          >
                            <option value="">-Select-</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Couples Welcomed ? </label>
                          <select
                            value={formResponse.new_room_mate.couples_welcomed}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                new_room_mate: {
                                  ...formResponse.new_room_mate,
                                  couples_welcomed: e.target.value,
                                },
                              })
                            }
                            class="form-control bg-gray"
                          >
                            <option value="">-Select-</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Mimimum Age ? </label>
                          <select
                            value={formResponse.new_room_mate.minimum_age}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                new_room_mate: {
                                  ...formResponse.new_room_mate,
                                  minimum_age: e.target.value,
                                },
                              })
                            }
                            class="form-control bg-gray"
                          >
                            <option value="">-Select-</option>
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
                          <select
                            value={formResponse.new_room_mate.maximum_age}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                new_room_mate: {
                                  ...formResponse.new_room_mate,
                                  maximum_age: e.target.value,
                                },
                              })
                            }
                            class="form-control bg-gray"
                          >
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
                          <select
                            value={
                              formResponse.new_room_mate.sexual_orientation
                            }
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                new_room_mate: {
                                  ...formResponse.new_room_mate,
                                  sexual_orientation: e.target.value,
                                },
                              })
                            }
                            class="form-control bg-gray"
                          >
                            <option value="">-Not Disclosed-</option>
                            <option value="Straight">Straight</option>
                            <option value="Mixed">Mixed</option>
                            <option value="Gay/Lesbian">Gay/Lesbians</option>
                            <option value="Bi-sexual">Bi-sexual</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Nationality ? </label>
                          <select
                            value={formResponse.new_room_mate.nationality}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                new_room_mate: {
                                  ...formResponse.new_room_mate,
                                  nationality: e.target.value,
                                },
                              })
                            }
                            class="form-control bg-gray"
                          >
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
      <Footer />
    </div>
  );
};

export default PostApart4;
