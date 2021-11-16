import React from "react";
import Header from "../../Header";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Footer from "../../footer";
const NeedRooms4 = () => {
  const history = useHistory();
  const handleBack = () => history.goBack();

  const [errors, setErrors] = React.useState([]);
  const [Loading, setLoading] = React.useState(false);
  const [ImageState, setImageState] = React.useState([]);
  const NeedRoomReducer = useSelector(({ NeedRoomReducer }) => NeedRoomReducer);
  const currentUser = useSelector(({ user }) => user.currentUser);
  const token = currentUser && currentUser.token;
  // const handleNext = () => {
  //   // history.push("/process-rooms-success")
  //   const Allresponse = { ...NeedRoomReducer, ...formResponse };
  //   console.log(Allresponse);
  // };
  const [formResponse, setFormResponse] = React.useState({
    advert_title: "",
    advert_description: "",
  });
  function handleChange(event) {
    if (
      event.target.files[0].type === "image/png" ||
      event.target.files[0].type === "image/jpg" ||
      event.target.files[0].type === "image/jpeg"
    ) {
      if (event.target.files[0]) {
        const newImagestate = ImageState;
        // newImagestate.push({
        //   file: URL.createObjectURL(event.target.files[0]),
        //   Uri: event.target.files[0],
        // });
        // setImageState(newImagestate);
        setImageState([
          ...ImageState,
          {
            file: URL.createObjectURL(event.target.files[0]),
            Uri: event.target.files[0],
          },
        ]);
      }
    } else {
      return alert("select a valid image format");
    }
  }

  const validatePage = async () => {
    const { advert_description, advert_title } = formResponse;

    const newError = new Array();
    if (!advert_title) {
      newError.push("Advert title can not be blank");
    }

    if (!advert_description) {
      newError.push("Advert body can not be blank");
    }
    // if (ImageState.length < 1) {
    //   newError.push("You must select at least one image or more");
    // }

    return newError;
  };
  const handleNext = async () => {
    history.replace("/process-needrooms-advert5");
    return;
    await validatePage().then(async (res) => {
      if (res.length > 0) {
        setErrors(res);
        window.scrollTo(0, 150);
      } else {
        const Allresponse = { ...NeedRoomReducer, ...formResponse };
        var formData = new FormData();
        formData.append("userData", JSON.stringify(Allresponse));
        for (let x = 0; x < ImageState.length; x++) {
          formData.append("file", ImageState[x]["Uri"]);
        }
        // dispatch(SETPOSTROOMPROCESS(formResponse));
        setLoading(true);
        await axios({
          url: `/Api/v1/PostAddRoms`,
          method: "POST",
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        })
          .then(function (response) {
            console.log(response.data);
            setLoading(false);
            if (response.data.status) {
              history.replace("/process-needrooms-advert5");
            }
          })
          .catch((err) => {
            setLoading(false);
            alert("An error occured");
          });
      }
    });
  };

  const mapImagestate = () => {
    return ImageState.map((xx) => (
      <div className="col-3" style={{ margin: "10px" }}>
        <img
          src={xx.file}
          alt="preview"
          style={{
            maxHeight: "80px",
            display: "block",
            margin: "10px",
            // maxWidth: "80px",
          }}
        />
      </div>
    ));
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
                      <div className="text-right">
                        <p>4 of 4</p>
                      </div>
                      <div className="row">
                        <div className="form-group col-lg-8">
                          <label>Advert title</label>
                          <input
                            className="form-control bg-gray"
                            type="text"
                            name="property-id"
                            value={formResponse.advert_title}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                advert_title: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="form-group col-lg-12">
                          <label>Advert Description</label>
                          <textarea
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                advert_description: e.target.value,
                              })
                            }
                            value={formResponse.advert_description}
                            className="form-control bg-gray"
                            rows="7"
                          ></textarea>
                        </div>
                        <div className="row my-20">{mapImagestate()}</div>

                        <br />
                        <div className="form-group col-lg-10">
                          {ImageState.length < 5 ? (
                            <>
                              {" "}
                              <label>Select -Images</label>
                              <Button
                                className="btn btn-primary"
                                variant="contained"
                                component="label"
                              >
                                <small style={{ fontSize: "8px" }}>
                                  Select images
                                </small>
                                <input
                                  type="file"
                                  hidden
                                  onChange={handleChange}
                                  accept="image/x-png,image/jpeg"
                                />
                              </Button>
                            </>
                          ) : null}
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
                            disabled={Loading}
                            className="btn btn-primary float-right"
                          >
                            {Loading ? (
                              <CircularProgress size={13} color="#fff" />
                            ) : (
                              "Post Add"
                            )}
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

export default NeedRooms4;
