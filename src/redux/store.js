// Import the configureStore function from Redux Toolkit, which simplifies the process
// of creating and managing a Redux store.
import { configureStore } from "@reduxjs/toolkit";

// Import the userReducer, which is a slice reducer managing the "user" state.
// This reducer is typically created using createSlice from Redux Toolkit.
import userReducer from "./slices/userSlice";

// Create the Redux store using configureStore. The configureStore function
// automatically sets up the store with good defaults, like the Redux DevTools
// extension and middleware such as Redux Thunk.
const store = configureStore({
  reducer: {
    // Define the state slice called "user" and associate it with the userReducer.
    // This means that the "user" part of the state will be managed by the logic
    // in userReducer.
    user: userReducer,
  },
});

// Export the store so it can be used throughout the application, such as in the
// provider component to make the Redux store available to the React app.
export default store;
