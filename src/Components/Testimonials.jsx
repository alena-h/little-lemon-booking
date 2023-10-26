import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    object-fit: contain;
    margin-bottom: 100px;
`;

const Header = styled.div`
    width: 100%;
    position: absolute;
    top: 30px;

        h1 {
            color: #EDEFEE;
            font-weight: 700;
            font-size: 64px;
            font-family: 'Markazi Text', serif;
            text-align: center;
        }
`;

const Row = styled.div`
    display: flex;
    flex: 4;
    width: 100%;
    min-width: 200px;
    max-height: fit-content;
    min-height: 300px;
    gap: 25px;
    justify-content: center;
    margin-top: 150px;
    flex-wrap: wrap ;
    overflow: hidden;
`;

const Card = styled.div`
    max-width: 20%;
    min-width: 200px;
    max-height: 350px;
    min-height: 300px;
    background-color: #EDEFEE;
    border-radius: 15px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
    overflow: hidden;
    object-fit: contain;
`;

const Rating = styled.div`
    height: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    img {
        height: 20px;
        width: auto;
    }
`;


const Testemonial = styled.div`
        p {
            color: #333333;
            font-weight: 500;
            font-size: 16px;
            font-family: 'Karla', sans-serif;
            margin: 0%;
            text-align: center;
        }
`;

const Photos = styled.div`
    img{
        width: 50px;
        height: 50px;
        object-fit: cover;
    }
`;

const Avatar = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;

    p {
        color: #333333;
        font-weight: 700;
        font-size: 16px;
        font-family: 'Karla', sans-serif;
    }

    img{
        width: 40px;
        height: 40px;
    }
`;


const testimonials = [
    {
        rating: 5,
        testimonial: `"Perfect for a romantic date night.
         Candlelit tables, exceptional Italian food, and an
         impressive wine selection. Unforgettable!"`,
        imageUrl: './images/photo_1.png',
        name: 'Thomas R.',
        avatar: './images/avatar_1.png',
         },
    {
        rating: 5,
        testimonial: `"A hidden gem for Italian cuisine! Homemade
         pasta, divine flavors, and a warm, welcoming staff.
          Highly recommended!"`,
        imageUrl: './images/photo_2.jpg',
        name: 'Anna F.',
        avatar: './images/avatar_2.png',
         },
    {
        rating: 4,
        testimonial: `"The flavors are authentic, the service attentive,
         and the ambiance pleasant. While not quite 5 stars,
          it's definitely worth revisiting for more."`,
        imageUrl: null,
        name: 'John G.',
        avatar: './images/avatar.png',
         },
    {
        rating: 5,
        testimonial: `"Family-friendly Italian dining at its best!
         Hearty pasta, delicious pizza, and a relaxed atmosphere.
          A must-visit for Italian food lovers!"`,
        imageUrl: null,
        name: 'Luis M.',
        avatar: './images/avatar_3.png',
         },
];


const Testimonials = () => {
    return (
        <Container>
            <Header>
                <h1>What our clients say?</h1>
            </Header>
            <Row>
            {testimonials.map((item, index) => (
                    <Card key={index}>
                        <Rating>
                            {Array.from({ length: item.rating }, (_, i) => (
                                <img
                                    key={i}
                                    src="./images/star.png"
                                    alt="Star"
                                />)
                            )}
                        </Rating>
                        <Testemonial>
                            <p>{item.testimonial}</p>
                        </Testemonial>
                        <Photos>
                            {item.imageUrl !== null && (
                                <img
                                    src={item.imageUrl}
                                    alt=""
                                />
                            )}
                        </Photos>
                        <Avatar>
                            <img
                                src={item.avatar}
                                alt=""
                            />
                            <p>{item.name}</p>
                        </Avatar>
                    </Card>
                ))}
            </Row>
        </Container>
    );
   }
   
   export default Testimonials;