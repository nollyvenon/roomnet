import React from "react";
import Autocomplete from "react-google-autocomplete";
import { useSelector } from "react-redux";
const AutoCompletePlaces = (props) => {
  const country = useSelector(({ CountryReducer }) => CountryReducer.country);
  return (
    <Autocomplete
      placeholder="Enter location"
      apiKey={`${process.env.REACT_APP_API_KEY}`}
      //   style={{
      //     width: "100%",
      //     color: "grey",
      //     borderWidth: "1px",
      //     borderColor: "silver",
      //     height: "35px",
      //   }}
      onChange={props.onChange || null}
      value={props.value || null}
      className={props.className}
      onPlaceSelected={(place) => props.handleplaces(place)}
      types={["geocode"]}
      //           we can use different google types example replace item in array-->  types={["geocode"]}--->
      // geocode
      // establishment
      // address
      // (regions)
      // (cities)
      // See Place

      componentRestrictions={{ country: country }}
    />
  );
};

export default AutoCompletePlaces;
