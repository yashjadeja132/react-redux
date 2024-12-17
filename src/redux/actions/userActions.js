// Import the createAsyncThunk function from Redux Toolkit, which simplifies the process
// of creating asynchronous actions (thunks) with built-in support for pending, fulfilled, and rejected states.
import { createAsyncThunk } from "@reduxjs/toolkit";

// Import a utility function fetchUser, which is likely a service function that makes
// an API call to fetch user data and returns a response.
import { fetchUser } from "../../utils/userServices";

// Define an async thunk for fetching user data using createAsyncThunk.
// The first argument is a string action type, which will be used to identify this action
// in Redux (e.g., "user/fetchUserData").
// The second argument is a function that performs the async operation and returns the result.
export const fetchUserData = createAsyncThunk(
  "user/fetchUserData", // Action type: Identifies this thunk in Redux.

  // Async function to fetch user data.
  async () => {
    // Call the fetchUser utility function to make an API request.
    const response = await fetchUser();

    // Return the data from the API response. Redux Toolkit will automatically
    // handle this data and pass it to the "fulfilled" action payload.
    return response.data;
  }
);
