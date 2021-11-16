import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Header from "../Header";
import Toast from "../../components/Toast";
import { useHistory } from "react-router";
import AutoCompletePlaces from "../Autocomplete";
import CountUp from "react-countup";
import axios from "axios";
import { useSelector } from "react-redux";
import Footer from "../footer";

const Homepage = (props) => {
  const history = useHistory();
  // const state = history.location.state;
  const [homepageData, setHomePageData] = React.useState({ Banners: [] });
  const [open, setOpen] = React.useState(false);
  const [SearchType, setSearchType] = React.useState("apartment");
  const [searchText, setSearchText] = React.useState();
  const country = useSelector(({ CountryReducer }) => CountryReducer.country);
  // React.useEffect(() => {
  //   state && state.message && setOpen(true);
  //   console.log(props);
  // }, []);

  const fetchHomepageModels = async () => {
    return await axios
      .get(`/api/v1/fetchHomepageModels`)
      .then((response) => response)
      .catch((err) => err);
  };
  const handleSearch1 = () => {
    if (!searchText) {
      return alert("search field is empty");
    }
    console.log("called");
    SearchType === "rooms" &&
      history.push({
        pathname: "/SearchResult1",
        state: { location: searchText },
      });
    SearchType === "apartment" &&
      history.push({
        pathname: "/SearchResult2",
        state: { location: searchText },
      });
  };
  //search by auto complete drop down using longitude and latitude
  const handleSearch2 = async (places) => {
    //places.name mease we didnt select from  the drop down of auto
    //completet rather we clicked enter after searching location
    if (places.name) {
      return handleSearch1;
    }
    console.log(places);
    const place_id = places.place_id;
    const lng = await places.geometry.location.lng();
    const lat = await places.geometry.location.lat();
    const address = places.formatted_address;
    console.log(address);
    SearchType === "rooms" &&
      history.push({
        pathname: "/SearchResult1",
        state: { lng: lng, lat: lat, address: address },
      });
    SearchType === "apartment" &&
      history.push({
        pathname: "/SearchResult2",
        state: { lng: lng, lat: lat, address: address },
      });
  };

  React.useEffect(
    () =>
      fetchHomepageModels()
        .then((res) => setHomePageData({ ...res.data.userData }))
        .catch((err) => console.log(err)),

    []
  );

  const cities =
    country === "NG"
      ? [
          { name: "Lagos", uri: "/images/cities/lagos1.jpg" },
          { name: "Abuja", uri: "/images/cities/abuja1.jpg" },
          { name: "Enugu", uri: "/images/cities/enugu1.jpg" },
          { name: "Ibadan", uri: "/images/cities/Oyo.jpg" },
          { name: "Owerri", uri: "/images/cities/Owerri.jpg" },
          { name: "Kaduna", uri: "/images/cities/Kaduna.jpg" },
        ]
      : country === "GB"
      ? [
          { name: "London", uri: "/images/cities/london1.jpg" },
          { name: "Manchester", uri: "/images/cities/london2.jpg" },
          { name: "Bristol", uri: "/images/cities/bristol.jpg" },
          { name: "Nottingham", uri: "/images/cities/Nottingham.jpg" },
          { name: "Coventry", uri: "/images/cities/Coventry.jpg" },
          { name: "Liverpool", uri: "/images/cities/Liverpool.jpg" },
        ]
      : country === "US"
      ? [
          { name: "New york", uri: "/images/cities/usa1.jpg" },
          { name: "Miami", uri: "/images/cities/usa2.jpg" },
          { name: "Texas", uri: "/images/cities/usa3.jpg" },
          { name: "Louisiana", uri: "/images/cities/Louisiana.jpg" },
          { name: "Kentucky", uri: "/images/cities/Kentucky.jpg" },
          { name: "North Carolina", uri: "/images/cities/Carolina.jpg" },
        ]
      : country === "GH"
      ? [
          { name: "Accra", uri: "/images/cities/accra.jpg" },
          { name: "Dembai", uri: "/images/cities/dambai.jpg" },
          { name: "Aflao", uri: "/images/cities/aflao.jpg" },
          { name: "Sekondi", uri: "/images/cities/Sekondi.jpg" },
          { name: "Goaso", uri: "/images/cities/Goaso.jpg" },
          { name: "Obuase", uri: "/images/cities/Obuase.jpg" },
        ]
      : country === "IE"
      ? [
          { name: "Dublin", uri: "/images/cities/dublin.jpg" },
          { name: "Waterford", uri: "/images/cities/waterford.jpg" },
          { name: "Longford", uri: "/images/cities/longford.jpg" },
          { name: "Carlow", uri: "/images/cities/Carlow.jpg" },
          { name: "Limerick", uri: "/images/cities/Limerick.jpg" },
          { name: "Blackrock", uri: "/images/cities/Blackrock.jpg" },
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
          { name: "Meru", uri: "/images/cities/Meru.jpg" },
          { name: "Laikipia", uri: "/images/cities/Laikipia.jpg" },
          { name: "Nandi", uri: "/images/cities/Nandi.jpg" },
        ]
      : [];

  const MapPopularCities = (cities) =>
    cities.map((city) => (
      <div className="col-md-12 col-lg-6 col-xl-4 wow animated slideInDown">
        <div className="property-thumbnail mt-30">
          <div className="property-img position-relative overflow-hidden overlay-secondary-4">
            <img src={city.uri} alt="" />
            <div className="thumbnail-content z-index-1 color-white-a color-white">
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
              <div className="hover-content py-30 px-20 overlay-hover-gradient">
                <div className="thumbnail-title z-index-1 position-relative">
                  <span
                    style={{ textTransform: "uppercase" }}
                    className="thumbnail-price bg-white color-secondary px-15 mb-10"
                  >
                    {city.name}
                  </span>
                  <a className="color-secondary mb-5">
                    <h4
                      style={{
                        whiteSpace: "nowrap",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Link
                        to={{
                          pathname: "/Browse-rooms-list-rooms",
                          state: city.name,
                        }}
                      >
                        Rooms
                      </Link>{" "}
                    <span className="mx-2">|</span>
                      <Link
                        to={{
                          pathname: "/Browse-rooms-list-apart",
                          state: city.name,
                        }}
                      >
                        Apartments
                      </Link>
                    </h4>
                  </a>
                </div>
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    ));

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
=========================================================================*/}
      <Header />
      {/* <Toast
        open={open}
        setOpen={setOpen}
        message={state ? state.message : ""}
      /> */}
      {/* End Header
=========================================================================*/}
      {/* Start Slider
=========================================================================*/}
      <div className="topPatch" style={{ height: "120px" }} />
      <div
        id="slider"
        data-current-slide="1"
        style={{
          minHeight: "200px",

          margin: "0 auto",
          marginBottom: "8px",

          position: "relative",
        }}
      >
        <div className="sliderSearch">
          <div className=" col-lg-6 col-sm -5 text-center">
            <h1
              style={{ color: "#fff", textshadow: "0 0 8px #fff" }}
              class="title mb-20 "
            >
              Find A New Home
            </h1>
            <p className="headSubtext">
              Let's Find you a roommate or room to rent
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch1();
              }}
              className="adbanced-form-one amenities-list pt-15"
            >
              <div className="row">
                <div className="form-group col">
                  <AutoCompletePlaces
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    handleplaces={(places) => handleSearch2(places)}
                    className="form-control mt-sm-15"
                    placeholder="Address, State/City, Location"
                  />
                  {/* <input
                    className="form-control mt-sm-15"
                    type="text"
                    name="address"
                    placeholder="Address, State/City, Zip Code, Location"
                  /> */}
                </div>
                <div className="form-group col-md-3 col-lg-2">
                  <button
                    className="btn btn-primary btn-1 mt-sm-15"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
                {/* <span className="formicon mb-50">
                      <a
                        className="checkbox_collapse"
                        data-toggle="collapse"
                        href="#collapseExample"
                        role="button"
                        aria-expanded="false"
                      />
                    </span> */}
              </div>
            </form>
            <div style={{ height: "20px" }} />
            {/* radio starts */}
            <div>
              <div className=" form-group row justify-content-center">
                <div className=" custom-radio ">
                  <label>
                    <input
                      checked={SearchType === "rooms"}
                      type="checkbox"
                      name="light"
                      defaultChecked
                      onChange={() => setSearchType("rooms")}
                    />
                    <span className="design" />
                    <span
                      className={
                        SearchType === "rooms" ? "color-primary" : "text"
                      }
                    >
                      Romm Mates/Rooms
                    </span>
                  </label>
                  <label>
                    <input
                      onChange={() => setSearchType("apartment")}
                      checked={SearchType === "apartment"}
                      type="checkbox"
                      name="light"
                    />
                    <span className="design" />
                    <span
                      className={
                        SearchType === "apartment" ? "color-primary" : "text"
                      }
                    >
                      Apartments
                    </span>
                  </label>
                  {/* <label>
                    <input type="radio" name="light" />
                    <span className="design" />
                    <span className="text">All</span>
                  </label> */}
                </div>
              </div>
            </div>
            {/* radio ends */}
          </div>
        </div>
        {/* Slide 1*/}
        <div
          className="ls-slide2"
          style={{
            visibility: "visible !important",
          }}
          // data-ls="bgposition:50% 50%; duration:9000; transition2d:4; kenburnsscale:1.2;"
        >
          <Carousel
            axis="vertical"
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={10000}
            transitionTime={500}
          >
            <img
              width={1920}
              height={900}
              src="images/slider/1.jpg"
              className="ls-bg"
              alt=""
            />
            <img
              width={1920}
              height={900}
              src="images/slider/2.jpg"
              className="ls-bg"
              alt=""
            />
            <img
              width={1920}
              height={900}
              src="images/slider/3.jpg"
              className="ls-bg"
              alt=""
            />
          </Carousel>
        </div>
      </div>
      {/* End Slider
=========================================================================*/}
      {/* New & sale Home Start
=========================================================================*/}
      <div>
        <div className="container">
          <div className="col-12 addbanner1 my-20">
            {homepageData &&
            homepageData.Banners &&
            homepageData.Banners.length > 0 ? (
              <img src={homepageData["Banners"][0]["uri"]} alt="add" />
            ) : null}
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-6 wow animated slideInRight">
              <div className="row">
                <div className="thumbnail-angle-one overflow-hidden position-relative bg-secondary pt-50 px-50 pb-100 text-center flat-large icon-primary color-white">
                  <span>
                    <i className="flaticon-home" />
                  </span>
                  <h4 className="my-30 color-white">
                    Want To Let Your Homes Out?
                  </h4>
                  <p>
                    Placerat mi auctor ridiculus sodales mauris cras odio non
                    sociosquse gravida dignissim dictum elementum porta pharetra
                    ultricies cras velit vel sit justo dictum. Pharetra dapibus
                    vehicula amet suscipit arcu, consequat tortor tristique hac
                    dolor. Dictum potenti molestie pellentesque lorem ornare
                    volutpat.
                  </p>
                  <div className="btn-position x-center">
                    <a
                      className="btn btn-primary position-relative"
                      href="/postadd"
                    >
                      Post Free Add
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 wow animated slideInLeft">
              <div className="row">
                <div className="thumbnail-angle-two overflow-hidden position-relative bg-dark pt-50 px-50 pb-100 mt-md-50 text-center flat-large icon-primary color-white">
                  <span>
                    <i className="flaticon-house" />
                  </span>
                  <h4 className="my-30 color-white">
                    Need A Spare Room or A Roommate?
                  </h4>
                  <p>
                    Placerat mi auctor ridiculus sodales mauris cras odio non
                    sociosquse gravida dignissim dictum elementum porta pharetra
                    ultricies cras velit vel sit justo dictum. Pharetra dapibus
                    vehicula amet suscipit arcu, consequat tortor tristique hac
                    dolor. Dictum potenti molestie pellentesque lorem ornare
                    volutpat.
                  </p>
                  <div className="btn-position x-center">
                    <a
                      className="btn btn-primary position-relative"
                      href="/Browse-rooms"
                    >
                      Search Rooms
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* New & sale Home End
=========================================================================*/}
      {/*Neighborhoods Start
=========================================================================*/}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 wow animated slideInDown">
              <div className="main-title w-50 mx-auto d-table text-center mb-30">
                <span className="small-title color-primary position-relative line-2-primary">
                  Explore
                </span>
                <h2 className="title mb-20 color-secondary">
                  Popular Service Room Towns
                </h2>
                <span className="sub-title">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.on ullamco labor
                </span>
              </div>
            </div>
            <div className="col-md-12 col-lg-12">
              {/* start caro */}
              {/* <div className=" owl-carousel neighborhoods owl-dots-none mt-30 owl-loaded owl-drag"> */}
              <Carousel
                autoPlay={true}
                showThumbs={false}
                children={3}
                infiniteLoop={true}
                interval={5000}
                transitionTime={2000}
              >
                <div className="row">{MapPopularCities(cities)}</div>
              </Carousel>

              {/* end caro */}
            </div>
          </div>
        </div>
      </section>
      {/*Neighborhoods End
=========================================================================*/}
      {/* Why Choose Us Start
=========================================================================*/}
      <section id="whyChooseUs"
        className="position-relative"
        style={{
          background:
            "url(images/background/1.png) no-repeat bottom center / cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-7 wow animated slideInDown">
              <div className="bg-white p-50">
                <div className="row">
                  <div className="col-md-12 col-lg-10">
                    <div className="side-title mb-30">
                      <span className="small-title color-primary position-relative line-primary">
                        Want A Better Life?
                      </span>
                      <h2 className="title mb-20 color-secondary">
                        Why choose RoomNets
                      </h2>
                      <p>
                        Luctus posuere facili eros auctor lacinia litora.
                        Convall aptent nisy parturient scelerisq. Nullam fringil
                        condimen integer mauris lacus aliquam, quam massa
                        lobortis commod proin magna.
                      </p>
                    </div>
                    <div className="why-us mt-30 flat-medium icon-primary">
                      <ul>
                        <li>
                          <span className="float-left mr-15">
                            <i className="flaticon-home" />
                          </span>
                          <div className="d-table">
                            <h4 className="color-secondary mb-15">
                              Location of the House
                            </h4>
                            <p>
                              Consectetu cum nunc pede porttitor, nibh suspend
                              socios congue. Pede lectus habitasse consequat
                              conval natoque ligula neque ridiculus mauris.
                            </p>
                          </div>
                        </li>
                        <li className="mt-30">
                          <span className="float-left mr-15">
                            <i className="flaticon-parking-area" />
                          </span>
                          <div className="d-table">
                            <h4 className="color-secondary mb-15">
                              Parking Lot Size
                            </h4>
                            <p>
                              Consectetu cum nunc pede porttitor, nibh suspend
                              socios congue. Pede lectus habitasse consequat
                              conval natoque ligula neque ridiculus mauris.
                            </p>
                          </div>
                        </li>
                        <li className="mt-30">
                          <span className="float-left mr-15">
                            <i className="flaticon-house-2" />
                          </span>
                          <div className="d-table">
                            <h4 className="color-secondary mb-15">
                              Age of the House
                            </h4>
                            <p>
                              Consectetu cum nunc pede porttitor, nibh suspend
                              socios congue. Pede lectus habitasse consequat
                              conval natoque ligula neque ridiculus mauris.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100">
              <div className="fact-counter achievement text-center py-50 px-30 position-absolute bg-secondary wow animated slideInRight">
                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <div className="counter count wow">
                      <div className="counter-point d-inline-block">
                        <h2
                          className="count-num color-primary"
                          // data-speed={3000}
                          // data-stop={1250}
                        >
                          <CountUp end={1250} duration={5} />
                        </h2>
                      </div>
                      <h6 className="achievement-title color-white">
                        Properties Listed
                      </h6>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="counter count wow mt-sm-30">
                      <div className="counter-point d-inline-block">
                        <h2
                          className="count-num color-primary"
                          // data-speed={3000}
                          // data-stop={72}
                        >
                          <CountUp end={72} duration={5} />
                        </h2>
                      </div>
                      <h6 className="achievement-title color-white">
                        Locations Covers
                      </h6>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="counter count wow mt-30">
                      <div className="counter-point d-inline-block">
                        <h2
                          className="count-num color-primary"
                          data-speed={3000}
                          data-stop={150}
                        >
                          <CountUp end={150} duration={5} />
                        </h2>
                      </div>
                      <h6 className="achievement-title color-white">
                        Expert Agents
                      </h6>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="counter count wow mt-30">
                      <div className="counter-point d-inline-block">
                        <h2
                          className="count-num color-primary"
                          data-speed={3000}
                          data-stop={583}
                        >
                          <CountUp end={583} duration={5} />
                        </h2>
                      </div>
                      <h6 className="achievement-title color-white">
                        Properties Rented
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Start
=========================================================================*/}
      {/* Properties Thumbnail Start
=========================================================================*/}
      {/* <section>
        <div className="container">
          <div className="row">
            <div className="col-12 addbanner1 my-10">
              {homepageData &&
              homepageData.Banners &&
              homepageData.Banners.length > 0 ? (
                <img src={homepageData["Banners"][0]["uri"]} alt="add" />
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-12 wow animated slideInUp">
              <div className="main-title w-75 mx-auto d-table text-center mb-30">
                <span className="small-title color-primary position-relative line-2-primary">
                  New Arrival Collections
                </span>
                <h2 className="title mb-20 color-secondary">
                  Recent Apartments/Flats
                </h2>
                <span className="sub-title">
                  Congue commodo ipsum, risus urna nisi. Primis velit turpis
                  sollicitudin. Felis aptent sagittis aliquet turpis et
                  tristique montes vestibulum rutrum. Scelerisque viverra ac
                  ridiculus enim. Curabitur.
                </span>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-xl-4 wow animated slideInRight">
              <div className="property-thumbnail mt-30">
                <div className="property-img position-relative overflow-hidden overlay-secondary-4">
                  <img src="images/property/7.jpg" alt="image" />
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
                    <div className="hover-content py-30 px-20 overlay-hover-gradient">
                      <div className="thumbnail-title z-index-1 position-relative">
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
                          <span className="color-primary">400</span> sqft
                        </li>
                        <li>
                          <span className="color-primary">3</span> Bedrooms
                        </li>
                        <li>
                          <span className="color-primary">2</span> Bathrooms
                        </li>
                        <li>
                          <span className="color-primary">1</span> Garage
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
                          <span className="color-primary">300</span> sqft
                        </li>
                        <li>
                          <span className="color-primary">4</span> Bedrooms
                        </li>
                        <li>
                          <span className="color-primary">2</span> Bathrooms
                        </li>
                        <li>
                          <span className="color-primary">1</span> Garage
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-xl-4 wow animated slideInLeft">
              <div className="property-thumbnail mt-30">
                <div className="property-img position-relative overflow-hidden overlay-secondary-4">
                  <img src="images/property/9.jpg" alt="image" />
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
                    <div className="hover-content py-30 px-20 overlay-hover-gradient">
                      <div className="thumbnail-title z-index-1 position-relative">
                        <span className="thumbnail-price bg-white color-secondary px-15 mb-10">
                          $ 15200
                        </span>
                        <a
                          className="color-secondary mb-5"
                          href="single-property.html"
                        >
                          <h4>Diamond Manor Apartment</h4>
                        </a>
                        <span className="address icon-primary f-14">
                          <i className="fa fa-map-marker" />
                          40 Tower Avenue, Melbourne, Australia.
                        </span>
                      </div>
                      <ul className="about-property icon-primary d-table f-14 z-index-1 position-relative">
                        <li>
                          <span className="color-primary">500</span> sqft
                        </li>
                        <li>
                          <span className="color-primary">8</span> Bedrooms
                        </li>
                        <li>
                          <span className="color-primary">4</span> Bathrooms
                        </li>
                        <li>
                          <span className="color-primary">2</span> Garage
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       */}
      {/* Properties Thumbnail End
=========================================================================*/}
      {/* Feautred Properties Start
=========================================================================*/}

      {/* Best Offer Start
=========================================================================*/}
      {/* <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 wow animated slideInUp">
              <div className="main-title w-75 mx-auto d-table text-center mb-30">
                <span className="small-title color-primary position-relative line-2-primary">
                  Hot Property
                </span>
                <h2 className="title mb-20 color-secondary">
                  Best Offers of This Week
                </h2>
                <span className="sub-title">
                  Congue commodo ipsum, risus urna nisi. Primis velit turpis
                  sollicitudin. Felis aptent sagittis aliquet turpis et
                  tristique montes vestibulum rutrum. Scelerisque viverra ac
                  ridiculus enim. Curabitur.
                </span>
              </div>
            </div>
            <div className="col-md-12 col-lg-12 col-xl-8">
              <div className="row">
                <div className="col-md-12 col-lg-7">
                  <div className="property-thumbnail mt-30 wow animated slideInRight">
                    <div className="property-img position-relative overflow-hidden overlay-secondary-4">
                      <img src="images/property/13.jpg" alt="image" />
                      <div className="thumbnail-content z-index-1 color-white-a color-white">
                        <span className="thum-category category-1 bg-secondary color-white z-index-1 px-15 d-table">
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
                        <div className="hover-content py-30 px-20 overlay-hover-gradient">
                          <div className="thumbnail-title z-index-1 position-relative">
                            <span className="thumbnail-price bg-white color-secondary px-15 mb-10 d-table">
                              $ 45000
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
                              <i className="flaticon-fit-screen" />
                              500
                            </li>
                            <li>
                              <i className="flaticon-hotel" />6
                            </li>
                            <li>
                              <i className="flaticon-bathtub" />4
                            </li>
                            <li>
                              <i className="flaticon-garage" />2
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-5 wow animated slideInUp">
                  <div className="property-thumbnail mt-30">
                    <div className="property-img position-relative overflow-hidden overlay-secondary-4">
                      <img src="images/property/14.jpg" alt="image" />
                      <div className="thumbnail-content z-index-1 color-white-a color-white">
                        <span className="thum-category category-1 bg-secondary color-white z-index-1 px-15 d-table">
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
                        <div className="hover-content py-30 px-20 overlay-hover-gradient">
                          <div className="thumbnail-title z-index-1 position-relative">
                            <span className="thumbnail-price bg-white color-secondary px-15 mb-10">
                              $ 27000
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
                              <i className="flaticon-fit-screen" />
                              300
                            </li>
                            <li>
                              <i className="flaticon-hotel" />4
                            </li>
                            <li>
                              <i className="flaticon-bathtub" />2
                            </li>
                            <li>
                              <i className="flaticon-garage" />1
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-5 wow animated slideInDown">
                  <div className="property-thumbnail mt-30">
                    <div className="property-img position-relative overflow-hidden overlay-secondary-4">
                      <img src="images/property/16.jpg" alt="image" />
                      <div className="thumbnail-content z-index-1 color-white-a color-white">
                        <span className="thum-category category-1 bg-secondary color-white z-index-1 px-15 d-table">
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
                        <div className="hover-content py-30 px-20 overlay-hover-gradient">
                          <div className="thumbnail-title z-index-1 position-relative">
                            <span className="thumbnail-price bg-white color-secondary px-15 mb-10 d-table">
                              $ 18000
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
                              <i className="flaticon-fit-screen" />
                              300
                            </li>
                            <li>
                              <i className="flaticon-hotel" />4
                            </li>
                            <li>
                              <i className="flaticon-bathtub" />2
                            </li>
                            <li>
                              <i className="flaticon-garage" />1
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-7 wow animated slideInUp">
                  <div className="property-thumbnail mt-30">
                    <div className="property-img position-relative overflow-hidden overlay-secondary-4">
                      <img src="images/property/17.jpg" alt="image" />
                      <div className="thumbnail-content z-index-1 color-white-a color-white">
                        <span className="thum-category category-1 bg-secondary color-white z-index-1 px-15 d-table">
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
                        <div className="hover-content py-30 px-20 overlay-hover-gradient">
                          <div className="thumbnail-title z-index-1 position-relative">
                            <span className="thumbnail-price bg-white color-secondary px-15 mb-10 d-table">
                              $ 10000
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
                              <i className="flaticon-fit-screen" />
                              500
                            </li>
                            <li>
                              <i className="flaticon-hotel" />6
                            </li>
                            <li>
                              <i className="flaticon-bathtub" />4
                            </li>
                            <li>
                              <i className="flaticon-garage" />2
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 d-none-lg col-xl-4 wow animated slideInDown">
              <div className="property-thumbnail mt-30">
                <div className="property-img position-relative overflow-hidden overlay-secondary-4">
                  <img src="images/property/15.jpg" alt="image" />
                  <div className="thumbnail-content z-index-1 color-white-a color-white">
                    <span className="thum-category category-1 bg-secondary color-white z-index-1 px-15 d-table">
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
                    <div className="hover-content py-30 px-20 overlay-hover-gradient">
                      <div className="thumbnail-title pb-15 z-index-1 position-relative">
                        <span className="thumbnail-price bg-white color-secondary px-15 mb-10 d-table">
                          $ 12000
                        </span>
                        <a
                          className="color-secondary mb-5"
                          href="single-property.html"
                        >
                          <h4>park Apartment</h4>
                        </a>
                        <span className="address icon-primary f-14">
                          <i className="fa fa-map-marker" />
                          Urbis Building, UK
                        </span>
                      </div>
                      <ul className="about-property icon-primary d-table f-14 z-index-1 position-relative">
                        <li>
                          <i className="flaticon-fit-screen" />
                          200
                        </li>
                        <li>
                          <i className="flaticon-hotel" />3
                        </li>
                        <li>
                          <i className="flaticon-bathtub" />2
                        </li>
                        <li>
                          <i className="flaticon-garage" />1
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       */}
      {/* Best Offer End
=========================================================================*/}
      {/* Best place & faq Start
=========================================================================*/}
      <section id="faq" className="bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6 wow animated slideInUp">
              <div className="side-title mb-30">
                <span className="small-title color-primary position-relative line-primary">
                  What Are You Looking For?
                </span>
                <h2 className="title mb-20 color-secondary">
                  Find the Best Places to you.
                </h2>
                <p>
                  Luctus posuere facilisi eros auctor lacinia litora. Convall
                  aptent nisy parturient scelerisq. Nullam fringil condimen
                  integer mauris lacus aliquam, quam massa lobortis commod proin
                  magna.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-12 col-lg-6 mt-50 py-80 px-60"
              style={{
                background: "url(images/background/9.png) center center /cover",
                height: "fit-content",
              }}
            >
              <div className="row">
                <div className="col-md-12 col-lg-12 col-xl-6 wow animated slideInUp">
                  <div className="property-item-type bg-dark py-20 px-30 flat-medium icon-primary d-flex">
                    <span className="float-left mr-20">
                      <i className="flaticon-house-2" />
                    </span>
                    <h4 className="color-hover-white color-gray-a align-self-center">
                      <a href="#">Apartment</a>
                    </h4>
                  </div>
                </div>
                <div className="col-md-12 col-lg-12 col-xl-6 wow animated slideInRight">
                  <div className="property-item-type bg-dark py-20 px-30 flat-medium icon-primary d-flex mt-lg-30">
                    <span className="float-left mr-20">
                      <i className="flaticon-rental" />
                    </span>
                    <h4 className="color-hover-white color-gray-a align-self-center">
                      <a href="#">Building</a>
                    </h4>
                  </div>
                </div>
                <div className="col-md-12 col-lg-12 col-xl-6 wow animated slideInDown">
                  <div className="property-item-type bg-dark py-20 px-30 flat-medium icon-primary d-flex mt-30">
                    <span className="float-left mr-20">
                      <i className="flaticon-interior-design" />
                    </span>
                    <h4 className="color-hover-white color-gray-a align-self-center">
                      <a href="#">Condominium</a>
                    </h4>
                  </div>
                </div>
                <div className="col-md-12 col-lg-12 col-xl-6 wow animated slideInLeft">
                  <div className="property-item-type bg-dark py-20 px-30 flat-medium icon-primary d-flex mt-30">
                    <span className="float-left mr-20">
                      <i className="flaticon-hotel" />
                    </span>
                    <h4 className="color-hover-white color-gray-a align-self-center">
                      <a href="#">House</a>
                    </h4>
                  </div>
                </div>
                <div className="col-md-12 col-lg-12 col-xl-6 wow animated slideInUp">
                  <div className="property-item-type bg-dark py-20 px-30 flat-medium icon-primary d-flex mt-30">
                    <span className="float-left mr-20">
                      <i className="flaticon-house" />
                    </span>
                    <h4 className="color-hover-white color-gray-a align-self-center">
                      <a href="#">Office</a>
                    </h4>
                  </div>
                </div>
                <div className="col-md-12 col-lg-12 col-xl-6 wow animated slideInDown">
                  <div className="property-item-type bg-dark py-20 px-30 flat-medium icon-primary d-flex mt-30">
                    <span className="float-left mr-20">
                      <i className="flaticon-rental" />
                    </span>
                    <h4 className="color-hover-white color-gray-a align-self-center">
                      <a href="#">Shop</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 bg-white py-80 px-60 wow animated slideInUp">
              <div className="side-title mb-30">
                <span className="small-title color-primary position-relative line-primary">
                  Faq
                </span>
                <h2 className="title mb-20 color-secondary">
                  Our Frequently popular questions.
                </h2>
                <p>
                  Luctus posuere facilisi eros auctor lacinia litora. Convall
                  aptent nisy parturient scelerisq. Nullam fringil condimen
                  integer mauris lacus aliquam, quam massa lobortis commod proin
                  magna.
                </p>
              </div>
              <a className="btn-more mt-15" href="/FAQ">
                Read More
              </a>{" "}
            </div>
          </div>
        </div>
      </section>
      {/* Best place & faq End
=========================================================================*/}
      {/* Blog Start
=========================================================================*/}
      {/* <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 wow animated slideInUp">
              <div className="main-title w-50 mx-auto d-table text-center mb-30">
                <span className="small-title color-primary position-relative line-2-primary">
                  Find Out The Latest Posts
                </span>
                <h2 className="title mb-20 color-secondary">Our Blogs</h2>
                <span className="sub-title">
                  Sociis eget dui hendrerit urna felis euismod viverra. Inceptos
                  habitasse augue quisque facilisis per. Nibh justo massa
                  suscipit.
                </span>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 wow animated slideInDown">
              <div className="post-thumbnail hover-secondery-primary mt-30">
                <div className="post-img overflow-hidden">
                  <img src="images/blog/1.jpg" alt="Image not found!" />
                </div>
                <div className="post-meta icon-primary color-secondary-a px-20 py-10 bg-gray">
                  <ul className="post-info list-style-1 d-flex color-secondary">
                    <li>
                      <i className="fa fa-user" /> Admin
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-comments-o" /> 536
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-share-alt" /> 898
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="post-content mt-20 color-secondary color-secondary-a">
                  <div className="post-date w-25 float-left bg-gray mr-20 text-center">
                    <div className="py-10">
                      <span className="d-block">25</span>July
                    </div>
                    <div className="post-love py-5 bg-primary">
                      <a href="#">
                        <i className="fa fa-heart" aria-hidden="true" /> 2.5k
                      </a>
                    </div>
                  </div>
                  <div className="text-area d-table">
                    <a
                      className="post-title mb-15"
                      href="blog-details-right-sidebar.html"
                    >
                      <h5>
                        Litora dignis sagitti nullam mollis suscipit pulvinar.
                      </h5>
                    </a>
                    <p>
                      Quam faucibus elit tincidu senectus semper tempus
                      Nascetur, accumsa pellentesque consectetuer.
                    </p>
                    <a
                      className="btn-more mt-15"
                      href="blog-details-right-sidebar.html"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 wow animated slideInUp">
              <div className="post-thumbnail hover-secondery-primary mt-30">
                <div className="post-img overflow-hidden">
                  <img src="images/blog/2.jpg" alt="Image not found!" />
                </div>
                <div className="post-meta icon-primary color-secondary-a px-20 py-10 bg-gray">
                  <ul className="post-info list-style-1 d-flex color-secondary">
                    <li>
                      <i className="fa fa-user" /> Admin
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-comments-o" /> 642
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-share-alt" /> 769
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="post-content mt-20 color-secondary color-secondary-a">
                  <div className="post-date w-25 float-left bg-gray mr-20 text-center">
                    <div className="py-10">
                      <span className="d-block">27</span>July
                    </div>
                    <div className="post-love py-5 bg-primary">
                      <a href="#">
                        <i className="fa fa-heart" aria-hidden="true" /> 1.3k
                      </a>
                    </div>
                  </div>
                  <div className="text-area d-table">
                    <a
                      className="post-title mb-15"
                      href="blog-details-right-sidebar.html"
                    >
                      <h5>
                        Integer morb eget habitant litora curabitur velit.
                      </h5>
                    </a>
                    <p>
                      Quam faucibus elit tincidu senectus semper tempus
                      Nascetur, accumsa pellentesque consectetuer.
                    </p>
                    <a
                      className="btn-more mt-15"
                      href="blog-details-right-sidebar.html"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 wow animated slideInDown">
              <div className="post-thumbnail hover-secondery-primary mt-30">
                <div className="post-img overflow-hidden">
                  <img src="images/blog/3.jpg" alt="Image not found!" />
                </div>
                <div className="post-meta icon-primary color-secondary-a px-20 py-10 bg-gray">
                  <ul className="post-info list-style-1 d-flex color-secondary">
                    <li>
                      <i className="fa fa-user" /> Admin
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-comments-o" /> 374
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-share-alt" /> 738
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="post-content mt-20 color-secondary color-secondary-a">
                  <div className="post-date w-25 float-left bg-gray mr-20 text-center">
                    <div className="py-10">
                      <span className="d-block">29</span>July
                    </div>
                    <div className="post-love py-5 bg-primary">
                      <a href="#">
                        <i className="fa fa-heart" aria-hidden="true" /> 1.5k
                      </a>
                    </div>
                  </div>
                  <div className="text-area d-table">
                    <a
                      className="post-title mb-15"
                      href="blog-details-right-sidebar.html"
                    >
                      <h5>
                        Facilisi vel nisi bibend pede ante aenean placerat.
                      </h5>
                    </a>
                    <p>
                      Quam faucibus elit tincidu senectus semper tempus
                      Nascetur, accumsa pellentesque consectetuer.
                    </p>
                    <a
                      className="btn-more mt-15"
                      href="blog-details-right-sidebar.html"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       */}
      {/* Blog End
=========================================================================*/}
      {/*  Partners and Subscribe Form Start
=========================================================================*/}

      {/*  Partners and Subscribe Form Start
=========================================================================*/}
      <Footer />
      {/* jquery Links
==================================================================*/}
    </div>
  );
};

export default Homepage;
