import React from "react";
import BannerImage from "../assets/banner.png";
import "../styles/contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle iletişime geçin.</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen adınızı soyadınızı giriniz."
          />
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen e-mail adresinizi giriniz."
          />
          <label>Mesajınız</label>
          <textarea
            rows="6"
            name="message"
            placeholder="Lütfen mesajınızı yazınız."
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default Contact;
