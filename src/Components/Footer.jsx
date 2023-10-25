import styled from "styled-components";

const Container = styled.div`
    width: 60%;
    padding-left: 20%;
    padding-right: 20%;
    color: #EDEFEE;
    height: 320px;
    display: flex;
    flex: 4;
    gap: 40px;
    justify-content: space-between;
    align-items: center;
`;
const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
    img {
      height: 80%;
      width: auto;
    }
`;

const Column = styled.div`
height: 80%;
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
            <li>Reservations</li>
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