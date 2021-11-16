import React, { useEffect, useCallback, useState } from "react";
import Header from "../Header";
import { useHistory } from "react-router";
import { Carousel } from "react-responsive-carousel";
import ImageViewer from "react-simple-image-viewer";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Moment from "react-moment";
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const DetailView2 = (props) => {
  const history = useHistory();
  const state = history.location.state;
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [images, setimages] = useState([]);
  //   const images = state.media;

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);
  console.log(state);
  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const handleGoback = () => {
    history.goBack();
  };
  useEffect(() => {
    const newARRAY = new Array();
    if (state.media.length > 0) {
      state.media.map((xxx) => newARRAY.push(xxx.uri));
    }
    newARRAY.length > 0 && setimages(newARRAY);
  }, []);
  return (
    <div>
      {/* Start Back to top
      =========================================================================*/}
      <div id="scroll" style={{ display: "none" }}>
        <i className="fa fa-angle-up" />
      </div>
      {/* End Back to top
      =========================================================================*/}

      {/* Start Header
      ===================================================================*/}
      <Header />
      {/* End Header
      ==================================================================*/}

      {/* Single Property Start
      ==================================================================*/}
      <div className="topPatch" style={{ height: "120px" }} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="mb-30">
                <div className="row">
                  <div className="col-md-12 col-lg-8 wow slideInRight animated">
                    <div className="single-property position-relative">
                      <button onClick={handleGoback} className="btn ">
                        <ArrowBackIcon /> Back to searchs
                      </button>
                      <span className="bg-secondary color-white z-index-1 px-15 py-5 mr-20">
                        For Rent
                      </span>
                      <strong className="color-primary f-20">
                        {state.currency} {numberWithCommas(state.rent)}/
                        {state.rent_method}
                      </strong>
                      <h3 className="color-secondary mt-15">
                        {state.advert_title}
                      </h3>
                      <span className="address icon-primary f-14 mt-5">
                        <i className="fa fa-map-marker" />
                        {state.building_location.address}
                      </span>
                      <span className="address icon-primary f-14 mt-5">
                        Within - {state.street_name}
                      </span>
                      <span className="address icon-primary f-14 mt-5">
                        Date Posted - <Moment>{state.created_at}</Moment>
                      </span>
                      <ul className="property-features icon-primary d-table f-14 mt-15">
                        {state.amenities_parking_space && (
                          <li>
                            <i className="flaticon-fit-screen" />
                            Parking space
                          </li>
                        )}
                        <li>
                          <i className="flaticon-hotel" />
                          {state.no_rooms} Bedrooms
                        </li>
                        {state.no_toilets && (
                          <li>
                            <i className="flaticon-bathtub" />
                            {state.no_toilets} Bathrooms/toilets
                          </li>
                        )}

                        {state.amenities_balcony && (
                          <li>
                            <i className="flaticon-garage" />
                            Balcony
                          </li>
                        )}

                        {state.amenities_private_toilets && (
                          <li>
                            <i className="flaticon-garage" />
                            Private Restrooms
                          </li>
                        )}
                        {state.amenities_swim && (
                          <li>
                            <i className="flaticon-garage" />
                            swimming pool
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                  {/* <div className="col-md-12 col-lg-4 wow slideInLeft animated">
                    <div className="thumbnail-content float-right">
                      <h5 className="color-secondary ">
                        {" "}
                        <i className="flaticon-fit-screen" /> Posted in rooms by
                        
                      </h5>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid wow slideInUp animated">
          <div className="row d-flow-root">
            <div className="product-slider">
              <div className=" container tab-content">
                <div
                  className="tab-pane active position-relative"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  style={{ maxHeight: "300px", overflow: "hidden" }}
                >
                  <Carousel
                    autoPlay={true}
                    showThumbs={true}
                    centerMode={true}
                    infiniteLoop={true}
                    centerSlidePercentage={50}
                    interval={5000}
                    transitionTime={2000}

                    // className=" owl-carousel neighborhoods owl-dots-none mt-30 owl-loaded owl-drag"
                  >
                    {/* <div className="col-lg-10 col-12">
                      <img src="images/property/7.jpg" alt="image" />
                    </div>
                    <div className="col-lg-10 col-12">
                      <img src="images/property/7.jpg" alt="image" />
                    </div>
                    <div className="col-lg-10 col-12">
                      <img src="images/property/7.jpg" alt="image" />
                    </div> */}

                    {images.map((src, index) => (
                      <div
                        onClick={() => openImageViewer(index)}
                        className="col-lg-10 col-12"
                      >
                        <img
                          src={src}
                          //   onClick={() => openImageViewer(index)}
                          key={index}
                          alt=""
                        />
                      </div>
                    ))}

                    {/* <div
                      style={{ backgroundColor: "cyan" }}
                      className="col-md-12 col-lg-6 col-xl-4 wow animated slideInRight"
                    >
                      <div className="property-thumbnail mt-30">
                        <div className="property-img position-relative overflow-hidden overlay-secondary-4">
                          <img src="images/property/7.jpg" alt="image" />
                          <div className="thumbnail-content z-index-1 color-white-a color-white">
                            <span className="thum-category category-1 bg-secondary color-white z-index-1 px-15">
                              For Sale
                            </span>
                            <span className="thum-category category-2 bg-secondary color-white z-index-1 px-15">
                              Featured
                            </span>
                            <ul className="hover-option position-absolute icon-white z-index-1">
                              <li>
                                <a
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Wishlist"
                                  href="#"
                                >
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Compare"
                                  href="#"
                                >
                                  <i
                                    className="fa fa-random"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                            <div className="hover-content py-30 px-20 overlay-hover-gradient">
                              <div className="thumbnail-title z-index-1 position-relative">
                                <span className="thumbnail-price bg-white color-secondary px-15 mb-10 d-table">
                                  $ 12000
                                </span>
                                <a
                                  className="color-secondary mb-5"
                                  href="single-property.html"
                                >
                                  <h4>Villa on Grand Avenue</h4>
                                </a>
                                <span className="address icon-primary f-14">
                                  <i className="fa fa-map-marker" />
                                  11-13 Whitehall, London SW1A 2DD, UK
                                </span>
                              </div>
                              <ul className="about-property icon-primary d-table f-14 z-index-1 position-relative">
                                <li>
                                  <span className="color-primary">400</span>{" "}
                                  sqft
                                </li>
                                <li>
                                  <span className="color-primary">3</span>{" "}
                                  Bedrooms
                                </li>
                                <li>
                                  <span className="color-primary">2</span>{" "}
                                  Bathrooms
                                </li>
                                <li>
                                  <span className="color-primary">1</span>{" "}
                                  Garage
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12 col-lg-6 col-xl-4 wow animated slideInRight">
                      <div className="property-thumbnail mt-30">
                        <div className="property-img position-relative overflow-hidden overlay-secondary-4">
                          <img src="images/property/7.jpg" alt="image" />
                          <div className="thumbnail-content z-index-1 color-white-a color-white">
                            <span className="thum-category category-1 bg-secondary color-white z-index-1 px-15">
                              For Sale
                            </span>
                            <span className="thum-category category-2 bg-secondary color-white z-index-1 px-15">
                              Featured
                            </span>
                            <ul className="hover-option position-absolute icon-white z-index-1">
                              <li>
                                <a
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Wishlist"
                                  href="#"
                                >
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Compare"
                                  href="#"
                                >
                                  <i
                                    className="fa fa-random"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                            <div className="hover-content py-30 px-20 overlay-hover-gradient">
                              <div className="thumbnail-title z-index-1 position-relative">
                                <span className="thumbnail-price bg-white color-secondary px-15 mb-10 d-table">
                                  $ 12000
                                </span>
                                <a
                                  className="color-secondary mb-5"
                                  href="single-property.html"
                                >
                                  <h4>Villa on Grand Avenue</h4>
                                </a>
                                <span className="address icon-primary f-14">
                                  <i className="fa fa-map-marker" />
                                  11-13 Whitehall, London SW1A 2DD, UK
                                </span>
                              </div>
                              <ul className="about-property icon-primary d-table f-14 z-index-1 position-relative">
                                <li>
                                  <span className="color-primary">400</span>{" "}
                                  sqft
                                </li>
                                <li>
                                  <span className="color-primary">3</span>{" "}
                                  Bedrooms
                                </li>
                                <li>
                                  <span className="color-primary">2</span>{" "}
                                  Bathrooms
                                </li>
                                <li>
                                  <span className="color-primary">1</span>{" "}
                                  Garage
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12 col-lg-6 col-xl-4 wow animated slideInDown">
                      <div className="property-thumbnail mt-30">
                        <div className="property-img position-relative overflow-hidden overlay-secondary-4">
                          <img src="images/property/8.jpg" alt="image" />
                          <div className="thumbnail-content z-index-1 color-white-a color-white">
                            <span className="thum-category category-1 bg-secondary color-white z-index-1 px-15">
                              For Rent
                            </span>
                            <span className="thum-category category-2 bg-secondary color-white z-index-1 px-15">
                              Featured
                            </span>
                            <ul className="hover-option position-absolute icon-white z-index-1">
                              <li>
                                <a
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Wishlist"
                                  href="#"
                                >
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Compare"
                                  href="#"
                                >
                                  <i
                                    className="fa fa-random"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                            <div className="hover-content py-30 px-20 overlay-hover-gradient">
                              <div className="thumbnail-title z-index-1 position-relative">
                                <span className="thumbnail-price bg-white color-secondary px-15 mb-10">
                                  1.2k <sub>/Month</sub>
                                </span>
                                <a
                                  className="color-secondary mb-5"
                                  href="single-property.html"
                                >
                                  <h4>park Avenue Apartment</h4>
                                </a>
                                <span className="address icon-primary f-14">
                                  <i className="fa fa-map-marker" />
                                  Urbis Building Cathedral Gardens, UK
                                </span>
                              </div>
                              <ul className="about-property icon-primary d-table f-14 z-index-1 position-relative">
                                <li>
                                  <span className="color-primary">300</span>{" "}
                                  sqft
                                </li>
                                <li>
                                  <span className="color-primary">4</span>{" "}
                                  Bedrooms
                                </li>
                                <li>
                                  <span className="color-primary">2</span>{" "}
                                  Bathrooms
                                </li>
                                <li>
                                  <span className="color-primary">1</span>{" "}
                                  Garage
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  */}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {isViewerOpen && (
            <ImageViewer
              src={images}
              currentIndex={currentImage}
              onClose={closeImageViewer}
              disableScroll={false}
              backgroundStyle={{
                backgroundColor: "rgba(0,0,0,0.9)",
              }}
              closeOnClickOutside={true}
            />
          )}
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="text-area mt-50 mb-50 wow slideInLeft animated">
                <h3 className="color-secondary line-bottom pb-15 mb-20">
                  Description
                </h3>
                <p>{state.advert_description}</p>
              </div>
              <div className="border-top-1-gray py-30 wow slideInRight animated">
                <h3 className="color-secondary line-bottom pb-15 mb-20">
                  Advert Details
                </h3>
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <ul className="list-by-tag">
                      <li>
                        Bedrooms: <span>{state.no_rooms}</span>
                      </li>
                      <li>
                        Building Type : <span>{state.Building_type}</span>
                      </li>
                      <li>
                        Number of Occupants: <span>{state.no_occupants}</span>
                      </li>
                      <li>
                        Room Size : <span>{state.rooms_size}</span>
                      </li>
                      <li>
                        Minimum Stay : <span>{state.minimum_stay}</span>
                      </li>
                      <li>
                        Maximum Stay : <span>{state.maximum_stay}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <ul className="list-by-tag hover-secondery-primary">
                      <li>
                        Broker/Agane fee : <span>{state.broker_agent_fee}</span>
                      </li>
                      <li>
                        Toilets/Bedrooms : <span>{state.no_toilets}</span>
                      </li>
                      <li>
                        Furnished Rooms? : <span>{state.broker_agent_fee}</span>
                      </li>
                      <li>
                        Living Rooms : <span>{state.living_rooms}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-top-1-gray py-30 wow slideInRight animated">
                <h3 className="color-secondary line-bottom pb-15 mb-20">
                  New occupant/tennant preferences
                </h3>
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <ul className="list-by-tag">
                      <li>
                        Gender:{" "}
                        <span>{state.new_room_mate.gender || "Any"}</span>
                      </li>
                      <li>
                        Language Spoken:{" "}
                        <span>
                          {state.new_room_mate.language_spoken || "Any"}
                        </span>
                      </li>
                      <li>
                        Maximum Age:{" "}
                        <span>{state.new_room_mate.maximum_age || "Any"}</span>
                      </li>
                      <li>
                        Minimum Age:{" "}
                        <span>{state.new_room_mate.minimum_age || "Any"}</span>
                      </li>
                      <li>
                        Nationality:{" "}
                        <span>{state.new_room_mate.nationality || "Any"}</span>
                      </li>
                      <li>
                        Occupation:{" "}
                        <span>{state.new_room_mate.occupation || "Any"}</span>
                      </li>
                      <li>
                        Pets Welcomed?:{" "}
                        <span>{state.new_room_mate.pets || "Any"}</span>
                      </li>
                      <li>
                        Sexual Orientation:{" "}
                        <span>
                          {state.new_room_mate.sexual_orientation || "Any"}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <ul className="list-by-tag hover-secondery-primary"></ul>
                  </div>
                </div>
              </div>

              <div className="border-top-1-gray py-30 wow slideInLeft animated">
                <h3 className="color-secondary line-bottom pb-15 mb-20">
                  Amenities
                </h3>
                <div className="row">
                  <div className="col-md-12 col-lg-12">
                    <ul className="single-property-amenities icon-primary my-20">
                      {state.amenities_swim && (
                        <li>
                          <i
                            className="fa fa-check-square"
                            aria-hidden="true"
                          />{" "}
                          Swimming Pool
                        </li>
                      )}
                      {state.amenities_balcony && (
                        <li>
                          <i
                            className="fa fa-check-square"
                            aria-hidden="true"
                          />{" "}
                          Balcony
                        </li>
                      )}
                      {state.amenities_entry_disabled && (
                        <li>
                          <i
                            className="fa fa-check-square"
                            aria-hidden="true"
                          />{" "}
                          Easy entry for disabled
                        </li>
                      )}
                      {state.amenities_internet && (
                        <li>
                          <i
                            className="fa fa-check-square"
                            aria-hidden="true"
                          />{" "}
                          Internet Facility/Wifi
                        </li>
                      )}
                      {state.amenities_parking_space && (
                        <li>
                          <i
                            className="fa fa-check-square"
                            aria-hidden="true"
                          />{" "}
                          Parking Space
                        </li>
                      )}
                      {state.amenities_play_ground && (
                        <li>
                          <i
                            className="fa fa-check-square"
                            aria-hidden="true"
                          />{" "}
                          Play Ground
                        </li>
                      )}
                      {state.amenities_private_toilets && (
                        <li>
                          <i
                            className="fa fa-check-square"
                            aria-hidden="true"
                          />{" "}
                          Private Toilets/Bathroomss
                        </li>
                      )}
                      {state.amenities_others && (
                        <li>
                          <i
                            className="fa fa-check-square"
                            aria-hidden="true"
                          />{" "}
                          Others
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div style={{ height: "100px" }}> </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="sidebar-widget bg-white mt-50 shadow py-40 px-30 wow slideInUp animated">
                <h3 className="color-secondary line-bottom pb-15 mb-20">
                  Poster's Contact Details
                </h3>
                <div className="d-flex">
                  <div className="contact-agent-image mr-20 float-left">
                    <img
                      src="images/team/1.png"
                      className="rounded-circle"
                      alt="images"
                    />
                  </div>
                  <div className="align-self-center color-gray">
                    <h6 className="d-block mb-1 w-100 color-secondary">
                      {state.posted_by.firstName} {state.posted_by.lastName}
                    </h6>
                    {/* <p> {state.posted_by.Email}</p> */}
                    <p> {state.posted_by.mobileNumber}</p>
                    <p> {state.i_am}</p>
                  </div>
                </div>
                {/* send message form to seller */}
                {/* <form action="#" method="post" className="mt-30">
                  <div className="row">
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        className="form-control bg-gray"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="email"
                        className="form-control bg-gray"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        className="form-control bg-gray"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <textarea
                        className="form-control bg-gray"
                        rows={4}
                        placeholder="Type Your Massage"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-primary w-100">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
               */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Single Property End
      ==================================================================*/}
      {/*  Partners and Subscribe Form Start
      ==================================================================*/}

      {/*  Partners and Subscribe Form Start
      ==================================================================*/}
      {/* Footer Start
      ==================================================================*/}
      <footer
        className="bg-secondary my-80 pb-20"
        style={{ paddingTop: "50px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-6 wow animated slideInLeft">
              <div className="footer-logo">
                <a href="index.html">
                  <img
                    className="nav-logo"
                    src="images/logo/logo2.png"
                    alt="Footer Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-sm-8 col-md-8 col-lg-6 wow animated slideInRight">
              <ul className="social-media-2 border-white large color-white-a float-right">
                <li className="mr-20 color-white">
                  <strong>Follow Us:</strong>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-behance" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
            <hr className="border-bottom-1 w-100 my-50" />
            <div className="col-sm-6 col-md-6 col-lg-3 wow animated slideInUp">
              <div className="footer-widget color-gray-light mt-sm-30">
                <h3 className="color-white line-bottom pb-15 mb-20">
                  Have Any Question?
                </h3>
                <div className="widget-content color-primary">
                  <ul className="widget-contact">
                    <li>
                      Call
                      <span className="color-white">+(844) 234-567-800</span>
                    </li>
                    <li>
                      Email
                      <span className="color-white">
                        support@yourdomail.com
                      </span>
                    </li>
                    <li>
                      Free Consultation
                      <span className="color-white">Fill Out Form</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 wow animated slideInDown">
              <div className="footer-widget color-gray-light mt-sm-30">
                <h3 className="color-white line-bottom pb-15 mb-20">About</h3>
                <div className="widget-content hover-white-primary">
                  <ul className="quick-links">
                    <li>
                      <a href="#">Company</a>
                    </li>
                    <li>
                      <a href="#">Community</a>
                    </li>
                    <li>
                      <a href="#">Carrers</a>
                    </li>
                    <li>
                      <a href="#">News</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 wow animated slideInUp">
              <div className="footer-widget color-gray-light mt-md-30">
                <h3 className="color-white line-bottom pb-15 mb-20">
                  Quick Links
                </h3>
                <div className="widget-content hover-white-primary">
                  <ul className="quick-links">
                    <li>
                      <a href="#">For Rent</a>
                    </li>
                    <li>
                      <a href="#">For Sale</a>
                    </li>
                    <li>
                      <a href="#">Commercial</a>
                    </li>
                    <li>
                      <a href="#">Agents</a>
                    </li>
                    <li>
                      <a href="#">Property Guides</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 wow animated slideInDown">
              <div className="footer-widget color-gray-light mt-sm-30">
                <h3 className="color-white line-bottom pb-15 mb-20">Help</h3>
                <div className="widget-content hover-white-primary">
                  <ul className="quick-links">
                    <li>
                      <a href="#">Payments</a>
                    </li>
                    <li>
                      <a href="#">Shipping</a>
                    </li>
                    <li>
                      <a href="#">Cancellation</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Report</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright bg-secondary color-white">
        <div className="container">
          <div className="row">
            <hr className="border-bottom-1 w-100 m-0" />
            <div className="col-md-12 col-lg-12">
              <div className="py-15 text-center">
                Fresher @ 2020. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End
      ==================================================================*/}
      {/* jquery Links
      ==================================================================*/}
    </div>
  );
};

export default DetailView2;
