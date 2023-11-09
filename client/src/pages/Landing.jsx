import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              Job <span>tracking</span> app
            </h1>
            <p>
              I'm baby yr etsy selfies tattooed seitan disrupt 8-bit godard. Chia fam readymade street art, swag lo-fi brunch schlitz roof party. Hashtag shabby chic gluten-free tote bag narwhal selfies knausgaard portland umami subway tile microdosing.
            </p>
            <Link to="/register" className="btn register-link">Register</Link>
            <Link to="/login" className="btn">Login / Demo User</Link>
          </div>
          <img src={main} alt="Job Hunt" className="img main-img" />
        </div>
    </Wrapper>
  );
};


export default Landing;
