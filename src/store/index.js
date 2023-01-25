import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter'
import authReducer from './auth'

// Configuration object with a reducer object that holds our slice reducers
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
});

export default store;