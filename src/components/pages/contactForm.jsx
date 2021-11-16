import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "../Header";
import axios from "axios";
import Footer from "../footer";

const ContactForm = () => {
  const [errors, setErrors] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const [formResponse, setFormResponse] = React.useState({
    firstName: "",
    message: "",
    lastName: "",
    company: "",
    mobileNumber: "",
    subject: "",
    email: "",
  });

  const validatePage = async () => {
    const {
      firstName,
      email,
      message,
      lastName,
      company,
      mobileNumber,
      subject,
    } = formResponse;
    const newError = new Array();
    if (!firstName) {
      newError.push("You did not provide your first name");
    }
    if (!message) {
      newError.push("Message fields can not be blank");
    }
    if (!lastName) {
      newError.push("You did not provide your last name");
    }
    if (!mobileNumber) {
      newError.push("You did not provide your phone number");
    }
    if (!subject) {
      newError.push("Subject fields is required");
    }
    if (!email) {
      newError.push("You did not provide your email");
    }

    return newError;
  };
  const handleNext = async (e) => {
    e.preventDefault();
    await validatePage().then(async (res) => {
      if (res.length > 0) {
        setErrors(res);
        window.scrollTo(0, 30);
      } else {
        setLoading(true);
        await axios
          .post(`/api/v1/contactForm`, formResponse)
          .then((response) => {
            setLoading(false);
            history.replace("/Contactsuccess");
          })
          .catch((err) => {
            setLoading(false);

            if (err.response && err.response.data.message) {
              setErrors([err.response.data.message]);
            } else {
              setErrors([
                "An error occured, make sure you have a working network",
              ]);
            }
            console.log(err);
          });
        // history.push("/Contactsuccess");
      }
    });
  };
  return (
   <>
   <Header/>
   <div className="topPatch" style={{ height: "120px" }} />
    <section className="booking-form bg-gray ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="bg-white px-30 py-40 shadow w-75 mx-auto">
              <form onSubmit={handleNext}>
                <h3 className="color-secondary line-bottom pb-15 mb-20 wow slideInDown animated">
                  Contact RoomNets
                </h3>
                <div className="row justify-content-center">
                  <div className="col-lg-7 text-left">
                    {errors.length > 0
                      ? errors.map((xxx) => (
                          <p className="error-card alert-danger">{xxx}</p>
                        ))
                      : null}
                    <div style={{ height: "10px" }} />
                  </div>
                </div>
                <div className="row">
                  <div
                    style={{ border: "1px solid #eee", margin: "20px" }}
                    className="col-3"
                  >
                    <h4>Need any help?</h4>
                    <p>call:0128763664</p>
                    <p>Email:info@roomnets.com</p>
                  </div>
                </div>
                <br />
                <br />
                <br />
                <div className="row">
                  <div className="form-group col-md-12 col-lg-6 wow slideInRight animated">
                    <input
                      type="text"
                      className="form-control bg-gray"
                      placeholder="First Name*"
                      value={formResponse.firstName}
                      onChange={(e) =>
                        setFormResponse({
                          ...formResponse,
                          firstName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group col-md-12 col-lg-6 wow slideInLeft animated">
                    <input
                      type="text"
                      className="form-control bg-gray"
                      placeholder="Last Name*"
                      value={formResponse.lastName}
                      onChange={(e) =>
                        setFormResponse({
                          ...formResponse,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group col-md-12 col-lg-6 wow slideInLeft animated">
                    <input
                      type="text"
                      className="form-control bg-gray"
                      placeholder="Your Company*"
                      value={formResponse.company}
                      onChange={(e) =>
                        setFormResponse({
                          ...formResponse,
                          company: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group col-md-12 col-lg-6 wow slideInRight animated">
                    <input
                      type="email"
                      className="form-control bg-gray"
                      placeholder="Email Address*"
                      value={formResponse.email}
                      onChange={(e) =>
                        setFormResponse({
                          ...formResponse,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group col-md-12 col-lg-6 wow slideInRight animated">
                    <input
                      type="number"
                      className="form-control bg-gray"
                      placeholder="Phone Number*"
                      value={formResponse.mobileNumber}
                      onChange={(e) =>
                        setFormResponse({
                          ...formResponse,
                          mobileNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group col-md-12 col-lg-6 wow slideInLeft animated">
                    <input
                      type="text"
                      className="form-control bg-gray"
                      placeholder="Subject*"
                      value={formResponse.subject}
                      onChange={(e) =>
                        setFormResponse({
                          ...formResponse,
                          subject: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="form-group col-md-12 col-lg-12 wow slideInUp animated">
                    <textarea
                      className="form-control bg-gray"
                      rows={7}
                      placeholder="Type Comments...(Optional)"
                      defaultValue={""}
                      value={formResponse.message}
                      onChange={(e) =>
                        setFormResponse({
                          ...formResponse,
                          message: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-lg-12">
                    <button
                      disabled={loading}
                      type="submit"
                      className="btn btn-secondary"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
   </>
  );
};

export default ContactForm;
