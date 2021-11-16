import React from "react";
import { Link } from "react-router-dom";
import UsaState from "./pages/browse/usastates.json";
 import ghanaState from "./pages/browse/ghanastates.json";
import KenyanStates from "./pages/browse/kenyastates.json";
import SouthafricaStates from "./pages/browse/southafricaStates.json";
import Irelandstates from "./pages/browse/irelandstates.json";
import Ukstates from "./pages/browse/ukstates.json";
import NigeriaState from "./pages/browse/nigeriState.json";
import { useSelector } from "react-redux";
const Footer = () => {
  const country = useSelector(({ CountryReducer }) => CountryReducer.country);

  const cities =
    country === "NG"
      ? [
          { name: "Lagos", uri: "/images/cities/lagos1.jpg" },
          { name: "Abuja", uri: "/images/cities/abuja1.jpg" },
          { name: "Enugu", uri: "/images/cities/enugu1.jpg" },
        ]
      : country === "GB"
      ? [
          { name: "London", uri: "/images/cities/london1.jpg" },
          { name: "Manchester", uri: "/images/cities/london2.jpg" },
          { name: "Bristol", uri: "/images/cities/bristol.jpg" },
        ]
      : country === "US"
      ? [
          { name: "New york", uri: "/images/cities/usa1.jpg" },
          { name: "Miami", uri: "/images/cities/usa2.jpg" },
          { name: "Texas", uri: "/images/cities/usa3.jpg" },
        ]
      : country === "GH"
      ? [
          { name: "Accra", uri: "/images/cities/accra.jpg" },
          { name: "Dembai", uri: "/images/cities/dambai.jpg" },
          { name: "Aflao", uri: "/images/cities/aflao.jpg" },
        ]
      : country === "IE"
      ? [
          { name: "Dublin", uri: "/images/cities/dublin.jpg" },
          { name: "Waterford", uri: "/images/cities/waterford.jpg" },
          { name: "Longford", uri: "/images/cities/longford.jpg" },
        ]
      : country === "ZA"
      ? [
          { name: "Johannesburg", uri: "/images/cities/jonannesburg.jpg" },
          { name: "Cape Town", uri: "/images/cities/capetown.jpg" },
          { name: "Pretoria", uri: "/images/cities/pretoria.jpg" },
        ]
      : country === "KE"
      ? [
          { name: "Nairobi", uri: "/images/cities/nairobi.jpg" },
          { name: "Kiambu", uri: "/images/cities/kiambu.jpg" },
          { name: "Mandera", uri: "/images/cities/mandera.jpg" },
        ]
      : [];
      const states =
      country === "NG"
        ? NigeriaState
        : country === "US"
        ? UsaState
        : country === "KE"
        ? KenyanStates
        : country === "ZA"
        ? SouthafricaStates
        : country === "IE"
        ? Irelandstates
        : country === "GB"
        ? Ukstates
        : country === "GH"
        ? ghanaState
        : [];
  return (
    <React.Fragment>
      <div style={{ height: "140px" }} />
      <div className="patner-subscribe">
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
                    <div className="side-title pb-30 text-right mt-md-50">
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
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="news-letter  mt-30"
                    >
                      {/* <div className="form-group position-relative">
                        <input
                          className="form-control"
                          type="text"
                          name="email"
                          placeholder="Subscribe"
                        />
                        <button className="bg-gray color-secondary">
                          <i className="fa fa-paper-plane" />
                        </button>
                      </div> */}
                      <br />
                      <br />
                      <br />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Start
=========================================================================*/}
      <footer
        className="footer-one bg-gray pb-50"
        style={{ marginTop: "-233px", paddingTop: "313px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-6 wow animated slideInLeft">
              <div className="footer-logo">
                <a href="index.html">
                  <img
                    className="logo-bottom"
                    src="images/logo/logo2.png"
                    alt="Footer Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-sm-8 col-md-8 col-lg-6 wow animated slideInRight">
              <ul className="social-media-2 large color-dark-a float-right">
                <li className="mr-20">
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
            <hr className="border-top-1-light-gray w-100 my-50" />
            <div className="col-sm-6 col-md-6 col-lg-3 wow animated slideInUp">
              <div className="footer-widget color-gray-light mt-sm-30">
                <h3 className="color-secondary line-bottom pb-15 mb-20">
                  Have Any Question?
                </h3>
                <div className="widget-content color-primary">
                  <ul className="widget-contact">
                    <li>
                      Call
                      <span>+(844) 234-567-800</span>
                    </li>
                    <li>
                      Email
                      <span>support@yourdomail.com</span>
                    </li>
                    <li>
                      Free Consultation
                      <a href="/contactForm">
                        <span>Fill Out Form</span>
                      </a>
                    </li>
                    <li>
                      <a href="/FAQ">
                        <span>FAQ</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 wow animated slideInDown">
              <div className="footer-widget color-gray-light mt-sm-30">
                <h3 className="color-secondary line-bottom pb-15 mb-20">
                  About
                </h3>
                <div className="widget-content hover-secondery-primary">
                  <ul className="quick-links">
                    <li>
                      <a href="/aboutus">About RoomNets</a>
                    </li>

                    <li>
                      <a href="/blogs">Blogs</a>
                    </li>
                    <li>
                      <a href="/privacy">Privacy policy</a>
                    </li>
                    <li>
                      <a href="/Accessibility">Accessibility statement</a>
                    </li>
                    <li>
                      <a href="/terms">Terms and conditions</a>
                    </li>
                    <li>
                      <a href="/#whyChooseUs">Why choose RoomNets</a>
                    </li>
                    <li>
                      <a href="/HowItWorks">How it works</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 wow animated slideInUp">
              <div className="footer-widget color-gray-light mt-md-30">
                <h3 className="color-secondary line-bottom pb-15 mb-20">
                  Quick Links
                </h3>
                <div className="widget-content hover-secondery-primary">
                  <ul className="quick-links">
                    <li>
                      {cities[1] && (
                        <Link
                          to={{
                            pathname: "/Browse-rooms-list-rooms",
                            state: cities[1].name,
                          }}
                        >
                          Flats In {cities[1].name}
                        </Link>
                      )}
                    </li>
                    <li>
                      {cities[2] && (
                        <Link
                          to={{
                            pathname: "/Browse-rooms-list-rooms",
                            state: cities[2].name,
                          }}
                        >
                          Flats In {cities[2].name}
                        </Link>
                      )}
                    </li>
                    <li>
                      {cities[0] && (
                        <Link
                          to={{
                            pathname: "/Browse-rooms-list-rooms",
                            state: cities[0].name,
                          }}
                        >
                          Flats In {cities[0].name}
                        </Link>
                      )}
                    </li>
                    {/* <li>
                      <a href="#">Agents</a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-2 wow animated slideInDown">
              <div className="footer-widget color-gray-light mt-sm-30">
                <h3 className="color-secondary line-bottom pb-15 mb-20">
                  Our Services
                </h3>
                <div className="widget-content hover-secondery-primary">
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
          </div>
          <div className="row">
           
           
            <hr className="border-top-1-light-gray w-100 my-50" />
            <div className="col-sm-6 col-md-6 col-lg-3 wow animated slideInUp">
              <div className="footer-widget color-gray-light mt-sm-30">
                <h3 className="color-secondary line-bottom pb-15 mb-20">
                Find Apartments & roommates:
                </h3>
                <div className="widget-content color-primary">
                
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 wow animated slideInDown">
              <div className="footer-widget color-gray-light mt-sm-30">
              
                <div className="widget-content hover-secondery-primary">
                <ul className="quick-links">
                { 
                 states.length > 0 ? states.slice(0, 4).map(xxx=> 
                 <li>
                   <a href={"/cities?city="+xxx}>{xxx}</a>
                 </li>
               ) : null
              }
              </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 wow animated slideInUp">
              <div className="footer-widget color-gray-light mt-md-30">
               
                <div className="widget-content hover-secondery-primary">
                  <ul className="quick-links">
                  { 
                 states.length > 4 ? states.slice(4, 8).map(xxx=> 
                 <li>
                   <a href={"/cities?city="+xxx}>{xxx}</a>
                 </li>
               ) : null
              }
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-2 wow animated slideInDown">
              <div className="footer-widget color-gray-light mt-sm-30">
              
                <div className="widget-content hover-secondery-primary">
                  <ul className="quick-links">
                  { 
                 states.length > 8 ? states.slice(8, 12).map(xxx=> 
                 <li>
                   <a href={"/cities?city="+xxx}>{xxx}</a>
                 </li>
               ) : null
              }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright bg-gray color-secondary">
        <div className="container">
          <div className="row">
            <hr className="border-top-1-light-gray w-100 m-0" />
            <div className="col-md-12 col-lg-12">
              <div className="py-15 text-center">
                RoomNets @ 2020. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End
=========================================================================*/}
    </React.Fragment>
  );
};

export default Footer;
