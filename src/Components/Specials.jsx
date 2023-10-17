import styled from "styled-components";

const Bob = styled.div`
    width: 100%;
    height: 700px;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: mandatory;
`
const Container = styled.div`
    width: 200%;
    height: 700px;
    background-color: #495E57;
    display: flex;
`
const InnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    overflow-x: hidden;
    scroll-snap-align: start;
    position: relative;
`
const Header = styled.div`
    width: 100%;
    position: absolute;
    z-index: 50;
    display: flex;
    justify-content: center;
    
    h1 {
        color: #EDEFEE;
        font-weight: 700;
        font-size: 64px;
        font-family: 'Markazi Text', serif;
        margin: 40px;
    }
`

const Buttons = styled.div`
    display: flex;
    gap: 20px;
`
const Button = styled.button`

    &.btn_p {
        background-color: #F4CE14;
    }

    &.btn_s {
        background-color: #EDEFEE;
    }
    height: 50px;
    width: 200px;
    color: #333333;
    font-family: 'Karla';
    font-weight: 700;
    font-size: 18px;
    border: none;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
    transition: all 0.2s ease;
    transform: scale(1);

        &:hover {
            box-shadow: 0px 5px 5px #333333;
            transform: scale(1.05) perspective(1px);
            }

        &:active {
        color: #EDEFEE;
        background-color: #495E57;
        }
`
const Section = styled.div`
    width: 30%;
    height: 100%;
    position: absolute;
    z-index: 20;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 15%;

    h1 {
        color: #EDEFEE;
        font-weight: 800;
        font-size: 20px;
        font-family: 'Karla', sans-serif;
        margin: 0%;
    }

    p {
        color: #EDEFEE;
        font-weight: 400;
        font-size: 16px;
        font-family: 'Inter', serif;
        margin-top: 15px;
    }
`
const Background = styled.img`
    width: 100%; /* Make sure the image takes up the full width of the container */
    height: 100%; /* Make sure the image takes up the full height of the container */
    object-fit: cover;
    -webkit-mask-size: 100%;
    -webkit-mask-image: -webkit-gradient(linear, left top, right top, 
    color-stop(0.00,  rgba(0,0,0,1)),
    color-stop(0.2,  rgba(0,0,0,0.6)),
    color-stop(0.5,  rgba(0,0,0,0.2)),
    color-stop(1.00,  rgba(0,0,0,0.1))
    );
`
const Specials = () => {
    return (
        <Bob>
                <Container>
            <InnerContainer>
                <Header>
                    <h1>This weeks specials!</h1>
                </Header>
                <Section>
                    <h1>Margherita Pizza</h1>
                    <p>Indulge in pizza perfection with our Margherita!
                    Delicate, thin crust adorned with vibrant tomato sauce, 
                    velvety mozzarella, and aromatic basil leaves, all kissed by 
                    a drizzle of extra-virgin olive oil. Each bite is a symphony of 
                    flavors that pays homage to Italy's culinary heritage.
                    Simple, yet sublime – Margherita pizza is a timeless classic 
                    that will satisfy your cravings in every delightful slice.
                    </p>
                    <Buttons>
                        <Button className="btn_p">Order Now!</Button>
                        <Button className="btn_s">Our Menu</Button>
                    </Buttons>
                </Section>
                <Background src="./images/pizza.jpg"/>
            </InnerContainer>
            <InnerContainer>
                <Header>
                    <h1>This weeks specials!</h1>
                </Header>
                <Section>
                    <h1>Porcini Mushroom Risotto</h1>
                    <p>Savor the rich and earthy elegance of our Porcini Mushroom Risotto.
                     Each creamy spoonful captures the essence of Italian comfort food, 
                     as plump Arborio rice melds with a decadent blend of sautéed Porcini 
                     mushrooms, shallots, and garlic. A splash of white wine and a generous 
                     sprinkle of Parmesan cheese elevate this dish to gourmet heights, 
                     making every bite a luxurious journey through flavor and texture.
                    </p>
                    <Buttons>
                        <Button className="btn_p">Order Now!</Button>
                        <Button className="btn_s">Our Menu</Button>
                    </Buttons>
                </Section>
                <Background src="./images/risotto.png"/>
            </InnerContainer>
        </Container>
        </Bob>
        
    );
   }
   
   export default Specials;