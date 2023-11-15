import Testimonials from './Testimonials';
import Story from './Story';
import styled from 'styled-components';


const Container = styled.div`
    
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 20%;
    padding-right: 20%;
    box-shadow: inset 0 15px 25px -10px #333333, inset 0 -15px 20px -10px #333333;

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

const AbsoluteContainer = () => {
    return(
        <Container>
            <Testimonials/>
            <Story/>
        </Container>
    );
};

export default AbsoluteContainer;