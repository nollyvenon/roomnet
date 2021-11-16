import React from "react";
import Header from "../../Header";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
// import { useHistory } from "react-router-dom";
const RoomSuccess = () => {
  // const history = useHistory();

  return (
    <div>
      <Header />
      <div>
        <div className="topPatch" style={{ height: "80px" }} />
        <div className="poststep pricing my-80">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 wow animated slideInUp">
                <div className="main-title w-75 mx-auto d-table text-center mb-30">
                  {/* <span className="small-title color-primary position-relative line-2-primary">
                    What We Do?
                  </span> */}
                  <h2 className="title mb-20 color-primary">
                    Thank You for Your Post
                  </h2>
                </div>
              </div>
              <div className="col-lg-8 text-center">
                <div className="submit-property ">
                  <SentimentVerySatisfiedIcon
                    size={80}
                    style={{ color: "#51AF33", fontSize: "150px" }}
                    fontSize="large"
                  />
                </div>

                <div>
                  <p className="my-40">
                    Your room advert was successfully posted ,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSuccess;
