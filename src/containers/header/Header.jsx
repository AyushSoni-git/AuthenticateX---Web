import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">AuthenticateX <br />Let&apos;s Authenticate.</h1>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <a type="button" href="mailto:authenticatexcontact@gmail.com">Get Started</a>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
