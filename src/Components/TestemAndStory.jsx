import Testimonials from './Testimonials';
import Story from './Story';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    max-width: 100vw;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    background-color: #495E57;
    display: flex;
    flex: 2;
`;

const Background = styled.img`
        width: 100vw;
        max-width: 100vw;
        height: 100%;
        object-fit: cover;
`;

const TestemAndStory = () => {
    return(
        <Container>
            <Testimonials/>
            <Story/>
            <Background src="/images/background.png" alt="background" id='background'/>
        </Container>
    );
};

export default TestemAndStory;