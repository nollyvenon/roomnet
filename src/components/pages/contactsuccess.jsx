import React from "react";

import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const ContactSuccess = () => {
  return (
    <section className="booking-form bg-gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 ">
            <div className="bg-white px-30 py-40 shadow w-75 mx-auto">
              <div className=" text-center">
                <CheckCircleOutlineIcon
                  style={{ color: "#51AF33", fontSize: "100px" }}
                  fontSize="large"
                />
                <div style={{ height: "20px" }} />
                <h5>
                  Congratulations.
                  <br /> Your message was sent
                </h5>
                <div style={{ height: "30px" }} />
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  et arcu nibh.
                  <br /> Vestibulum mi dolor, maximus vitae ex a, consequat.
                </small>
                <div style={{ height: "40px" }} />
                <a href="/">
                  <button className="btn btn-primary">Go to home</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    //   <main className="successPurchase">
    //     <div className="container">
    //       <div className="row justify-content-center">
    //         <div className="col-10 text-center">
    //           <CheckCircleOutlineIcon
    //             style={{ color: "#51AF33", fontSize: "100px" }}
    //             fontSize="large"
    //           />
    //           <div style={{ height: "20px" }} />
    //           <h5>
    //             Congratulations.
    //             <br /> You have successfully purchased a policy.
    //           </h5>
    //           <div style={{ height: "30px" }} />
    //           <small>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
    //             et arcu nibh.
    //             <br /> Vestibulum mi dolor, maximus vitae ex a, consequat.
    //           </small>
    //           <div style={{ height: "40px" }} />
    //           <button className="btn1">Go to Dashboard</button>
    //         </div>

    //       </div>
    //     </div>
    //   </main>
    // </div>
  );
};

export default ContactSuccess;
