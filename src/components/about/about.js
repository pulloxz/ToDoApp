import React from 'react';
import './about.styles.css';
import aboutimg from './../../assets/aboutimg.svg'

const AboutComponent = () => {

  const AboutImg = <img src={aboutimg} alt='about img'></img>
  return (
    <div className='about-container'>
      <h1>Welcome.</h1>
      <p>This is my first challenge with HTML & CSS.</p>
      <div className='about-image'>
        {AboutImg}
      </div>
      <footer>
      <p style={{ textAlign: 'center' }}>This app created by <a href='###'>Aon2023</a></p>
      </footer>
    </div>
  );
};

export default AboutComponent;
