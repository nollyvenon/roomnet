import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../footer";
import axios from "axios";
import { useSelector } from "react-redux";
import Moment from "react-moment";

const Blogs = () => {
  const [homepageData, setHomePageData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const country = useSelector(({ CountryReducer }) => CountryReducer.country);
  const [pagination, setPagination] = React.useState({ total: 0, limit: "" });
  const [pageNo, setpageNo] = React.useState(0);

  const fetchHomepageModels = async () => {
    setLoading(true);
    return await axios
      .get(`/api/v1/BlogPostAll/${country}`)
      .then((response) => {
        setLoading(false);
        response.data.userData &&
        response.data.userData.length > 0 &&
        setPagination({
          ...pagination,
          limit: response.data.limit,
          total: response.data.total,
        });
      response.data.userData.length > 0 && setpageNo(pageNo + 1);
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
        return (
          <div
            style={{ whiteSpace: "wrap", overflow: "hidden" }}
            className="col-md-12 col-lg-4 wow slideInUp animated"
          >
            <div className="post-thumbnail hover-secondery-primary">
              <div className="post-img overflow-hidden">
                <img
                  src={xxx.imagUri || "/images/blog/default.jpg"}
                  alt="Image"
                />
              </div>
              <div className="post-meta icon-primary color-secondary-a px-20 py-10 bg-gray">
                <ul className="post-info list-style-1 d-flex color-secondary">
                  <li>
                    <i className="fa fa-user" /> {xxx.postedBy}
                  </li>
                  <li>
                  <Link className="post-title mb-15 "  to={{pathname:`/blogDetails/${xxx._id}` ,state:xxx._id}}>
                  
                      <i className="fa fa-comments-o" />
                      {xxx.comments.length}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="post-content mt-20 color-secondary color-secondary-a">
                <div className="post-date w-25 float-left bg-gray mr-20 text-center">
                  <div className="py-10">
                    <span className="d-block">
                      {" "}
                      <Moment format="DD">{xxx.created_at}</Moment>
                    </span>{" "}
                    <Moment format="MMMM">{xxx.created_at}</Moment>
                  </div>
                  <div className="post-love py-5 bg-primary">
                  <Link className="post-title mb-15 " to={{pathname:`/blogDetails/${xxx._id}` ,state:xxx._id}}>
                   
                      <i className="fa fa-heart" aria-hidden="true" />{" "}
                      {xxx.likes.length}
                    </Link>
                  </div>
                </div>
                <div className="text-area d-table">
                  <Link className="post-title mb-15 "  to={{pathname:`/blogDetails/${xxx._id}` ,state:xxx._id}}>
                    <h5>{xxx.title}</h5>
                  </Link>
                  <p>{String(xxx.body).slice(0, 100)}</p>
                  <Link className="btn-more mt-15"   to={{pathname:`/blogDetails/${xxx._id}` ,state:xxx._id}}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })
    );
  };


  const handleNextPage = () => {
    setLoading(true)
    setHomePageData([]);
    setTimeout(async() => {
      fetchHomepageModels()
        .then((res) => {
          console.log(res);
          res.data.userData && setHomePageData(res.data.userData);
        })
        .catch((err) => {
          console.log(err);
        })
    }, 1000);

  };
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
      <section className="my-40 border-top-1-gray">
        <div className="container">
          <div className="row">
            {homepageData.length > 0 ? (
              mapBlosPost()
            ) : loading ? (
              <h3 className="text-center">Loading...</h3>
            ) : (
              <h5>:-) Empty, No post yet !</h5>
            )}

            <div className="col-lg-12 wow slideInDown animated">
              <div className="mx-auto d-table">
                <ul className="pagination mt-50">
               
                  <li className="page-item">
                  {pagination.limit * pageNo < pagination.total ? (
                      <div>
                        <button onClick={handleNextPage} className="btn page-link">
                          Next Page
                        </button>
                      </div>
                    ) : null}
                      </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Blogs;
