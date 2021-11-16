import React from "react";
import Header from "../Header";
import Footer from "../footer";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory, Link ,useParams} from "react-router-dom";

import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Moment from "react-moment";
const RecentNews = () => {
  const history=useHistory()
  const [loading, setLoading] = React.useState(false);
  const [homepageData, setHomePageData] = React.useState([]);
  const country = useSelector(({ CountryReducer }) => CountryReducer.country);
  

  const fetchHomepageModels = async () => {
    setLoading(true);
    return await axios
      .get(`/api/v1/BlogPostAllRecent/${country}`)
      .then((response) => {
        setLoading(false);
        return response;
      })
      .catch((err) => {
        setLoading(false);
        return err;
      });
  };

  React.useEffect(
    () =>
      fetchHomepageModels()
        .then((res) => {
          console.log(res);
          res.data.userData && setHomePageData(res.data.userData);
        })
        .catch((err) => {
          console.log(err);
        }),

    []
  );

  const mapBlosPost = () => {
    //console.log(homepageData)\

    return (
      homepageData &&
      homepageData.length > 0 &&
      homepageData.map((xxx, index) => {
        // console.log(xxx);
        return (
          <li>
            <h6>
              <Link
                className="post-title mb-15 "
                onClick={()=>history.replace}
                to={{pathname:`/blogDetails/${xxx._id}` ,state:xxx._id}}>
              
                {" "}
                {xxx.title}
              </Link>
            </h6>
            <div className="post-meta color-gray mt-5 f-14">
              <span className="d-inline-block">
                {" "}
                <Moment format="DD MMMM yyyy">{xxx.created_at}</Moment>
              </span>
              <Link
                className="post-title mb-15 "
                to={{pathname:`/blogDetails/${xxx._id}` ,state:xxx._id}}>
              
                {xxx.comments.length} Comments
              </Link>
            </div>
          </li>
        );
      })
    );
  };

  return (
    <div className="col-md-12 col-lg-4">
      <div className="blog-sidebar color-secondary-a">
        <div className="widget py-50 px-30 bg-white mt-50 shadow wow slideInDown animated">
          <h3 className="color-secondary line-bottom pb-15 mb-30">
            Recent News
          </h3>
          <ul className="widget-news">
            {homepageData.length > 0 ? (
              mapBlosPost()
            ) : loading ? (
              <h3 className="text-center">Loading...</h3>
            ) : (
              <h5>Empty</h5>
            )}
          </ul>
        </div>
      
      </div>
    </div>
  );
};

