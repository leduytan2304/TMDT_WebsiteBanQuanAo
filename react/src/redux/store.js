import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import thunkMiddleware from 'redux-thunk';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  product: productReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,


  middleware:[thunkMiddleware]
});

export let persistor = persistStore(store);

// const store = configureStore({
//   reducer: {
//     product: productReducer,
//     user: userReducer,
//     auth: authReducer,
//   },
// });

// export default store;
