import React from "react";
import { Link } from "react-router-dom";
const BrowseCards = (props) => {
  const { data } = props;
  return (
    <div
      style={{ width: "280px" }}
      className="mx-5 bg-white mt-50 shadow py-40 px-30 wow slideInUp animated  browse-cards"
    >
      <ul>
        {data.map((xxx) => (
          <li className="border-bottom-1-gray pb-15">
            <div className="agencies hover-secondery-primary">
              <div className="agencies-content">
                <h5>{xxx}</h5>
                <Link to={{ pathname: "/Browse-rooms-list-apart", state: xxx }}>
                  <span className="mt-5 d-block color-gray f-14">
                    Flats in {xxx}
                  </span>
                </Link>
                <Link to={{ pathname: "/Browse-rooms-list-rooms", state: xxx }}>
                  <span className="mt-5 d-block color-gray f-14">
                    Rooms/Roommates in {xxx}
                  </span>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseCards;
