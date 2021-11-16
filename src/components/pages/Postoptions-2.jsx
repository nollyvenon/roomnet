import React from "react";
import Header from "../Header";
import {useDispatch} from "react-redux"
import { SETPOSTFLATPROCESS } from "../../redux/action";
import { Link, useHistory } from "react-router-dom";
const PostOptions2 = () => {
  const history = useHistory();
  const dispatch=useDispatch()
  const HandleSelection = (type) => {
    history.push({ pathname: "process-apart-advert1" });
    dispatch(SETPOSTFLATPROCESS({ add_type:type}))
  };

  return (
    <div>
      <Header />
      <div>
        <section className="pricing my-80">
          <div className="container">
            <div className="row justify-content-center">
              <div
                onClick={HandleSelection.bind(this, "FREE")}
                className="postsoptions col-lg-4 wow slideInRight animated"
              >
                <div className="pricing-item bg-secondary color-gray-light text-center py-40 px-30">
                  <h2 className="mb-30 color-white">Free ads</h2>
                  <h4 className="inner-title color-white py-15 bg-primary">
                    Good
                  </h4>
                  <ul className="my-30 pricing-list">
                    <li>10 Property Listings</li>
                    <li>6 Months Availability</li>
                    <li>One User Access</li>
                    <li>Feature Properties</li>
                    <li>Limited Support</li>
                    <li>- - - - -</li>
                    <li>- - - - -</li>
                  </ul>
                  <Link href="/process-advert1" className="btn btn-white">
                    Post Add Now
                  </Link>
                </div>
              </div>
              <div
                onClick={HandleSelection.bind(this, "PREMIUM")}
                className="postsoptions col-lg-4 wow slideInUp animated"
              >
                <div className="pricing-item bg-primary color-white text-center py-40 px-30 mt-md-30">
                  <h2 className="mb-30 color-white">Premium ads</h2>
                  <h4 className="inner-title color-primary py-15 bg-white">
                    Better
                  </h4>
                  <ul className="my-30 pricing-list">
                    <li>30 Property Listings</li>
                    <li>1 Year Availability</li>
                    <li>5 User Access</li>
                    <li>Feature Properties</li>
                    <li>Top Listing On Search</li>
                    <li>Live Support 24/7 Days</li>
                    <li>- - - - -</li>
                  </ul>
                  <Link href="/process-advert1" className="btn btn-white">
                    Post Add Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostOptions2;
