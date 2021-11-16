import React from "react";
import Header from "../Header";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { useSelector } from "react-redux";

const Privacy = () => {
  const [homepageData, setHomePageData] = React.useState({ privacy: [] });

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
  const mapPrivacy = () => {
    return (
      homepageData.privacy.length > 0 &&
      homepageData.privacy.map((xxx, index) => (
        <div className="card border-0">
          <div
            className="st-top d-inline-block position-relative card-header px-0 border-0 rounded-0 bg-transparent"
            id="headingone"
          >
            <h3 className="mb-0">{xxx.title}</h3>
          </div>
          <div
            id="collapseone"
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
              Privacy Policy
            </h3>
            <div className="row">
              <div className="col-lg-9">
                <span className="mt-5 d-block color-gray f-14">
                  {mapPrivacy()}
                </span>
              </div>
              <div
                style={{ width: "250px" }}
                className="col-lg-3 my-30 brosw-side-banner"
              >
                {/* {homepageData && homepageData.Banners.length > 1 ? (
                  <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src={homepageData["Banners"][1]["uri"]}
                    alt="add"
                  />
                ) : null} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
