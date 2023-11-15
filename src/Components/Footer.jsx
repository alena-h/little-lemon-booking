import styled from "styled-components";
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 60%;
    margin-top: 30px;
    padding-left: 20%;
    padding-right: 20%;
    display: flex;
    color: #EDEFEE;
    min-height: 300px;
    display: flex;
    gap: 25px;
    flex: 4;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;

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
`;
const Logo = styled.div`
  height: 100%;
  display: flex;
    img {
      padding: 5px;
      width: auto;
      max-height: 200px;
      min-height: 70px;
    }
`;

const Column = styled.div`
height: 100%;
display: flex;
flex-direction: column;
  h2 {
    color: #495E57;
    font-weight: 600;
    font-size: 18px;
    font-family: 'Karla', sans-serif;
    margin-bottom: 15px;
  }

  ul {
    color: #495E57;
    list-style: none;
    padding: 0;
  }

  a{
    text-decoration: none;
    color: #495E57;
  }

  li {
    cursor: pointer;
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 16px;
    font-family: 'Karla', sans-serif;
  }
`;

const Footer = () => {
    return (
      <Container>
        <Logo>
          <img src="./images/logo2.png" alt="" />
        </Logo>
        <Column>
          <h2>Little Lemon</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li><Link to="/booking">Reservations</Link></li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </Column>
        <Column>
          <h2>Follow Us</h2>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </Column>
        <Column>
          <h2>Contacts</h2>
          <ul>
            <li>littlelemon@mail.com</li>
            <li>22X XXX XXX</li>
            <li>Street Something 23, Chicago</li>
          </ul>
        </Column>
      </Container>
    );
   }
   
   export default Footer;