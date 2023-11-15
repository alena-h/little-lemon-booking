import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';

const Nav = styled.nav`
    width: 60%;
    padding-left: 20%;
    padding-right: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #EDEFEE;

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
`
const Logo = styled.div`
    height: 70px;
    cursor: pointer;
    img {
        max-height: 100%;
        max-width: 100%;
    }
`
const List = styled.ul`
    display: flex;
    gap: 40px;
    list-style: none;
    padding: 0;`

const StyledLi = styled.li`
    cursor: pointer;
    
    a {
        text-decoration: none;
        color: #495E57;
        font-size: 18px;
        font-weight: 600;
        font-family: 'Karla', sans-serif;
        position: relative; /* Add this line */
        transition: color 0.2s, text-shadow 0.2s; /* Add this line */

        &:hover {
            text-shadow: 0.5px 0px 0.2px #495E57; /* Add a box-shadow to mimic bold effect */
        }
        &:after {
            content: "";
            display: block;
            width: 0;
            height: 2px;
            background-color: #495E57;
            transition: width 0.3s;
        }

        &:hover:after {
            width: 100%;
        }

        ${({ active }) =>
            active &&
            `
            &:after {
                content: "";
                display: block;
                width: 100%;
                height: 2px;
                background-color: #495E57;
            }
            `
        }
    }
`

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
const Image = styled.img`
    max-height: 20px; // Add this line to set the maximum height
    max-width: 20px; // Add this line to set the maximum width
`
const Account = styled.div`
    .account-img {
        transition: transform 0.2s; // Add this line for smooth hover effect
    }

    .hover-img {
        display: none;
    }

    .active-img {
        display: none;
    }

    &:hover {
        .account-img {
            display: none;
        }

        .hover-img {
            display: inline;
            transform: scale(1.1);
        }

        .active-img {
        display: none;
        }
    }

    &:active {
        .account-img {
            display: none;
        }

        .hover-img {
        display: none;
        }
        
        .active-img {
            display: inline;
            transform: scale(1.2);
        }
    } 
`
const Basket = styled.div`
    .basket-img {
        transition: transform 0.2s; // Add this line for smooth hover effect
    }

    .hover-img {
        display: none;
    }

    .active-img {
        display: none;
    }

    &:hover {
        .basket-img {
            display: none;
        }

        .hover-img {
            display: inline;
            transform: scale(1.1);
        }

        .active-img {
        display: none;
        }
    }

    &:active {
        .basket-img {
            display: none;
        }

        .hover-img {
        display: none;
        }
        
        .active-img {
            display: inline;
            transform: scale(1.2);
        }
    } 
`
const Navbar = ({ currentPage }) => {
    const location = useLocation();
    return (
       <Nav>
           <Logo>
                <Link to="/">
                    <img src="./images/logo.png" alt="Logo" />
                </Link>
           </Logo>
           <List>
               <StyledLi active={location.pathname === '/'}><Link to="/">Home</Link></StyledLi>
               <StyledLi active={location.pathname === '/menu'}><a href="/menu">Our Menu</a></StyledLi>
               <StyledLi active={location.pathname === '/booking'}><Link to="/booking">Reserve A Table</Link></StyledLi>
               <StyledLi active={location.pathname === '/order'}><a href="/order">Order Online</a></StyledLi>
           </List>
           <Icons>
                <Account>
                    <Image 
                        className="account-img"
                        src="./images/account.png"
                        alt="Account"
                    />
                    <Image 
                        className="hover-img"
                        src="./images/account_hover.png"
                        alt="Account (Hover)"
                    />
                    <Image 
                        className="active-img"
                        src="./images/account_click.png"
                        alt="Account (Active)"
                    />
                </Account>
               <Basket>
                    <Image 
                    className="basket-img"
                    src="./images/basket.png" 
                    alt="Basket"
                    />
                    <Image 
                        className="hover-img"
                        src="./images/basket_hover.png"
                        alt="Basket (Hover)"
                    />
                    <Image 
                        className="active-img"
                        src="./images/basket_click.png"
                        alt="Basket (Active)"
                    />
               </Basket>
           </Icons>
       </Nav>
    );
   }

   export default Navbar;