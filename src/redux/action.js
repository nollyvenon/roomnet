import * as acttiontypes from "./actiontypes";
export const LOGINSUCCESS = (response) => {
  return {
    type: acttiontypes.LOGINSUCCESS,
    payload: response,
  };
};

export const LOGOUTUSER = () => {
  return {
    type: acttiontypes.LOGINOUTUSER,
  };
};
export const SYNCUSERDATA = (userData) => {
  return {
    type: acttiontypes.SYNCUSERDATA,
    payload: userData,
  };
};

export const SETPOSTROOMPROCESS = (data) => {
  return {
    type: acttiontypes.SETPOSTROOMPROCESS,
    payload:data
  }
}
export const SETPOSTFLATPROCESS = (data) => {
  return {
    type: acttiontypes.SETPOSTFLATPROCESS,
    payload:data
  }
}
export const SETNEEDROOMROCESS = (data) => {
  return {
    type: acttiontypes.SETNEEDROOMROCESS,
    payload:data
  }
}
export const SETCOUNTRY = (data) => {
  return {
    type: acttiontypes.SETCOUNTRY,
    payload:data
  }
}

