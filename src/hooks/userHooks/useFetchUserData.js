// Import necessary hooks from React Redux:
// - useDispatch: Allows you to dispatch actions to the Redux store.
// - useSelector: Allows you to extract state from the Redux store.
import { useDispatch, useSelector } from "react-redux";

// Import the fetchUserData action, which is likely an asynchronous thunk action
// responsible for fetching user data.
import { fetchUserData } from "../../redux/actions/userActions";

// Import the useEffect hook from React to perform side effects in the component.
import { useEffect } from "react";

// Define a custom hook called useFetchUserData that abstracts the logic
// for fetching user data and providing the state.
const useFetchUserData = () => {
  // Get the dispatch function from useDispatch to dispatch Redux actions.
  const dispatch = useDispatch();

  // Extract user-related state (user, loading, and error) from the Redux store using useSelector.
  // This assumes that the Redux state has a "user" slice with these properties.
  const { user, loading, error } = useSelector((state) => state.user);

  // Use the useEffect hook to dispatch the fetchUserData action when the hook is used.
  // This ensures that the data is fetched only if it hasn’t been loaded yet,
  // and there is no current loading or error state.
  useEffect(() => {
    if (!user && !loading && !error) {
      dispatch(fetchUserData()); // Dispatch the fetchUserData action to load user data.
    }
  }, [dispatch, user, loading, error]); // Dependencies: re-run if any of these values change.

  // Return the current state (user, loading, error) to be consumed by components using this hook.
  return { user, loading, error };
};

// Export the custom hook to be used in components that need user data.
export default useFetchUserData;
