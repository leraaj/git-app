import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import useFetch from "../hook/useFetch";

const Home = () => {
  const API = `${process.env.REACT_APP_API_URL}/api/`;
  const URL = `${API}user/current-user`;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          setLoading(false);
          setError("Network response was not ok");
          console.error(response);
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
    console.log(data);
    console.error(error);
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
        <p>No data</p>
      )}
    </div>
  );
};

export default Home;
