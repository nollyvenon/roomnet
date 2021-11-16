import React from "react";
import Header from "../../Header";
import { useHistory } from "react-router-dom";
import Footer from "../../footer";
import { useSelector, useDispatch } from "react-redux";
import { SETNEEDROOMROCESS } from "../../../redux/action";
const NeedRoom3 = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleBack = () => history.goBack();
  const [formResponse, setFormResponse] = React.useState({
    smoker: "",
    prefered_city: "",
    pets: "",
    language_spoken: "",
    nationality: "",
    sexual_orientation: "",
    occupation: "",
    age_range: "",
    amenities_swim: false,
    amenities_internet: false,
    amenities_private_toilets: false,
    amenities_play_ground: false,
    amenities_parking_space: false,
    amenities_entry_disabled: false,
    amenities_balcony: false,
    amenities_others: false,
    new_room_mate: {
      smoker: "",
      language_spoken: "",
      sexual_orientation: "",
      nationality: "",
      occupation: "",
      pets: "",
      gender: "",
      mimimum_age: "",
      maximum_age: "",
      couples_welcomed: "",
    },
  });
  const handleNext = async () => {
    await dispatch(SETNEEDROOMROCESS(formResponse));
    history.push("/process-needrooms-advert4");
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
                    I need a room advert
                  </h2>
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
                        <h4 className=" color-primary">About you </h4>
                      </div>
                      <div className="text-right">
                        <p>3 of 4</p>
                      </div>

                      <div className="row my-40">
                        <div className="form-group col-lg-6">
                          <label>Are you a smokers ?</label>
                          <ul className="list-bottom amenities select-option p-0">
                            <li>
                              <input
                                id="feature-13"
                                className="d-none"
                                type="checkbox"
                                name="Agent_fee"
                                checked={formResponse.smoker === "Yes"}
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,
                                    smoker: "Yes",
                                  })
                                }
                              />
                              <label htmlFor="feature-13">Yes</label>
                            </li>
                            <li>
                              <input
                                id="feature-14"
                                className="d-none"
                                type="checkbox"
                                name="Agent_fee"
                                checked={formResponse.smoker === "No"}
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,
                                    smoker: "No",
                                  })
                                }
                              />
                              <label htmlFor="feature-14">No</label>
                            </li>
                          </ul>
                        </div>

                        <div className="form-group col-lg-6">
                          <label>Which city do you want to live</label>
                          <input
                            value={formResponse.prefered_city}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                prefered_city: e.target.value,
                              })
                            }
                            type="text"
                            class="form-control  bg-gray"
                          />
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Do you have pets ? </label>
                          <select class="form-control br-gray">
                            <option value="">-Select-</option>
                            <option value="Per Week">Yes</option>
                            <option value="Per Anum">No</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Your Main Language? </label>
                          <select class="form-control bg-gray">
                            <option value="">-Undisclosed-</option>
                            <option value="Per Anum">Mixed</option>
                            <option value="Per Week">English</option>
                            <option value="Per Anum">Africans</option>
                            <option value="Per Anum">Russian</option>
                            <option value="Per Anum">Arabic</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6">
                          <label> Your Nationality ? </label>
                          <select class="form-control">
                            <option value="">-Undisclosed-</option>
                            <option value="Per Week">Nigeia</option>
                            <option value="Per Anum">Mixed</option>
                            <option value="Per Anum">Ghana</option>
                            <option value="Per Anum">USA</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6">
                          <label> Your Sexual Orientation ? </label>
                          <select class="form-control br-gray">
                            <option value="">-Undisclosed-</option>
                            <option value="Per Week">Straight</option>
                            <option value="Per Anum">Mixed</option>
                            <option value="Per Anum">Gay/Lesbians</option>
                            <option value="Per Anum">Bi-sexual</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-12">
                          <label>My prefrence amemities</label>
                          <ul className="list-bottom amenities select-option p-0">
                            <li>
                              <input
                                id="feature-133"
                                className="d-none"
                                type="checkbox"
                                checked={formResponse.amenities_swim == true}
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,

                                    amenities_swim:
                                      !formResponse.amenities_swim,
                                  })
                                }
                              />
                              <label htmlFor="feature-133">
                                Swimmming Pool
                              </label>
                            </li>
                            <li>
                              <input
                                id="feature-11"
                                className="d-none"
                                type="checkbox"
                                checked={
                                  formResponse.amenities_internet == true
                                }
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,

                                    amenities_internet:
                                      !formResponse.amenities_internet,
                                  })
                                }
                              />
                              <label htmlFor="feature-11">Internet</label>
                            </li>
                            <li>
                              <input
                                id="feature-144"
                                className="d-none"
                                type="checkbox"
                                checked={
                                  formResponse.amenities_play_ground == true
                                }
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,

                                    amenities_play_ground:
                                      !formResponse.amenities_play_ground,
                                  })
                                }
                              />
                              <label htmlFor="feature-144">Play Ground</label>
                            </li>
                            <li>
                              <input
                                id="feature-15"
                                className="d-none"
                                type="checkbox"
                                checked={
                                  formResponse.amenities_parking_space == true
                                }
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,
                                    amenities_parking_space:
                                      !formResponse.amenities_parking_space,
                                  })
                                }
                              />
                              <label htmlFor="feature-15">
                                Parking Space/Garaage
                              </label>
                            </li>
                            <li>
                              <input
                                id="feature-16"
                                className="d-none"
                                type="checkbox"
                                checked={
                                  formResponse.amenities_entry_disabled == true
                                }
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,

                                    amenities_entry_disabled:
                                      !formResponse.amenities_entry_disabled,
                                  })
                                }
                              />
                              <label htmlFor="feature-16">
                                Easy entry for Disabled
                              </label>
                            </li>
                            <li>
                              <input
                                id="feature-17"
                                className="d-none"
                                type="checkbox"
                                checked={formResponse.amenities_balcony == true}
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,

                                    amenities_balcony:
                                      !formResponse.amenities_balcony,
                                  })
                                }
                              />
                              <label htmlFor="feature-17">Balcony</label>
                            </li>
                            <li>
                              <input
                                id="feature-18"
                                className="d-none"
                                type="checkbox"
                                checked={formResponse.amenities_others == true}
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,

                                    amenities_others:
                                      !formResponse.amenities_others,
                                  })
                                }
                              />
                              <label htmlFor="feature-18">Others</label>
                            </li>
                          </ul>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Your Occupation? </label>
                          <select class="form-control bg-gray">
                            <option value="">Undisclosed</option>
                            <option value="Per Week">Student</option>
                            <option value="Per Anum">Professional</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Your Age Range? </label>
                          <select class="form-control bg-gray">
                            <option value="">Undisclosed</option>

                            <option value="Per Anum">10 Or Below</option>
                            <option value="Per Anum">20 Or Below</option>
                            <option value="Per Anum">30 Or Below</option>
                            <option value="Per Anum">40 Or Below</option>
                            <option value="Per Anum">50 Or Below</option>
                            <option value="Per Anum">60 Or Below</option>
                            <option value="Per Anum">70 Or Below</option>
                            <option value="Per Anum">100 Or Below</option>
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
                          Your Prefered Roommate Requirement{" "}
                        </h4>
                      </div>
                      <div className="row my-40">
                        <div className="form-group col-lg-6">
                          <label>Smoker ?</label>
                          <ul className="list-bottom amenities select-option p-0">
                            <li>
                              <input
                                id="feature-131"
                                className="d-none"
                                type="checkbox"
                                name="Agent_fee"
                                checked={
                                  formResponse.new_room_mate.smoker == "Yes"
                                }
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,
                                    new_room_mate: {
                                      ...formResponse.new_room_mate,
                                      smoker: "Yes",
                                    },
                                  })
                                }
                              />
                              <label htmlFor="feature-131">Yes</label>
                            </li>
                            <li>
                              <input
                                id="feature-141"
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
                              <label htmlFor="feature-141">No</label>
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
                            <option value="">Undisclosed</option>
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
                            <option value="">Undisclosed</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Has Pets ? </label>
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
                            <option value="">Undisclosed</option>
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
                            <option value="Undisclosed">Undisclosed</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Mimimum Age ? </label>
                          <select
                            value={formResponse.new_room_mate.mimimum_age}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                new_room_mate: {
                                  ...formResponse.new_room_mate,
                                  mimimum_age: e.target.value,
                                },
                              })
                            }
                            class="form-control bg-gray"
                          >
                            <option value="Undisclosed">Undisclosed</option>
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
                            <option value="">Undisclosed</option>
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
                            <option value="">Undisclosed</option>
                            <option value="Straight">Straight</option>
                            <option value="Mixed">Mixed</option>
                            <option value="Gay/Lesbians">Gay/Lesbians</option>
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
                            <option value="">Undisclosed</option>
                            <option value="Nigeria">Nigeia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Mixed">Mixed</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Usa">USA</option>
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

export default NeedRoom3;
