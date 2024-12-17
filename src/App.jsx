// Import React for creating the functional component.
import React from "react";

// Import a custom hook that fetches user data and provides user state, loading, and error information.
import useFetchUserData from "./hooks/userHooks/useFetchUserData";

// Define the main App component.
const App = () => {
  // Destructure the user, loading, and error states from the custom hook useFetchUserData.
  // This hook is expected to encapsulate the logic for fetching user data and managing state.
  const { user, loading, error } = useFetchUserData();

  // If data is loading, display a loading message to the user.
  if (loading) return <p>Loading...</p>;

  // If there is an error, display the error message to the user.
  if (error) return <p>Error: {error}</p>;

  // Render the main content of the app.
  // If the user data is available, display the user details.
  // Otherwise, show a message indicating no data is available.
  return (
    <div>
      <h1>User Data</h1>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

// Export the App component to be used in the main application entry point.
export default App;
