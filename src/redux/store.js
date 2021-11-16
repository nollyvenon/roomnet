import { createStore, combineReducers } from "redux";
import {
  UserReducers,
  PostRommsAddReducer,
  PostFlatReducer,
  CountryReducer,
  NeedRoomReducer

} from "./reducer";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for our  web app

const rootReducer = combineReducers({
  user: UserReducers,
  PostRommsAddReducer: PostRommsAddReducer,
  PostFlatReducer: PostFlatReducer,
  CountryReducer: CountryReducer,
  NeedRoomReducer:NeedRoomReducer

});
const authPersistConfig = {
  key: "rootRooms",
  storage: storage,
  whitelist: [
    "user",
    "PostRommsAddReducer",
    "PostFlatReducer",
    "CountryReducer",
   "NeedRoomReducer"
  ],
};
const persistedReducer = persistReducer(authPersistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
