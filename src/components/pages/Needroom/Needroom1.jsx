import React from "react";
import Header from "../../Header";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { SETNEEDROOMROCESS } from "../../../redux/action";
import Footer from "../../footer";
const NeedRoom1 = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleBack = () => history.goBack();
  const [errors, setErrors] = React.useState([]);
  const [formResponse, setFormResponse] = React.useState({
    no_femalse: "",
    no_males: "",
    searching_for: "",
    interested_shared_room: "",
    room_size: "",
    email: "",
  });
  const validatePage = async () => {
    const {
      email,
      interested_shared_room,
      no_femalse,
      no_males,
      room_size,
      searching_for,
    } = formResponse;
    const newError = new Array();
    if (!email) {
      newError.push("Email not set");
    }

    if (!interested_shared_room) {
      newError.push("you did not select Interest in shared room");
    }
    if (!no_femalse) {
      newError.push("You did not Provide No of females");
    }
    if (!no_males) {
      newError.push("You did not provide no of males");
    }
    if (!room_size) {
      newError.push("You did not check room size");
    }
    if (!searching_for) {
      newError.push("You did select 'searching for' ");
    }

    return newError;
  };
  const handleNext = async () => {
    await validatePage().then((res) => {
      if (res.length > 0) {
        setErrors(res);
        window.scrollTo(0, 150);
      } else {
        history.push("/process-needrooms-advert2");
        dispatch(SETNEEDROOMROCESS(formResponse));
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
                    I need a room advert{" "}
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
                        <h5 className="color-primary">About you</h5>
                      </div>
                      <div className="text-right">
                        <p>1 of 4</p>
                      </div>
                      <div className="row my-40">
                        <div className="form-group col-lg-6">
                          <label>Number of Males</label>
                          <input
                            value={formResponse.no_males}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                no_males: e.target.value,
                              })
                            }
                            className="form-control bg-gray"
                            type="text"
                            name="property-id"
                          />
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Number of Females</label>
                          <input
                            value={formResponse.no_femalse}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                no_femalse: e.target.value,
                              })
                            }
                            className="form-control bg-gray"
                            type="text"
                            name="property-id"
                          />
                        </div>

                        <div className="form-group col-lg-6">
                          <label>
                            Interested in Shared Room?
                            {/* <span style={{ fontSize: "12px" }}>
                              (Tick this if you would also like to partner with
                              other room seekers in a shared flat/apartment)
                            </span> */}
                          </label>
                          <ul className="list-bottom amenities select-option p-0">
                            <li>
                              <input
                                id="feature-13"
                                className="d-none"
                                type="checkbox"
                                name="Agent_fee"
                                checked={
                                  formResponse.interested_shared_room === "Yes"
                                }
                                onChange={() =>
                                  setFormResponse({
                                    ...formResponse,
                                    interested_shared_room: "Yes",
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
                                checked={
                                  formResponse.interested_shared_room === "No"
                                }
                                onChange={() =>
                                  setFormResponse({
                                    ...formResponse,
                                    interested_shared_room: "No",
                                  })
                                }
                              />
                              <label htmlFor="feature-14">No</label>
                            </li>
                          </ul>
                        </div>

                        <div className="form-group col-lg-6">
                          <label>Searching for </label>
                          <select
                            value={formResponse.searching_for}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                searching_for: e.target.value,
                              })
                            }
                            class="form-control bg-gray"
                          >
                            <option value="">-Select-</option>
                            <option value="A single room">A single room</option>
                            <option value="A large room">A large room</option>
                            <option value="A single room">A single room</option>
                            <option value="4 rooms">4 rooms</option>
                            <option value="A whole flat">A whole flat</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Room Size</label>
                          <ul className="list-bottom amenities select-option p-0">
                            <li>
                              <input
                                id="feature-10"
                                className="d-none"
                                type="checkbox"
                                name="Room_size"
                                checked={formResponse.room_size === "Small"}
                                onChange={() =>
                                  setFormResponse({
                                    ...formResponse,
                                    room_size: "Small",
                                  })
                                }
                              />
                              <label htmlFor="feature-10">Small</label>
                            </li>
                            <li>
                              <input
                                id="feature-9"
                                className="d-none"
                                type="checkbox"
                                name="Room_size"
                                checked={
                                  formResponse.room_size === "Average/Big"
                                }
                                onChange={() =>
                                  setFormResponse({
                                    ...formResponse,
                                    room_size: "Average/Big",
                                  })
                                }
                              />
                              <label htmlFor="feature-9">Average/Big</label>
                            </li>
                          </ul>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Email</label>
                          <input
                            value={formResponse.email}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                email: e.target.value,
                              })
                            }
                            className="form-control bg-gray"
                            type="text"
                            name="property-id"
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

export default NeedRoom1;
