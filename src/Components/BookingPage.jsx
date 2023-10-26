import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
    width: 60%;
    padding-left: 20%;
    padding-right: 20%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BookingPage = () => {
    return (
        <Container>
            <h1>Booking Page Here</h1>
        </Container>
    );
   }
   export default BookingPage;