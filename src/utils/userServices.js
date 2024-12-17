// Import the Axios library, which is used for making HTTP requests.
import axios from "axios";

// Define a function called fetchUser that makes an API request to fetch user data.
// This function uses Axios to send a GET request to the specified URL.
export const fetchUser = async () =>
  // The "await" keyword waits for the Axios GET request to complete.
  // The function returns the entire Axios response object, which includes the fetched data.
  await axios.get("https://jsonplaceholder.typicode.com/users/1");
