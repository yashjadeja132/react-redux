import React from "react";
import useFetchUserData from "./hooks/userHooks/useFetchUserData";

const App = () => {
  const { user, loading, error } = useFetchUserData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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

export default App;
