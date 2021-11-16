import React from "react";
import Header from "../../Header";
import Footer from "../../footer";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

import Alert from "@material-ui/lab/Alert";

import { SETPOSTROOMPROCESS } from "../../../redux/action";
import AutoCompletePlaces from "../../Autocomplete";

const PostRooms2 = () => {
  const history = useHistory();
  const handleBack = () => history.goBack();

  // const handleNext = () => history.push("/process-rooms-advert3");

  const dispatch = useDispatch();
  const [errors, setErrors] = React.useState([]);
  const [formResponse, setFormResponse] = React.useState({
    building_location: {
      lat: "",
      lng: "",
      place_id: "",
      address: "",
    },
    street_name: "",
    rooms_avail_date: "",
    living_rooms: "",
    furnished_rooms: "",
    broker_agent_fee: "",
    rooms_size: "",
    minimum_stay: "",
    maximum_stay: "",
    amenities_swim: false,
    amenities_internet: false,
    amenities_private_toilets: false,
    amenities_play_ground: false,
    amenities_parking_space: false,
    amenities_entry_disabled: false,
    amenities_balcony: false,
    amenities_others: false,
  });

  const validatePage = async () => {
    const {
      building_location,
      street_name,
      rooms_avail_date,
      living_rooms,
      furnished_rooms,
      broker_agent_fee,
      maximum_stay,
      minimum_stay,
      rooms_size,
    } = formResponse;
    const newError = new Array();
    if (!building_location.lat) {
      newError.push("building location not set");
    }
    // if (!street_name) {
    //   newError.push("You did not provide a street name");
    // }
    // if (!rooms_avail_date) {
    //   newError.push("You did not set rooms available date");
    // }
    if (!living_rooms) {
      newError.push("You did not select living rooms");
    }
    if (!furnished_rooms) {
      newError.push("You did not select check furnished rooms");
    }
    if (!broker_agent_fee) {
      newError.push("You did not tick broker/agent fee");
    }
    if (!rooms_size) {
      newError.push("You did not check room size");
    }
    // if (!minimum_stay) {
    //   newError.push("You did not set mimimum stay");
    // }
    // if (!maximum_stay) {
    //   newError.push("You did not set maximum stay");
    // }
    return newError;
  };
  const handleNext = async () => {
    await validatePage().then((res) => {
      if (res.length > 0) {
        setErrors(res);
        window.scrollTo(0, 150);
      } else {
        history.push("/process-rooms-advert3");
        dispatch(SETPOSTROOMPROCESS(formResponse));
      }
    });
  };
  const handleplaces = async (place) => {
    const place_id = place.place_id;
    const lng = await place.geometry.location.lng();
    const lat = await place.geometry.location.lat();
    const address = place.formatted_address;
    // return await handleToClick(lng, lat, address);
    console.log(address);
    setFormResponse({
      ...formResponse,
      building_location: {
        lat: lat,
        lng: lng,
        place_id: place_id,
        address: address,
      },
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
                      <div className="text-left">
                        <h5 className="color-primary">About the Room</h5>
                      </div>
                      <div className="text-right">
                        <p>2 of 4</p>
                      </div>
                      <div style={{ height: "30px" }} />
                      <div className="row">
                        <div className="form-group col-lg-6">
                          <label>
                            Building Location <sup>* </sup>
                            <small>(or nerarest bus stop)</small>
                          </label>
                          <AutoCompletePlaces
                            className="form-control bg-gray"
                            handleplaces={(places) => handleplaces(places)}
                          />
                          {/* <input
                            value={formResponse.building_location}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                building_location: e.target.value,
                              })
                            }
                            className="form-control bg-gray"
                            type="text"
                            name="property-id"
                          /> */}
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Street Name</label>
                          <input
                            type="text"
                            class="form-control  bg-gray"
                            value={formResponse.street_name}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                street_name: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Rooms Available from</label>
                          <input
                            value={formResponse.rooms_avail_date}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                rooms_avail_date: e.target.value,
                              })
                            }
                            type="date"
                            class="form-control  bg-gray"
                          />
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Living Room? </label>
                          <select
                            value={formResponse.living_rooms}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                living_rooms: e.target.value,
                              })
                            }
                            class="form-control"
                          >
                            <option value="">-Select-</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>
                            Furnished Rooms <sup>*</sup> ?{" "}
                          </label>
                          <select
                            value={formResponse.furnished_rooms}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                furnished_rooms: e.target.value,
                              })
                            }
                            class="form-control  bg-gray"
                          >
                            <option value="">-Select-</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
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

                        <div className="form-group col-lg-6">
                          <label>Minimum Stay? </label>
                          <select
                            value={formResponse.minimum_stay}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                minimum_stay: e.target.value,
                              })
                            }
                            class="form-control  bg-gray"
                          >
                            <option value="">-None-</option>
                            <option value="1-month">1 Month</option>
                            <option value="2-months">2 Months</option>
                            <option value="3-months">3 Months</option>
                            <option value="4-months">4 Month</option>
                            <option value="5-months">5 Month</option>
                            <option value="6-months">6 Months</option>
                            <option value="7-months">7 Months</option>
                            <option value="8-months">8 Months</option>
                            <option value="9-months">9 Months</option>
                            <option value="10-months">10 Months</option>
                            <option value="11-months">11 Months</option>
                            <option value="1 Year">1 Year</option>
                            <option value="2 Years">2 Years</option>
                            <option value="3 Years">3 Years</option>
                            <option value="4 Years & above">
                              4 Years & above
                            </option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>
                            Broker (Agent) Fee? <sup>*</sup>
                          </label>
                          <ul className="list-bottom amenities select-option p-0">
                            <li>
                              <input
                                id="feature-131"
                                className="d-none"
                                type="checkbox"
                                name="Agent_fee"
                                checked={formResponse.broker_agent_fee == "Yes"}
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,
                                    broker_agent_fee: "Yes",
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
                                checked={formResponse.broker_agent_fee == "No"}
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,
                                    broker_agent_fee: "No",
                                  })
                                }
                              />
                              <label htmlFor="feature-141">No</label>
                            </li>
                          </ul>
                        </div>

                        <div className="form-group col-lg-6">
                          <label>Maximum Stay? </label>
                          <select
                            value={formResponse.maximum_stay}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                maximum_stay: e.target.value,
                              })
                            }
                            class="form-control  bg-gray"
                          >
                            <option value="">-None-</option>
                            <option value="1-month">1 Month</option>
                            <option value="2-months">2 Months</option>
                            <option value="3-months">3 Months</option>
                            <option value="4-months">4 Month</option>
                            <option value="5-months">5 Month</option>
                            <option value="6-months">6 Months</option>
                            <option value="7-months">7 Months</option>
                            <option value="8-months">8 Months</option>
                            <option value="9-months">9 Months</option>
                            <option value="10-months">10 Months</option>
                            <option value="11-months">11 Months</option>
                            <option value="1 Year">1 Year</option>
                            <option value="2 Years">2 Years</option>
                            <option value="3 Years">3 Years</option>
                            <option value="4 Years & above">
                              4 Years & above
                            </option>
                          </select>
                        </div>
                        <div className="form-group col-lg-12">
                          <label>
                            Amemities <small>(check all that applies)</small>
                          </label>
                          <ul className="list-bottom amenities select-option p-0">
                            <li>
                              <input
                                id="feature-1202"
                                className="d-none"
                                type="checkbox"
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,
                                    amenities_swim:
                                      !formResponse.amenities_swim,
                                  })
                                }
                                checked={formResponse.amenities_swim === true}
                              />
                              <label htmlFor="feature-1202">
                                Swimmming Pool
                              </label>
                            </li>
                            <li>
                              <input
                                id="feature-1121"
                                className="d-none"
                                type="checkbox"
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,
                                    amenities_internet:
                                      !formResponse.amenities_internet,
                                  })
                                }
                                checked={
                                  formResponse.amenities_internet === true
                                }
                              />
                              <label htmlFor="feature-1121">Internet</label>
                            </li>
                            <li>
                              <input
                                id="feature-144"
                                className="d-none"
                                type="checkbox"
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,
                                    amenities_play_ground:
                                      !formResponse.amenities_play_ground,
                                  })
                                }
                                checked={
                                  formResponse.amenities_play_ground === true
                                }
                              />
                              <label htmlFor="feature-144">Play Ground</label>
                            </li>
                            <li>
                              <input
                                id="feature-15"
                                className="d-none"
                                type="checkbox"
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,
                                    amenities_parking_space:
                                      !formResponse.amenities_parking_space,
                                  })
                                }
                                checked={
                                  formResponse.amenities_parking_space === true
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
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,
                                    amenities_entry_disabled:
                                      !formResponse.amenities_entry_disabled,
                                  })
                                }
                                checked={
                                  formResponse.amenities_entry_disabled === true
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
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,
                                    amenities_balcony:
                                      !formResponse.amenities_balcony,
                                  })
                                }
                                checked={
                                  formResponse.amenities_balcony === true
                                }
                              />
                              <label htmlFor="feature-17">Balcony</label>
                            </li>
                            <li>
                              <input
                                id="feature-172"
                                className="d-none"
                                type="checkbox"
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,
                                    amenities_private_toilets:
                                      !formResponse.amenities_private_toilets,
                                  })
                                }
                                checked={
                                  formResponse.amenities_private_toilets ===
                                  true
                                }
                              />
                              <label htmlFor="feature-172">
                                Private Toilet/bethroms
                              </label>
                            </li>
                            <li>
                              <input
                                id="feature-18"
                                className="d-none"
                                type="checkbox"
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,
                                    amenities_others:
                                      !formResponse.amenities_others,
                                  })
                                }
                                checked={formResponse.amenities_others === true}
                              />
                              <label htmlFor="feature-18">Others</label>
                            </li>
                          </ul>
                        </div>

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

export default PostRooms2;
