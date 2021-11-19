import React from 'react';
import avatar from '../../images/avatar.svg';
import Type from './Type';
import Particle from './Particle'

function Header() {
  return (
    <section className="header" id="/">
      < Particle />
      <div className="header-left">
          <h1> Hi!
          <br />
          <span>I am <span className="span-color">Ryan.</span></span></h1>
          <div> <Type /> </div>
      </div>

      <div className="header-right">
        <img src={avatar} alt="avatar" />
      </div>
    </section>
    
  );
}

export default Header;