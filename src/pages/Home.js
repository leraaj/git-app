import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import useFetch from "../hook/useFetch";

const Home = () => {
  const API = `${process.env.REACT_APP_API_URL}/api/`;
  const URL = `${API}user/current-user`;
  const { data, loading, error, refresh } = useFetch(`${API}users`);
  useEffect(() => {
    if (data) {
      console.log(data);
    }
    if (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <section>Home</section>
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.fullName}</li>
          ))}
        </ul>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default Home;
