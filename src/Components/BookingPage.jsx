import BookingForm from './BookingForm';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    max-width: 100vw;
    height: auto;
    margin: 0 auto;
    position: relative;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`;

const Background = styled.img`
        object-fit: cover;
        position: absolute;
        z-index: -1;
        width: auto;
        height: 100%;
        min-width: 100vw;
`;

const BookingPage = () => {
    return (
        <Container>
            <BookingForm/>
            <Background src="/images/background.png" alt="background" id='background'/>
        </Container>
    );
   }
   export default BookingPage;