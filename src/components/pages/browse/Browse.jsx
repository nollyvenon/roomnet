import React from "react";
import Header from "../../Header";
import { useHistory } from "react-router-dom";
import BrowseCards from "../../BrowsCards";
import NigeriaState from "./nigeriState.json";
import { useSelector } from "react-redux";
import UsaState from "./usastates.json";
import ghanaState from "./ghanastates.json";
import KenyanStates from "./kenyastates.json";
import SouthafricaStates from "./southafricaStates.json";
import Irelandstates from "./irelandstates.json";
import Footer from "../../footer";
import Ukstates from "./ukstates.json";
import axios from "axios";

const Browse = () => {
  const history = useHistory();
  const [homepageData, setHomePageData] = React.useState({ Banners: [] });
  const country = useSelector(({ CountryReducer }) => CountryReducer.country);
  const handleNext = () => {
    history.push("/process-rooms-advert2");
  };

  const fetchHomepageModels = async () => {
    return await axios
      .get(`/api/v1/fetchHomepageModels`)
      .then((response) => response)
      .catch((err) => err);
  };
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
  const mapStates = (states) => {
    return (
      <>
        {states.length > 0 ? <BrowseCards data={states.slice(0, 4)} /> : null}
        {states.length > 4 ? <BrowseCards data={states.slice(4, 8)} /> : null}
        {states.length > 8 ? <BrowseCards data={states.slice(8, 12)} /> : null}
        {states.length > 12 ? (
          <BrowseCards data={states.slice(12, 16)} />
        ) : null}
        {states.length > 16 ? (
          <BrowseCards data={states.slice(16, 20)} />
        ) : null}
        {states.length > 20 ? (
          <BrowseCards data={states.slice(20, 24)} />
        ) : null}
        {states.length > 24 ? (
          <BrowseCards data={states.slice(24, 28)} />
        ) : null}
        {states.length > 28 ? (
          <BrowseCards data={states.slice(28, 32)} />
        ) : null}
        {states.length > 32 ? (
          <BrowseCards data={states.slice(32, 36)} />
        ) : null}
      </>
    );
  };

  React.useEffect(
    () =>
      fetchHomepageModels()
        .then((res) => setHomePageData({ ...res.data.userData }))
        .catch((err) => console.log(err)),

    []
  );
  return (
    <div>
      <Header />
      <div>
        <div className="topPatch" style={{ height: "80px" }} />
        <div className="poststep pricing my-80">
          <div className="container">
            <h3 className="color-secondary line-bottom pb-15 mb-20">
              Top RoomNets Room cities in{" "}
              {country == "KE"
                ? "Kenya"
                : country == "US"
                ? "USA"
                : country == "NG"
                ? "Nigeria"
                : country == "IE"
                ? "Ireland"
                : country == "ZA"
                ? "South Africa"
                : country == "GB"
                ? "United Kingdom"
                : country == "GH"
                ? "Ghana"
                : ""}
            </h3>
            <div className="row">
              <div className="col-lg-9">
                <div className="row justify-content-center">
                  {states ? mapStates(states) : null}
                </div>
              </div>
              <div
                style={{ width: "250px" }}
                className="col-lg-3 my-30 brosw-side-banner"
              >
                {homepageData && homepageData.Banners.length > 1 ? (
                  <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src={homepageData["Banners"][1]["uri"]}
                    alt="add"
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Browse;
