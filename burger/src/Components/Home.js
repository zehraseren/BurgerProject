import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/home.css";

export const Home = () => {
  return (
    <div
      className="mainPage"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="order">
        <Link to="/menu">
          <button>Sipariş ver</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
