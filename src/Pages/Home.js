import React from "react";
import About from "../Components/About";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <About />
      <button onClick={() => navigate(`/product/${"shirts"}`)}>
        Go to Product Page
      </button>
    </>
  );
}

export default Home;
