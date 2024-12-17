import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUser } from "../../utils/userServices";

// Async action: Fetch user data
export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    const response = await fetchUser();
    return response.data;
  }
);
