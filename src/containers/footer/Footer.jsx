import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you wish to learn more ?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <a href="https://github.com/AyushSoni-git/AuthenticateX---Web">Visit our Github Repo</a>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <h1 className="logo">AuthenticateX</h1>
        <p><br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>AuthenticateX</p>
        <p>authenticatex@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p><b>@2022 AuthenticateX. All rights reserved.</b></p>
    </div>
  </div>
);

export default Footer;
