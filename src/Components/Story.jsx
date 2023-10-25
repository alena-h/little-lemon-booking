import styled from "styled-components";


const Container = styled.div`
    width: 60%;
    height: 55%;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    flex: 2;
    justify-content: space-between;
    box-shadow: inset 0 -15px 20px -10px #333333;
    padding-left: 20%;
    padding-right: 20%;
`;

const Left = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
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
    width: 60%;
    height: 90%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    img {
        max-height: 80%; /* Make the image responsive */
        width: auto; /* Maintain the image's aspect ratio */
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