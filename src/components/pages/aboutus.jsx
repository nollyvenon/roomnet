import React from "react";
import Header from "../Header";
import { useHistory } from "react-router-dom";

import { useSelector } from "react-redux";

import axios from "axios";
import Footer from "../footer";

const Aboutus = () => {
  const history = useHistory();

  const country = useSelector(({ CountryReducer }) => CountryReducer.country);
  const [homepageData, setHomePageData] = React.useState({
    aboutUs: [],
    Banners: [],
  });

  const fetchHomepageModels = async () => {
    return await axios
      .get(`/api/v1/fetchHomepageModels`)
      .then((response) => response)
      .catch((err) => err);
  };
  React.useEffect(
    () =>
      fetchHomepageModels()
        .then((res) => {
          setHomePageData({ ...res.data.userData });
        })
        .catch((err) => console.log(err)),

    []
  );
  const mapAboutus = () => {
    return (
      homepageData.aboutUs.length > 0 &&
      homepageData.aboutUs.map((xxx, index) => (
        <div key={index} className="card border-0">
          <div
            className="st-top d-inline-block position-relative card-header px-0 border-0 rounded-0 bg-transparent"
            id="headingone"
          >
            <h4 className="mb-0">{xxx.title}</h4>
          </div>
          <div
            className="collapse show"
            aria-labelledby="headingone"
            data-parent="#accordion"
          >
            <div className="card-body mb-15">{xxx.body}</div>
          </div>
        </div>
      ))
    );
  };
  return (
    <div>
      <Header />
      <div>
        <div className="topPatch" style={{ height: "80px" }} />
        <div className="poststep pricing my-80">
          <div className="container">
            <h3 className="color-secondary line-bottom pb-15 mb-20">
              About us
            </h3>
            <div className="col-md-12 col-lg-12 bg-white py-80 px-60 wow animated slideInUp">
              <div className="side-title mb-30">
                <h2 className="title mb-20 color-secondary">About RoomNets</h2>
                <p>Find More about us below..</p>
              </div>
              <div className="accordion-style-one">{mapAboutus()}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;
