import * as Action_types from "./actiontypes";

const init_state = { currentUser: null };
export const UserReducers = (state = init_state, action) => {
  if (action.type === Action_types.LOGINSUCCESS) {
    return { ...state, currentUser: action.payload };
  } else {
    if (action.type === Action_types.LOGINOUTUSER) {
      return { ...state, currentUser: null };
    }
    if (action.type === Action_types.SYNCUSERDATA) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          user: action.payload.user,
        },
      };
    } else {
      return state;
    }
  }
};
const PostRoomInitState = {
  add_type:"",
  paid_add: "",
  no_rooms: 0,
  no_toilets: 0,

  Building_type: "",
  rent: 0,
  rent_method: "",
  no_occupants: 0,
  email: "",
  i_am: "",
  building_location: "",
  street_name: "",
  rooms_avail_date: "",
  living_rooms: "",
  furnished_rooms: "",
  broker_agent_fee: "",
  rooms_size: "",
  minimum_stay: "",
  maximum_stay: "",
  amenities_swim: "",
  amenities_internet: "",
  amenities_private_toilets: "",
  amenities_play_ground: "",
  amenities_parking_space: "",
  amenities_entry_disabled: "",
  amenities_balcony: "",
  amenities_others: "",
  existing_room_mates: {
    smoker: "",
    no_males: 0,
    no_femalse: 0,
    pets: "",
    language_spoken: "",
    sexual_orientation: "",
    nationality: "",
  },
  new_room_mate: {
    smoker: "",
    language_spoken: "",
    sexual_orientation: "",
    nationality: "",
    occupation: "",
    pets: "",
    mimimum_age: "",
    maximum_age: "",
    couples_welcomed: "",
  },
  mobile_number: "",
  firstname: "",
  lastname: "",
  advert_title: "",
  advert_description: "",
};
export const PostRommsAddReducer = (state = PostRoomInitState, action) => {
  if (action.type === Action_types.SETPOSTROOMPROCESS) {
    return { ...state, ...action.payload };
  } else return state;
};

const PostFlatsInitState = {
  add_type:"",
  paid_add: "",
  no_rooms: 0,
  no_toilets: 0,

  Building_type: "",
  rent: 0,
  rent_method: "",
  no_occupants: 0,
  email: "",
  i_am: "",
  building_location: "",
  street_name: "",
  rooms_avail_date: "",
  living_rooms: "",
  furnished_rooms: "",
  broker_agent_fee: "",
  rooms_size: "",
  minimum_stay: "",
  maximum_stay: "",
  amenities_swim: "",
  amenities_internet: "",
  amenities_private_toilets: "",
  amenities_play_ground: "",
  amenities_parking_space: "",
  amenities_entry_disabled: "",
  amenities_balcony: "",
  amenities_others: "",
  // existing_room_mates: {
  //   smoker: "",
  //   no_males: 0,
  //   no_femalse: 0,
  //   pets: "",
  //   language_spoken: "",
  //   sexual_orientation: "",
  //   nationality: "",
  // },
  new_room_mate: {
    smoker: "",
    language_spoken: "",
    sexual_orientation: "",
    nationality: "",
    occupation: "",
    pets: "",
    mimimum_age: "",
    maximum_age: "",
    couples_welcomed: "",
  },
  mobile_number: "",
  firstname: "",
  lastname: "",
  advert_title: "",
  advert_description: "",
};

export const PostFlatReducer = (state = PostFlatsInitState, action) => {
  if (action.type === Action_types.SETPOSTFLATPROCESS) {
    return { ...state, ...action.payload };
  } else return state;
};

const DefaultRegion = { country: "" };

export const CountryReducer = (state = DefaultRegion, action) => {
  if (action.type === Action_types.SETCOUNTRY) {
    console.log(action.payload);
    return { country: action.payload };
  }
  return state;
};

const needRoomInitState = {
  no_femalse: "",
  no_males: "",
  searching_for: "",
  interested_shared_room: "",
  room_size: "",
  email: "",
  smoker: "",
  prefered_city: "",
  pets: "",
  language_spoken: "",
  nationality: "",
  sexual_orientation: "",
  occupation: "",
  age_range: "",
  amenities_swim: false,
  amenities_internet: false,
  amenities_private_toilets: false,
  amenities_play_ground: false,
  amenities_parking_space: false,
  amenities_entry_disabled: false,
  amenities_balcony: false,
  amenities_others: false,
  new_room_mate: {
    smoker: "",
    language_spoken: "",
    sexual_orientation: "",
    nationality: "",
    occupation: "",
    pets: "",
    gender: "",
    mimimum_age: "",
    maximum_age: "",
    couples_welcomed: "",
  },
};

export const NeedRoomReducer = (state = needRoomInitState, action) => {
  if (action.type === Action_types.SETNEEDROOMROCESS) {
    return {
      ...state,
      ...action.payload,
    };
  } else {
    return state;
  }
};
