import axios from "axios";

export const fetchUser = async () =>
  await axios.get("https://jsonplaceholder.typicode.com/users/1");
