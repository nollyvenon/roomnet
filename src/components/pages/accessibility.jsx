import React from "react";
import Header from "../Header";
import { useHistory } from "react-router-dom";

import { useSelector } from "react-redux";

import axios from "axios";
import Footer from "../footer";

const Accessibility = () => {
  const history = useHistory();
  const [homepageData, setHomePageData] = React.useState({
    faq: [],
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
  const mapFaq = () => {
    return (
      homepageData.faq.length > 0 &&
      homepageData.faq.map((xxx, index) => (
        <div className="card border-0">
          <div
            className="st-top d-inline-block position-relative card-header px-0 border-0 rounded-0 bg-transparent"
            id="headingone"
          >
            <h5 className="mb-0">
              <button
                className="d-block border-0 bg-transparent p-0 text-left"
                data-toggle="collapse"
                data-target="#collapseone"
                aria-expanded="true"
                aria-controls="collapseone"
              >
                {xxx.title}
              </button>
            </h5>
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
            {/* <h3 className="color-secondary line-bottom pb-15 mb-20">
              Privacy Policy
            </h3> */}

            {/* <span className="small-title color-primary position-relative line-primary">
              Faq
            </span> */}
            <div className="col-md-12 col-lg-10 bg-white py-80 px-60 wow animated slideInUp">
              <div className="side-title mb-30">
                <h2 className="title mb-20 color-secondary">
                  Accessibility statement
                </h2>
                <a href="/privacy">
                  {" "}
                  <p>Click here to view Our Privacy Policy</p>
                </a>
              </div>
              <div id="accordion" className="accordion-style-one">
                {/* {mapFaq()} */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Accessibility;
