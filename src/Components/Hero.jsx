import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: 765px;
  background-color: #495e57;
  overflow: hidden;
  position: relative;
`;
const Section = styled.div`
  width: 60%;
  height: 100%;
  position: absolute;
  z-index: 20;
  padding-left: 20%;
  padding-right: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  box-shadow: inset 0 -15px 50px #333333;

  /* Media query for smaller screens */
  @media only screen and (max-width: 1300px) {
    width: 80%;
    padding-left: 10%;
    padding-right: 10%;
  }

  /* Media query for even smaller screens */
  @media only screen and (max-width: 760px) {
    width: 90%;
    padding-left: 5%;
    padding-right: 5%;
  }

  h1 {
    color: #f4ce14;
    font-weight: 700;
    font-size: 64px;
    font-family: "Markazi Text", serif;
    margin: 0%;
  }
  h2 {
    color: #edefee;
    font-weight: 400;
    font-size: 24px;
    font-family: "Inter", serif;
    margin: 0%;
    letter-spacing: 5px;
    margin-bottom: 20px;
  }
  p {
    color: #edefee;
    font-weight: 400;
    font-size: 16px;
    font-family: "Inter", serif;
    margin: 0;
  }
  button {
    height: 50px;
    width: 200px;
    color: #333333;
    background-color: #f4ce14;
    font-family: "Karla";
    font-weight: 700;
    font-size: 18px;
    border: none;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
    transition: all 0.2s ease;
    transform: scale(1);

    a {
      text-decoration: none;
      color: #333333;
    }

    &:hover {
      box-shadow: 0px 5px 5px #333333;
      transform: scale(1.05) perspective(1px);
    }

    &:active {
      color: #edefee;
      background-color: #495e57;
    }
  }
`;

const Background = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-mask-size: 100% 765px;
  -webkit-mask-image: -webkit-gradient(
    linear,
    right top,
    left top,
    color-stop(0, rgba(0, 0, 0, 1)),
    color-stop(0.2, rgba(0, 0, 0, 0.6)),
    color-stop(0.5, rgba(0, 0, 0, 0.2)),
    color-stop(1, rgba(0, 0, 0, 0.1))
  );
  mask-size: 100% 765px;
  mask-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.6) 20%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.1) 100%
  );
`;

const Hero = () => {
  return (
    <Container>
      <Section>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <>
          <p>We are a family owned Mediterranean</p>
          <p>restaurant, focused on traditional recipes</p>
          <p>served with a modern twist.</p>
          <button>
            <Link to="/booking">Reserve a Table</Link>
          </button>
        </>
      </Section>
      <Background src="./images/restaurant.jpg" />
    </Container>
  );
};

export default Hero;
