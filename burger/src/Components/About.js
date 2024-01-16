import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/about.css";

export const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          corrupti. Ullam quam repudiandae illum, eaque commodi minus error,
          sint dolores inventore maxime vel et ab, beatae facilis distinctio
          impedit adipisci? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Tenetur labore ipsa quam aperiam alias praesentium excepturi,
          esse, tempora fugiat dolores, voluptatibus culpa! Incidunt iure
          accusamus consectetur repudiandae earum repellat aperiam. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Enim doloribus ratione
          illum placeat veritatis nostrum, sit sequi aut sunt dolores dicta
          porro dolore nisi aliquam, reiciendis eligendi assumenda. Accusamus,
          rerum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi, nihil quaerat aut amet quasi sed! Explicabo cum omnis
          fugiat deserunt iure dignissimos libero! Officia laboriosam illo
          consequatur natus! Ea, nihil.
        </p>
      </div>
    </div>
  );
};

export default About;
