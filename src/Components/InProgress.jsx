import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    max-width: 100vw;
    height: 500px;
    margin: 0 auto;
    position: relative;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    justify-content: center;

    h1 {
        color: #F4CE14;
        font-weight: 700;
        font-size: 64px;
        font-family: 'Markazi Text', serif;
    }
`;

const Background = styled.img`
        object-fit: cover;
        position: absolute;
        z-index: -1;
        width: auto;
        height: 100%;
        min-width: 100vw;
`;

const InProgress = () => {
    return(
        <Container>
            <h1>We're working on it...</h1>
            <Background src="/images/background.png" alt="background" id='background'/>
        </Container>
    );
};

export default InProgress;