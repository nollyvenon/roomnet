import React from "react";
import Header from "../Header";
import { useHistory } from "react-router-dom";

import { useSelector } from "react-redux";
import { RecentNewss } from "../pages/blogsdetails";
import axios from "axios";
import Footer from "../footer";

const HowItWorks = () => {
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
        <section className="bg-light">
          <div className="container">
            <div className="row">
              <div className="border-bottom-1-gray col-md-12 col-lg-12 wow slideInDown animated">
                <div className="side-title mb-30">
                  <h2 className="title mb-20 color-secondary">How it works</h2>
                </div>
              </div>
              <RecentNewss />
              <div className="col-md-12 col-lg-8">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-12 col-lg-6 wow slideInLeft animated">
                        <div className=" text-center agencies mt-30 py-40 px-30 bg-white hover-secondery-primary">
                          <a href="#">
                            <img src="images/checked.png" alt="image" />
                          </a>
                          <div className="agencies-content mt-10">
                            <a href="#">
                              <h4>Post An Add</h4>
                            </a>
                            <span className="mt-5 mb-30 d-block">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Fusce congue pharetra faucibus. Cras
                              consectetur quam id nisi consectetur, at vulputate
                              tellus molestie. Cras posuere ex nec ullamcorper
                              pulvinar. Aliquam sollicitudin cursus orci, vel
                              pretium nunc rutrum id.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-6 wow slideInRight animated">
                        <div className=" text-center agencies mt-30 py-40 px-30 bg-white hover-secondery-primary">
                          <a href="#">
                            <img src="images/checked.png" alt="image" />
                          </a>
                          <div className="agencies-content mt-10">
                            <a href="#">
                              <h4>Add photos to your add</h4>
                            </a>
                            <span className="mt-5 mb-30 d-block">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Fusce congue pharetra faucibus. Cras
                              consectetur quam id nisi consectetur, at vulputate
                              tellus molestie. Cras posuere ex nec ullamcorper
                              pulvinar. Aliquam sollicitudin cursus orci, vel
                              pretium nunc rutrum id.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-6 wow slideInDown animated">
                        <div className=" text-center agencies mt-30 py-40 px-30 bg-white hover-secondery-primary">
                          <a href="#">
                            <img src="images/checked.png" alt="image" />
                          </a>
                          <div className="agencies-content mt-10">
                            <a href="#">
                              <h4>See what is available</h4>
                            </a>
                            <span className="mt-5 mb-30 d-block">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Fusce congue pharetra faucibus. Cras
                              consectetur quam id nisi consectetur, at vulputate
                              tellus molestie. Cras posuere ex nec ullamcorper
                              pulvinar. Aliquam sollicitudin cursus orci, vel
                              pretium nunc rutrum id.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-6 wow slideInUp animated">
                        <div className=" text-center agencies mt-30 py-40 px-30 bg-white hover-secondery-primary">
                          <a href="#">
                            <img src="images/checked.png" alt="image" />
                          </a>
                          <div className="agencies-content mt-10">
                            <a href="#">
                              <h4>Contact Roomamates/Agents directly</h4>
                            </a>
                            <span className="mt-5 mb-30 d-block">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Fusce congue pharetra faucibus. Cras
                              consectetur quam id nisi consectetur, at vulputate
                              tellus molestie. Cras posuere ex nec ullamcorper
                              pulvinar. Aliquam sollicitudin cursus orci, vel
                              pretium nunc rutrum id.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-6 wow slideInLeft animated">
                        <div className=" text-center agencies mt-30 py-40 px-30 bg-white hover-secondery-primary">
                          <a href="#">
                            <img src="images/checked.png" alt="image" />
                          </a>
                          <div className="agencies-content mt-10">
                            <a href="#">
                              <h4>Arrange a viewing date</h4>
                            </a>
                            <span className="mt-5 mb-30 d-block">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Fusce congue pharetra faucibus. Cras
                              consectetur quam id nisi consectetur, at vulputate
                              tellus molestie. Cras posuere ex nec ullamcorper
                              pulvinar. Aliquam sollicitudin cursus orci, vel
                              pretium nunc rutrum id.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-6 wow slideInRight animated">
                        <div className=" text-center agencies mt-30 py-40 px-30 bg-white hover-secondery-primary">
                          <a href="#">
                            <img src="images/checked.png" alt="image" />
                          </a>
                          <div className="agencies-content mt-10">
                            <a href="#">
                              <h4>Transact in a safe way</h4>
                            </a>
                            <span className="mt-5 mb-30 d-block">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Fusce congue pharetra faucibus. Cras
                              consectetur quam id nisi consectetur, at vulputate
                              tellus molestie. Cras posuere ex nec ullamcorper
                              pulvinar. Aliquam sollicitudin cursus orci, vel
                              pretium nunc rutrum id.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 wow slideInUp animated">
                        <div className="mx-auto d-table"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-md-12 col-lg-12 wow slideInUp animated">
                        <div className="agencies mt-30 py-40 px-30 bg-white hover-secondery-primary">
                          <div className="row">
                            <div className="col-md-12 col-lg-4 d-flex align-items-center">
                              <a href="#">
                                <img src="images/partner/1.png" alt="image" />
                              </a>
                            </div>
                            <div className="col-md-12 col-lg-8">
                              <div className="agencies-content">
                                <a href="#">
                                  <h4>Homelax Builders</h4>
                                </a>
                                <span className="mt-5 mb-30 d-block">
                                  11-13 Whitehall, London SW1A 2DD, UK
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;
