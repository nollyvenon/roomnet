import React, { useState } from "react";
import Header from "../../Header";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../../footer";
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const RoomsCards = (props) => {
  const { data } = props;
  return (
    <>
      <div className="col-md-12 col-lg-12 wow slideInUp animated">
        <div className="property-list mt-30">
          <div className="property-item d-flex">
            <div className="property-img position-relative overflow-hidden overlay-secondary-4">
              <img src={props.src} />
              <ul className="hover-option position-absolute icon-white z-index-1">
                <li>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Wishlist"
                    href="#"
                  >
                    <i className="fa fa-heart-o" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Compare"
                    href="#"
                  >
                    <i className="fa fa-random" aria-hidden="true" />
                  </a>
                </li>
              </ul>
              <div className="meta-property icon-primary color-white z-index-1">
                <ul>
                  {/* <li>
                  <i className="fa fa-calendar" /> 06/27/2020
                </li> */}
                 {data.isPaidAdd? <li className="mx-3" style={{color:"lime"}}>Premium Ad</li>:null}
                  <li>
                    <i className="fa fa-user" />
                    by{" "}
                    {data.posted_by["firstName"] && data.posted_by["firstName"]}
                  </li>
                </ul>
              </div>
            </div>
            <div className="property-content bg-white pt-30 pb-50 px-30 position-relative">
              <Link
                className="color-secondary mb-5"
                to={{ pathname: "/DetailView1", state: data }}
              >
                <h4>{data.advert_title}</h4>
              </Link>
              <span className="address icon-primary f-14">
                <i className="fa fa-map-marker" />
                {data.building_location.address}
              </span>
              <ul className="about-property icon-primary d-table mt-20">
                {data.amenities_parking_space && (
                  <li>
                    <i className="flaticon-fit-screen" />
                    Parking space
                  </li>
                )}
                <li>
                  <i className="flaticon-hotel" />
                  {data.no_rooms} Rooms
                </li>
                {data.no_toilets && (
                  <li>
                    <i className="flaticon-bathtub" />
                    {data.no_toilets} Bathrooms
                  </li>
                )}
                {data.amenities_internet && (
                  <li>
                    <i className="flaticon-garage" />
                    Internet facility
                  </li>
                )}
                {data.amenities_balcony && (
                  <li>
                    <i className="flaticon-garage" />
                    Balcony
                  </li>
                )}
                {data.amenities_entry_disabled && (
                  <li>
                    <i className="flaticon-garage" />
                    Easy access for the Disabled
                  </li>
                )}
                {data.amenities_private_toilets && (
                  <li>
                    <i className="flaticon-garage" />
                    Private Restrooms
                  </li>
                )}
                {data.amenities_swim && (
                  <li>
                    <i className="flaticon-garage" />
                    swimming pool
                  </li>
                )}
              </ul>
              <span className="tags color-gray mb-30 d-block">
                {data.Building_type}
              </span>
              <div className="property-cost color-white list-half w-100">
                <ul>
                  <li>For Rent</li>
                  <li>
                    {data.currency} {numberWithCommas(data.rent)}{" "}
                    <sub>/{data.rent_method}</sub>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const BrowsListRooms = () => {
  const history = useHistory();
  const state = history.location.state;
  const [roomsList, setRoomList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pagination, setPagination] = React.useState({ total: 0, limit: "" });
  const [pageNo, setpageNo] = React.useState(0);
  const ListRoomsBystate = async () => {
    // const states = "lagos";
    setLoading(true)
    await axios
      .get(`/api/v1/ListRoomsByState/${state}?pageNo=${pageNo}`)
      .then((response) => {
       
        setLoading(false)
        setRoomList(response.data.userData);
        // response.data.status && setIsUserRegister(true);
        // dispatch(LOGINSUCCESS(response.data.userData));
        // history.push("/users-dashboard");
        // response.data.userData &&
        //   response.data.userData.length > 0 &&
        response.data.userData &&
        response.data.userData.length > 0 &&
        setPagination({
          ...pagination,
          limit: response.data.limit,
          total: response.data.total,
        });
        response.data.userData.length > 0 && setpageNo(pageNo + 1);
      })
      .catch((err) => {
        setLoading(false)
        console.log(err);
        if (err.response.data.message) {
        } else {
          console.log("error occured");
        }
        // console.log(err);
      });
  };
  React.useEffect(() => {
    ListRoomsBystate();
  }, []);

  const mapRoomsList = () => {
    return roomsList.length > 0 ? (
      roomsList.map((xxx) => (
        <RoomsCards
          src={xxx["media"][0] && xxx["media"][0]["uri"]}
          data={xxx}
        />
      ))
    ) : (
      <h4>Nothing Found</h4>
    );
  };
  const handleNextPage = () => {
    setRoomList([]);
    state && ListRoomsBystate();
  
  };
  return (
    <>
      <Header />
      <section className="bg-light">
        <div className="topPatch" style={{ height: "120px" }} />
        <div className="container">
          <div className="row  ">
        
            <div className="col-md-12 col-lg-12 wow animated slideInDown">
              <div className="main-title w-50 mx-auto d-table text-center mb-30">
                <span className="small-title color-primary position-relative line-2-primary">
                  Explore
                </span>
                <h2 className="title mb-20 color-secondary">
                  Rooms Posted In {state}
                </h2>
              </div>
            </div>
            <div className="col-md-3 col-lg-6 col-xl-7">
                    <label> Found {pagination.total} results</label>

                    {pagination.limit * pageNo < pagination.total ? (
                      <div>
                        <button onClick={handleNextPage} className="btn ">
                          Next Page
                        </button>
                      </div>
                    ) : null}
                  </div>
            {/* <div className="col-md-12 col-lg-12 wow slideInDown animated">
            <div className="top-filter pb-15">
              <div className="row">
                <div className="col-md-3 col-lg-6 col-xl-7">
                  <label>1-12 of 85 results</label>
                </div>
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <div className="row">
                    <div className="col-md-8 col-lg-7">
                      <form>
                        <div className="form-group d-flex mb-0">
                          <label className="w-50">Short By :</label>
                          <div className="select-wrapper position-relative w-100">
                            <select className="select form-control">
                              <option>Default</option>
                              <option>Newest</option>
                              <option>Oldest</option>
                              <option>Random</option>
                            </select>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-4 col-lg-5">
                      <ul
                        className="nav nav-tabs border-0 float-right navbar-tab-view mt-sm-15"
                        id="myTab"
                        role="tablist"
                        style={{ lineHeight: "20px" }}
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="home-tab"
                            data-toggle="tab"
                            href="#home"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                          >
                            <i className="fa fa-th-large" aria-hidden="true" />
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="contact-tab"
                            data-toggle="tab"
                            href="#contact"
                            role="tab"
                            aria-controls="contact"
                            aria-selected="false"
                          >
                            <i className="fa fa-th" aria-hidden="true" />
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="profile-tab"
                            data-toggle="tab"
                            href="#profile"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                          >
                            <i className="fa fa-list" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-12 wow slideInUp animated">
            <form className="adbanced-form-two amenities-list border-top-1-gray">
              <div className="row">
                <div className="form-group col-lg-3 col-md-6 col-6 pt-15">
                  <div className="select-wrapper position-relative">
                    <select className="select form-control">
                      <option>Select Country</option>
                      <option>USA</option>
                      <option>Australia</option>
                      <option>Russia</option>
                      <option>France</option>
                      <option>Cyprus</option>
                    </select>
                  </div>
                </div>
                <div className="form-group col-lg-3 col-md-6 col-6 pt-15">
                  <div className="select-wrapper position-relative">
                    <select className="select form-control">
                      <option>Select Location</option>
                      <option>Newyork</option>
                      <option>London</option>
                      <option>Dubai</option>
                      <option>Melbourne</option>
                      <option>Sydney</option>
                    </select>
                  </div>
                </div>
                <div className="form-group col-lg-3 col-md-6 col-6 pt-15">
                  <div className="select-wrapper position-relative">
                    <select className="select form-control has-val">
                      <option>Beds</option>
                      <option>One</option>
                      <option>Two</option>
                      <option>Three</option>
                      <option>Four</option>
                    </select>
                  </div>
                </div>
                <div className="form-group mb-0 col-lg-3 col-md-6 col-6 py-15">
                  <div className="select-wrapper position-relative">
                    <select className="select form-control has-val">
                      <option>Baths</option>
                      <option>One</option>
                      <option>Two</option>
                      <option>Three</option>
                      <option>Four</option>
                    </select>
                  </div>
                </div>
                <div className="form-group mb-0 col-lg-3 col-md-6 col-6 py-15">
                  <div className="select-wrapper position-relative">
                    <select className="select form-control has-val">
                      <option>Kitchen</option>
                      <option>One</option>
                      <option>Two</option>
                      <option>Three</option>
                      <option>Four</option>
                    </select>
                  </div>
                </div>
                <div className="form-group mb-0 pb-15 col-lg-3 col-md-6 col-6">
                  <div className="price_range">
                    <div className="price-filter">
                      <span>
                        <input
                          id="filter_sqft"
                          type="text"
                          name="price"
                          defaultValue="20000; 80000"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group mb-0 pb-15 col-lg-3 col-md-6 col-6">
                  <div className="price_range">
                    <div className="price-filter">
                      <span className="price-slider">
                        <input
                          className="filter_price"
                          type="text"
                          name="price"
                          defaultValue="100000;900000"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group col-6 col-md-6 col-lg-3">
                  <a
                    className="color-secondary position-relative plus-minus pl-20 d-block y-center"
                    data-toggle="collapse"
                    href="#Collapse1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="Collapse1"
                  >
                    Amenities
                  </a>
                </div>
                <div className="col-md-12 col-lg-12">
                  <div className="collapse" id="Collapse1">
                    <div className="row">
                      <div className="form-group col-lg-12 mb-0">
                        <ul className="list-bottom amenities select-option">
                          <li>
                            <input
                              id="feature-1"
                              className="d-none"
                              type="checkbox"
                            />
                            <label htmlFor="feature-1">Air Condition</label>
                          </li>
                          <li>
                            <input
                              id="feature-2"
                              className="d-none"
                              type="checkbox"
                            />
                            <label htmlFor="feature-2">Refrigerator</label>
                          </li>
                          <li>
                            <input
                              id="feature-3"
                              className="d-none"
                              type="checkbox"
                            />
                            <label htmlFor="feature-3">TV Cable</label>
                          </li>
                          <li>
                            <input
                              id="feature-4"
                              className="d-none"
                              type="checkbox"
                            />
                            <label htmlFor="feature-4">Dryer</label>
                          </li>
                          <li>
                            <input
                              id="feature-5"
                              className="d-none"
                              type="checkbox"
                            />
                            <label htmlFor="feature-5">Wifi</label>
                          </li>
                          <li>
                            <input
                              id="feature-6"
                              className="d-none"
                              type="checkbox"
                            />
                            <label htmlFor="feature-6">Laundry</label>
                          </li>
                          <li>
                            <input
                              id="feature-7"
                              className="d-none"
                              type="checkbox"
                            />
                            <label htmlFor="feature-7">Swimming Pool</label>
                          </li>
                          <li>
                            <input
                              id="feature-8"
                              className="d-none"
                              type="checkbox"
                            />
                            <label htmlFor="feature-8">Outdoor Shower</label>
                          </li>
                          <li>
                            <input
                              id="feature-9"
                              className="d-none"
                              type="checkbox"
                            />
                            <label htmlFor="feature-9">Barbeque</label>
                          </li>
                          <li>
                            <input
                              id="feature-10"
                              className="d-none"
                              type="checkbox"
                            />
                            <label htmlFor="feature-10">Washer</label>
                          </li>
                          <li>
                            <input
                              id="feature-11"
                              className="d-none"
                              type="checkbox"
                            />
                            <label htmlFor="feature-11">Sauna</label>
                          </li>
                          <li>
                            <input
                              id="feature-12"
                              className="d-none"
                              type="checkbox"
                            />
                            <label htmlFor="feature-12">Microwave</label>
                          </li>
                          <li>
                            <input
                              id="feature-13"
                              className="d-none"
                              type="checkbox"
                            />
                            <label htmlFor="feature-13">Gym</label>
                          </li>
                          <li>
                            <input
                              id="feature-14"
                              className="d-none"
                              type="checkbox"
                            />
                            <label htmlFor="feature-14">Lawn</label>
                          </li>
                          <li>
                            <input
                              id="feature-15"
                              className="d-none"
                              type="checkbox"
                            />
                            <label htmlFor="feature-15">Window Covering</label>
                          </li>
                          <li>
                            <input
                              id="feature-16"
                              className="d-none"
                              type="checkbox"
                            />
                            <label htmlFor="feature-16">Home Theater</label>
                          </li>
                          <li>
                            <input
                              id="feature-17"
                              className="d-none"
                              type="checkbox"
                            />
                            <label htmlFor="feature-17">Garden</label>
                          </li>
                          <li>
                            <input
                              id="feature-18"
                              className="d-none"
                              type="checkbox"
                            />
                            <label htmlFor="feature-18">Fire Protection</label>
                          </li>
                          <li>
                            <input
                              id="feature-19"
                              className="d-none"
                              type="checkbox"
                            />
                            <label htmlFor="feature-19">Emergency Exit</label>
                          </li>
                          <li>
                            <input
                              id="feature-20"
                              className="d-none"
                              type="checkbox"
                            />
                            <label htmlFor="feature-20">Security System</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          */}
            <div className="col-md-12 col-lg-12">
              <div className="tab-content  border-top-1-gray" id="myTabContent">
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="row">
                    <div className="col-md-12 col-lg-4 wow slideInLeft animated">
                      <div className="property-thumbnail mt-30">
                        <div className="property-img position-relative overflow-hidden overlay-secondary-4">
                          <img src="images/property/7.jpg" alt="image" />
                          <div className="thumbnail-content z-index-1 color-white-a color-white">
                            <span className="thum-category category-1 bg-secondary color-white z-index-1 px-15">
                              For Sale
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
                  </div>
                </div>
                <div
                  className="tab-pane fade show active"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">{loading?<h4>Loading....</h4>:mapRoomsList()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div style={{ height: "200px" }} /> */}
      <Footer />
    </>
  );
};

export default BrowsListRooms;