export const RecentNewss=RecentNews
const BlogDetails = (props) => {
  const [homepageData, setHomePageData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const currentUser = useSelector(({ user }) => user.currentUser);
 
  const token = currentUser && currentUser.token;
  const country = useSelector(({ CountryReducer }) => CountryReducer.country);
  const history = useHistory();

  const { state } = useParams();
 
  const [formResponse, setFormResponse] = React.useState({
    title: "",
    body: "",
    commentedBy: currentUser ? currentUser.user._id : null,
    comments_for_post: state,
  });

  const fetchHomepageModels = async () => {
    setLoading(true);
    return await axios
      .get(`/api/v1/BlogById/${state}`)
      .then((response) => {
        setLoading(false);
        return response;
      })
      .catch((err) => {
        setLoading(false);
        return err;
      });
  };
  const LikeAPost = async (postId) => {
    setLoading(true);
    return await axios
      .get(`/api/v1/LikeAPost/${postId}`, {
        headers: {
          Authorization: token,
        }
      })
      .then((response) => {
        setLoading(false);
        response.data.userData && setHomePageData(response.data.userData);
      })
      .catch((err) => {
        console.log(err)
        setLoading(false);
        return err;
      });
  };
  async function PostComment(e) {
    e.preventDefault();

    if (!formResponse.title && !formResponse.body) {
      setSuccess("");
      return setErrors("Both Subject and Comment Fields are required");
    }
    if (!formResponse.body) {
      setSuccess("");
      return setErrors("Comment fields is required");
    }
    if (!formResponse.title) {
      setSuccess("");
      return setErrors("Comment fields is required");
    }
    setErrors("");

    setLoading(true);
    return await axios
      .post(`/api/v1/postComment`, formResponse)
      .then((response) => {
        setLoading(false);
        setSuccess("Your comments Was successful");
        setFormResponse({ ...formResponse, title: "", body: "" });
        response.data.userData && setHomePageData(response.data.userData);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setErrors("An Error occured");
      });
  }
  function mapComments() {
    return homepageData &&
      homepageData.comments &&
      homepageData.comments.length > 0
      ? homepageData.comments.map((xxx) => {
          return (
            <div className="comment my-40 wow slideInDown animated">
              <div className="float-left text-center">
                <div className="user-image">
                  <img
                    src="/images/team/1.png"
                    className="rounded-circle"
                    alt="images"
                  />
                </div>
              </div>
              <div className="comment-content d-table">
                <div className="meta d-inline-block mb-15">
                  <h5 className="color-dark">
                    {xxx.commentedBy.firstName} {xxx.commentedBy.lastName}
                  </h5>
                  <div className="f-14 pt-5">
                    Posted On{" "}
                    <Moment format="DD MMMM yyyy">
                      {xxx.commentedBy.created_at}
                    </Moment>
                  </div>
                </div>
                <h5>{xxx.title}</h5>
               
                <p>{xxx.body}</p>
              </div>
            </div>
          );
        })
      : null;
  }
  React.useEffect(
    () =>
      fetchHomepageModels()
        .then((res) => {
          res.data.userData && setHomePageData(res.data.userData);
        })
        .catch((err) => {
          console.log(err);
        }),

        [props.match.params]
  );


  return (
    <>
      <Header />
      <div className="topPatch" style={{ height: "120px" }} />
      <div className="row justify-content-center mt-40 ">
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
          className=" text-center "
        >
          <div className="col-lg-7 col-8">
            <img className="nav-logo" src="/images/logo/logo2.png" alt="logo" />
          </div>

          <br />
          <h5>Let's Find you a roommate or room to rent</h5>
        </div>
      </div>
      {/* <section className="my-40 border-top-1-gray"> */}
      <section className="my-20 border-top-1-gray">
        <div className="container">
          {homepageData._id ? (
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="blog-item mt-md-50">
                  <div className="blog-img position-relative post-content wow slideInUp animated">
                    <img
                      src={homepageData.imagUri || "/images/blog/default.jpg"}
                      alt="Image"
                    />
                    <div className="date post-date float-left bg-gray mr-20 text-center color-secondary">
                      <div className="py-10">
                        <span className="d-block">
                          {" "}
                          <Moment format="DD">{homepageData.created_at}</Moment>
                        </span>{" "}
                        <Moment format="MMMM">{homepageData.created_at}</Moment>
                      </div>
                      <div className="post-love py-5 bg-primary">
                        <a onClick={LikeAPost.bind(this,homepageData._id)} >
                          <i className="fa fa-heart" aria-hidden="true" />{" "}
                          {homepageData.likes.length}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-info color-secondary-a">
                    <div className="post-meta icon-primary color-secondary-a pt-30 pb-15 wow slideInDown animated">
                      <ul className="post-info list-style-1 d-flex color-secondary">
                        <li>
                          <i className="fa fa-user" /> {homepageData.postedBy}
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-comments-o" />{" "}
                            {homepageData.comments.length}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="mb-20 color-secondary wow slideInUp animated">
                      {homepageData.title}
                    </h3>
                    <p>{homepageData.body}</p>
                    <blockquote style={{overflow:"hidden"}} className="bg-gray color-secondary text-center p-30 my-30 wow slideInDown animated">
                      <span className="mb-15 color-primary">
                        <i className="fa fa-quote-left" />
                      </span>
                      <p className="m-0">
                        <strong>
                          {String(homepageData.body).slice(0, 100)}
                        </strong>
                      </p>
                    </blockquote>

                    <div className="share bg-gray p-30 mt-30 wow slideInUp animated">
                      <div className="row">
                        <div className="col-lg-7 col-md-7">
                          <ul className="social-media-2 large color-secondary-a">
                            <li className="mr-10">Share:</li>
                            <li>
                              <a href="#">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-behance" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-linkedin" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* <div className="col-lg-5 col-md-5">
                  <div className="float-right mt-sm-30">
                    <ul className="pagination">
                      <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                      <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                  </div>
                </div> */}
                      </div>
                    </div>
                    <div className="comments-area mt-50">
                      <h3 className="color-secondary line-bottom pb-15 mb-30">
                        {homepageData.comments.length} Comment(s)
                      </h3>

                      {mapComments()}
                    </div>

                    {currentUser ? (
                      <div className="mt-50">
                        <h3 className="color-secondary line-bottom pb-15 mb-30 wow slideInUp animated">
                          Leave Your Comment
                        </h3>
                        <p>
                          Reply as <b>{currentUser.user.firstName}</b>
                        </p>
                        <br />
                        <form
                          onSubmit={PostComment}
                          className="form-rating wow slideInDown animated"
                        >
                          <div className="row">
                            <div className="form-group col-md-12 col-lg-12">
                              {success.length > 0 ? (
                                <p className="error-card alert-success">
                                  {success}
                                </p>
                              ) : errors.length > 0 ? (
                                <p className="error-card alert-danger">
                                  {errors}
                                </p>
                              ) : null}
                              <br />

                              <input
                                value={formResponse.title}
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,
                                    title: e.target.value,
                                  })
                                }
                                type="text"
                                className="form-control bg-gray"
                                placeholder="Subject"
                              />
                            </div>
                            <div className="form-group col-md-12 col-lg-12">
                              <textarea
                                value={formResponse.body}
                                onChange={(e) =>
                                  setFormResponse({
                                    ...formResponse,
                                    body: e.target.value,
                                  })
                                }
                                className="form-control bg-gray"
                                rows={7}
                                placeholder="Type Comments..."
                                defaultValue={""}
                              />
                            </div>
                            <div className="col-lg-7 text-left"></div>
                            <br />

                            <div className="col-lg-12">
                              <button
                                disabled={loading}
                                type="submit"
                                className="btn btn-secondary"
                              >
                                Post Comments
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    ) : (
                      <div className="row justify-content-center">
                        <div className="col-lg-6">
                          <small className="alert alert-danger">
                            <ErrorOutlineIcon /> You Must Be Logged In To
                            Comment on this topic
                          </small>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <RecentNews />
            </div>
          ) : null}
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default BlogDetails;
