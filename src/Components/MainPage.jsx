import Hero from './Hero';
import Specials from './Specials';
import TestemAndStory from './TestemAndStory';
import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MainPage = () => {
    return (
        <Container>
            <Hero/>
            <Specials/>
            <TestemAndStory/>
        </Container>
    );
   }
   export default MainPage;