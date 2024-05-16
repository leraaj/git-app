import React from "react";
import Navbar from "../components/Navbar";
import useFetch from "../hook/useFetch";

const Home = () => {
  const API = `${process.env.REACT_APP_API_URL}/api/`;
  const URL = `${API}user/current-user`;
  const { data, loading, refresh } = useFetch(`${API}users`);
  console.log(data);
  return (
    <div>
      <Navbar />
      <section>Home</section>
      {loading ? <p>Loading...</p> : !data ? <p>Error</p> : ""}
      {data && (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.fullName}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
