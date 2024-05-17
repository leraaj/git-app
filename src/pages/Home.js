// src/UsersList.js
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const URL = "https://darkshots-server.onrender.com/api/users";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.fullName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
