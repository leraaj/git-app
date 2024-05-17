import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import useFetch from "../hook/useFetch";

const Home = () => {
  const API = `${process.env.REACT_APP_API_URL}`;
  const URL = `${API}/api/users`;
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        console.error(response);
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <section>Home</section>

      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.fullName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
