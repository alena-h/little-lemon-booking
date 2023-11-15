import styled from "styled-components";


const Container = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    /* Media query for smaller screens */
    @media only screen and (max-width: 1300px) {
    justify-content: center;
    }
`;

const Left = styled.div`
    width: 40%;
    min-width: 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;

    /* Media query for smaller screens */
    @media only screen and (max-width: 1300px) {
    width: 100%;
    }

    h1 {
        color: #F4CE14;
        font-weight: 700;
        font-size: 64px;
        font-family: 'Markazi Text', serif;
        margin: 0%;
    }
    h2 {
        color: #EDEFEE;
        font-weight: 400;
        font-size: 24px;
        font-family: 'Inter', serif;
        margin: 0%;
        letter-spacing: 5px;
        margin-bottom: 20px;
    }
    p {
        color: #EDEFEE;
        font-weight: 400;
        font-size: 16px;
        font-family: 'Inter', serif;
        margin: 0;
    }
    button{
        background-color: transparent;
        text-decoration:underline;
        color: #EDEFEE;
        font-weight: 600;
        font-size: 18px;
        font-family: 'Karla', sans-serif;
        cursor: pointer;
        border: none;
        padding: 0;
        margin-top: 20px;
    }
`;
const Right = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 100px;
    img {
        max-width: 600px;
        min-width: 350px;
    }

     /* Media query for smaller screens */
     @media only screen and (max-width: 1300px) {
    width: 100%;
    justify-content: center;
    }
`;

const Story = () => {
    return (
        <Container>
            <Left>
                <h1>Little Lemon</h1>
                <h2>Our Story</h2>
                <p>We are more than just a restaurant;
                    we are a family-owned establishment
                    with a passion for sharing the authentic
                    flavors of the Mediterranean with our
                    community. Our culinary journey began
                    generations ago, with recipes passed 
                    down through time, cherished for their
                    tradition and taste. Today, we continue 
                    this legacy, infusing every dish with the 
                    love and care that only a family can provide.
                </p>
                <button>Learn More</button>
            </Left>
            <Right>
                <img src="./images/story.png" alt=""/>
            </Right>
        </Container>
    );
   }
   export default Story;