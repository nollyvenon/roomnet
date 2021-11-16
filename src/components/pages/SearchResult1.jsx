import React from "react";
import Header from "../Header";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import axios from "axios";

const ResultCard = (props) => {
  const { data } = props;
  return (
    <div className="col-md-12 col-lg-12 wow slideInDown animated">
      <div className="property-list mt-30">
        <div className="property-item d-flex">
          <div className="property-img position-relative overflow-hidden overlay-secondary-4">
            <img src={props.src} alt="image" />

            <div className="meta-property icon-primary color-white z-index-1">
              <ul>
                <li>
                  <i className="fa fa-calendar" />{" "}
                  <Moment fromNow>{data.created_at}</Moment>
                </li>
               {data.isPaidAdd? <li className="mx-3" style={{color:"lime"}}>Premium Ad</li>:null}
                <li>
                  <i className="fa fa-user" /> by {data.posted_by["firstName"]}
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
                {data.no_rooms} Bedrooms
              </li>
              {data.no_toilets && (
                <li>
                  <i className="flaticon-bathtub" />
                  {data.no_toilets} Bathrooms
                </li>
              )}

              {data.amenities_balcony && (
                <li>
                  <i className="flaticon-garage" />
                  Balcony
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
                  {data.rent} <sub>/{data.rent_method}</sub>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ResultCard2 = (props) => {
  const { data } = props;
  return (
    <div className="col-md-12 col-lg-6 wow slideInDown animated">
      <div className="property-thumbnail mt-30">
        <div className="property-img position-relative overflow-hidden overlay-secondary-4">
          <img src={props.src} />
          <div className="thumbnail-content z-index-1 color-white-a color-white">
            <span className="thum-category category-1 bg-secondary color-white z-index-1 px-15">
              For Rent
            </span>

            <div className="hover-content py-30 px-20 overlay-hover-gradient">
              <div className="thumbnail-title z-index-1 position-relative">
                <span className="thumbnail-price bg-white color-secondary px-15 mb-10 d-table">
                  N{data.rent}/{data.rent_method}
                </span>
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
              </div>
              <ul className="about-property icon-primary d-table f-14 z-index-1 position-relative">
                {data.isPaidAdd? <li className="mx-3" style={{color:"lime"}}>Premium Ad</li>:null}
                {data.amenities_parking_space && (
                  <li>
                    <i className="flaticon-fit-screen" />
                    Parking space
                  </li>
                )}
                <li>
                  <i className="flaticon-hotel" />
                  {data.no_rooms} Bedrooms
                </li>
                {data.no_toilets && (
                  <li>
                    <i className="flaticon-bathtub" />
                    {data.no_toilets} Bathrooms
                  </li>
                )}

                {data.amenities_balcony && (
                  <li>
                    <i className="flaticon-garage" />
                    Balcony
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// ListApartByLnglat
const SearchResult1 = () => {
  const history = useHistory();
  const state = history.location.state;
  const [roomsList, setRoomList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pagination, setPagination] = React.useState({ total: 0, limit: "" });
  const [pageNo, setpageNo] = React.useState(0);
  // search by text location search inputed from home page
  const ListRoomsByLocation = async () => {
    // const states = "lagos";
    setLoading(true)
   
    await axios
      .get(
        `/api/v1/ListRoomsByLocation/?location=${state.location}&pageNo=${pageNo}`
      )
      .then((response) => {
        setLoading(false)
        console.log(response.data);

        response.data.userData &&
          response.data.userData.length > 0 &&
          setRoomList(response.data.userData);
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

  //search result by lat long
  const ListRoomsByLnglat = async (lng, lat) => {
    // const states = "lagos";
    setLoading(true)
    await axios
      .get(`/api/v1/ListRoomsByLnglat/?lng=${lng}&lat=${lat}&pageNo=${pageNo}`)
      .then((response) => {
        console.log(response.data);
        setLoading(false)
        response.data.userData &&
          response.data.userData.length > 0 &&
          setRoomList(response.data.userData);
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
    state.location && ListRoomsByLocation();
    state.lat && ListRoomsByLnglat(state.lng, state.lat);
  }, []);
  const handleNextPage = () => {
    setRoomList([]);
    state.location && ListRoomsByLocation();
    state.lat && ListRoomsByLnglat(state.lng, state.lat);
  };

  const handleFormsearch = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  const mapRoomsList = () => {
    return roomsList.length > 0 ? (
      roomsList.map((xxx) => (
        <ResultCard
          src={xxx["media"][0] && xxx["media"][0]["uri"]}
          data={xxx}
        />
      ))
    ) : (
      <h4>Nothing Found</h4>
    );
  };

  const mapRoomsList2 = () => {
    return roomsList.length > 0 ? (
      roomsList.map((xxx) => (
        <ResultCard2
          src={xxx["media"][0] && xxx["media"][0]["uri"]}
          data={xxx}
        />
      ))
    ) : (
      <h4>Nothing Found</h4>
    );
  };
  return (
    <div>
      {/* Start Back to top
      =========================================================================*/}
      <div id="scroll" style={{ display: "none" }}>
        <i className="fa fa-angle-up" />
      </div>
      {/* End Back to top
      =========================================================================*/}
      {/* Color Settings Start
      ==================================================*/}

      {/*  Color Settings End
          ==============================================*/}
      {/* Start Header
      ===================================================================*/}
      <Header />
      {/* End Header
      ==================================================================*/}
      <div className="topPatch" style={{ height: "120px" }} />
      {/* Property Grid Start
      ==================================================================*/}
      <section className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 wow slideInDown animated">
              <div className="top-filter pb-15 border-bottom-1-gray">
                <h3 className="color-secondary line-bottom pb-15 mb-20">
                  {state.location
                    ? `Rooms/Room mates within "${state.location}"`
                    : state.address
                    ? `Rooms/Room mates within "${state.address}"`
                    : null}
                </h3>
                <div className="row">
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
                  <div className="col-md-9 col-lg-6 col-xl-5">
                    <div className="row">
                      <div className="col-md-8 col-lg-7"></div>
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
            <div className="col-md-12 col-lg-8">
              <div className="tab-content mt-md-50" id="myTabContent">
                <div
                  className="tab-pane fade"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  {/* <div className="row">{mapRoomsList2()}</div> */}
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="row">{loading?<h4>Loading....</h4>:mapRoomsList2()}</div>
                </div>
                <div
                  className="tab-pane fade show active"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    {/* start list card here */}

                    {loading?<h4>Loading....</h4>:mapRoomsList()}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <form
                onSubmit={handleFormsearch}
                className="adbanced-form-two amenities-list bg-white py-40 px-30 mt-30"
              >
                <div className="row">
                  <div className="form-group mb-50 pb-15 col-lg-12 wow slideInUp animated">
                    <label>Price</label>
                    <div className="price_range">
                      <div className="price-filter">
                        <span className="price-slider">
                          <input
                            className="filter_price"
                            type="number"
                            name="price"
                            // defaultValue="100000;900000"
                          />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="form-group col-lg-12 pt-15 mb-0 wow slideInUp animated">
                    <label>Amenities</label>
                    <ul className="list-bottom select-option">
                      <li>
                        <input
                          id="feature-1"
                          className="d-none"
                          type="checkbox"
                        />
                        <label htmlFor="feature-1">Parking space</label>
                      </li>
                      <li>
                        <input
                          id="feature-2"
                          className="d-none"
                          type="checkbox"
                        />
                        <label htmlFor="feature-2"> Play ground</label>
                      </li>
                      <li>
                        <input
                          id="feature-3"
                          className="d-none"
                          type="checkbox"
                        />
                        <label htmlFor="feature-3">Private Toilets</label>
                      </li>

                      <li>
                        <input
                          id="feature-5"
                          className="d-none"
                          type="checkbox"
                        />
                        <label htmlFor="feature-5">Wifi/Internet</label>
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
                          id="feature-9"
                          className="d-none"
                          type="checkbox"
                        />
                        <label htmlFor="feature-9">Balcony</label>
                      </li>
                    </ul>
                  </div>
                  <button>Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Property Grid End
      ==================================================================*/}
      {/*  Partners and Subscribe Form Start
      ==================================================================*/}
      <div className="patner-subscribe bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 wow animated slideInDown">
              <div className="bg-white shadow py-80">
                <div className="row">
                  <div className="col-md-12 col-lg-6 px-60 border-right">
                    <div className="side-title pb-30">
                      <span className="small-title color-primary position-relative line-primary">
                        Partners
                      </span>
                      <h2 className="title mb-20 color-secondary">
                        Our Popular Fellows!
                      </h2>
                      <p>
                        Luctus posuere facilisi eros auctor lacinia litora.
                        Convall aptent nisy parturient scelerisq. Nullam fringil
                        condimen integer mauris lacus aliquam, quam massa
                        lobortis commod proin magna.
                      </p>
                    </div>
                    <div className="owl-carousel partners mt-30">
                      <img src="images/partner/1.png" alt="Image not found!" />
                      <img src="images/partner/2.png" alt="Image not found!" />
                      <img src="images/partner/3.png" alt="Image not found!" />
                      <img src="images/partner/4.png" alt="Image not found!" />
                      <img src="images/partner/5.png" alt="Image not found!" />
                      <img src="images/partner/6.png" alt="Image not found!" />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6 px-60">
                    <div className="side-title pb-30 mt-md-50 text-right">
                      <span className="small-title color-primary position-relative line-right-primary">
                        Newsletter
                      </span>
                      <h2 className="title mb-20 color-secondary">
                        Get Update Now!
                      </h2>
                      <p>
                        Luctus posuere facilisi eros auctor lacinia litora.
                        Convall aptent nisy parturient scelerisq. Nullam fringil
                        condimen integer mauris lacus aliquam, quam massa
                        lobortis commod proin magna.
                      </p>
                    </div>
                    {/* <form className="news-letter bg-gray mt-30">
                      <div className="form-group position-relative">
                        <input
                          className="form-control"
                          type="text"
                          name="email"
                          placeholder="Subscribe"
                        />
                        <button className="bg-gray color-secondary">
                          <i className="fa fa-paper-plane" />
                        </button>
                      </div>
                    </form> */}
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Partners and Subscribe Form Start
      ==================================================================*/}
      {/* Footer Start
      ==================================================================*/}
      <footer
        className="bg-secondary pb-50"
        style={{ marginTop: "-233px", paddingTop: "313px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-6 wow animated slideInLeft">
              <div className="footer-logo">
                <a href="/">
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
                      <span className="color-white">+(844) 000-000-000</span>
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
            <div className="col-sm-6 col-md-6 col-lg-2 wow animated slideInDown">
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
            <div className="col-sm-6 col-md-6 col-lg-2 wow animated slideInUp">
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
            <div className="col-sm-6 col-md-6 col-lg-2 wow animated slideInUp">
              <div className="footer-widget color-gray-light mt-md-30">
                <h3 className="color-white line-bottom pb-15 mb-20">
                  Our Services
                </h3>
                <div className="widget-content hover-white-primary">
                  <ul className="quick-links">
                    <li>
                      <a href="/post-options-1">Post a room ad</a>
                    </li>
                    <li>
                      <a href="post-options-2">Post a whole flat add</a>
                    </li>
                    <li>
                      <a href="/process-needrooms-advert1">
                        Post "I need a room add"
                      </a>
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

export default SearchResult1;
