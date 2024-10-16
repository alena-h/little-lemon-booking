import { useRef, useEffect, useState, useCallback } from "react";
import styled from "styled-components";

const Slider = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: 700px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background-color: #495e57;
`;
const List = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  width: max-content;
  transform: 1s;
`;
const Item = styled.div`
  position: relative;
`;

const ItemImage = styled.img`
  width: 100vw;
  max-width: 100vw;
  height: 100%;
  object-fit: cover;
  -webkit-mask-size: 100%;
  mask-size: 100%; /* Added standard property */
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, rgba(0, 0, 0, 1)),
    color-stop(0.2, rgba(0, 0, 0, 0.6)),
    color-stop(0.5, rgba(0, 0, 0, 0.2)),
    color-stop(1, rgba(0, 0, 0, 0.05))
  );
  mask-image: linear-gradient(
    /* Added standard property */ to right,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.6) 20%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.05) 100%
  );
`;

const ItemContent = styled.div`
  h1 {
    color: #edefee;
    font-weight: 800;
    font-size: 20px;
    font-family: "Karla", sans-serif;
    margin: 0%;
  }

  p {
    color: #edefee;
    font-weight: 400;
    font-size: 16px;
    font-family: "Inter", serif;
    margin-top: 15px;
  }

  width: 30%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  right: 20%;
  z-index: 10;
  animation: slide-up 1s ease 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;

  @media only screen and (max-width: 1300px) {
    width: 60%;
    left: 20%;
  }

  @keyframes slide-up {
    0% {
      opacity: 0%;
      right: -10%;
    }
    100% {
      opacity: 100%;
    }
  }
`;

const Header = styled.div`
  h1 {
    color: #edefee;
    font-weight: 700;
    font-size: 64px;
    font-family: "Markazi Text", serif;
    text-align: center;
  }
  width: 100%;
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 20px;
  bottom: 15%;
  right: 20%;
  position: absolute;

  @media only screen and (max-width: 1300px) {
    justify-content: center;
    left: 20%;
  }
`;
const ActionButton = styled.button`
  &.btn_p {
    background-color: #f4ce14;
  }

  &.btn_s {
    background-color: #edefee;
  }

  height: 50px;
  width: 200px;
  color: #333333;
  font-family: "Karla";
  font-weight: 700;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  transform: scale(1);
  z-index: 20;

  &:hover {
    box-shadow: 0px 5px 5px #333333;
    transform: scale(1.05) perspective(1px);
  }

  &:active {
    color: #edefee;
    background-color: #495e57;
  }
`;

const Dots = styled.ul`
  position: absolute;
  bottom: 10px;
  color: #495e57;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Li = styled.li`
  cursor: pointer;
  list-style: none;
  width: 8px;
  height: 8px;
  background-color: #edefee;
  margin: 20px;
  border-radius: 50%;
  transition: 1s;

  &.active {
    width: 15px;
    height: 15px;
    background-color: #f4ce14;
  }
`;

const Buttons = styled.div`
  position: absolute;
  top: 45%;
  left: 10%;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.button`
  cursor: pointer;
  width: 60px;
  height: 60px;
  background-color: transparent;
  border: none;
  padding: 10px;
  color: #edefee;
  font-family: monospace;
  font-weight: bold;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0px;
  transition: 1s;

  &:hover {
    font-size: 30px;
    color: #495e57;
  }
`;

const items = [
  {
    id: "clone3",
    name: "Porcini Mushroom RisottoMargherita Pizza",
    description: `Savor the rich and earthy elegance of our Porcini 
        Mushroom Risotto. Each creamy spoonful captures the essence of Italian 
        comfort food, as plump Arborio rice melds with a decadent blend of sautéed 
        Porcini mushrooms, shallots, and garlic. A splash of white wine and a 
        generous sprinkle of Parmesan cheese elevate this dish to gourmet heights, 
        making every bite a luxurious journey through flavor and texture.`,
    imageUrl: "./images/risotto.png",
    alt: "risotto",
  },
  {
    id: "1",
    name: "Margherita Pizza",
    description: `Indulge in pizza perfection with our Margherita!
        Delicate, thin crust adorned with vibrant tomato sauce, 
        velvety mozzarella, and aromatic basil leaves, all kissed by 
        a drizzle of extra-virgin olive oil. Each bite is a symphony of 
        flavors that pays homage to Italy's culinary heritage.
        Simple, yet sublime – Margherita pizza is a timeless classic 
        that will satisfy your cravings in every delightful slice.`,
    imageUrl: "./images/pizza.jpg",
    alt: "pizza",
  },
  {
    id: "2",
    name: "Italian Lemon Cheesecake",
    description: `Our masterpiece features a light and fluffy filling
         crafted with creamy ricotta cheese, delicately whipped to perfection.
          It's a harmonious marriage of creaminess and citrus brightness that 
          will transport your taste buds to Italy's sunny Amalfi 
          Coast with every heavenly forkful.`,
    imageUrl: "./images/lemon_disserts.jpg",
    alt: "lemon dessert",
  },
  {
    id: "3",
    name: "Porcini Mushroom RisottoMargherita Pizza",
    description: `Savor the rich and earthy elegance of our Porcini 
        Mushroom Risotto. Each creamy spoonful captures the essence of Italian 
        comfort food, as plump Arborio rice melds with a decadent blend of sautéed 
        Porcini mushrooms, shallots, and garlic. A splash of white wine and a 
        generous sprinkle of Parmesan cheese elevate this dish to gourmet heights, 
        making every bite a luxurious journey through flavor and texture.`,
    imageUrl: "./images/risotto.png",
    alt: "risotto",
  },
  {
    id: "clone1",
    name: "Margherita Pizza",
    description: `Indulge in pizza perfection with our Margherita!
        Delicate, thin crust adorned with vibrant tomato sauce, 
        velvety mozzarella, and aromatic basil leaves, all kissed by 
        a drizzle of extra-virgin olive oil. Each bite is a symphony of 
        flavors that pays homage to Italy's culinary heritage.
        Simple, yet sublime – Margherita pizza is a timeless classic 
        that will satisfy your cravings in every delightful slice.`,
    imageUrl: "./images/pizza.jpg",
    alt: "pizza",
  },
];
let active = 1;

const Specials = () => {
  const slide_ref = useRef();
  const ref = useRef();
  const dot_ref = useRef();
  const [width, setWidth] = useState(window.innerWidth);
  const [autoScroll, setAutoScroll] = useState(false);

  let slideInterval;
  let intervalTime = 2000;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updateDots = () => {
    if (dot_ref.current) {
      const dotElements = dot_ref.current.querySelectorAll("li");
      dotElements.forEach((dot, index) => {
        if (index === active - 1) {
          dot.classList.add("active");
        } else if (index === 0 && active === 4) {
          dot.classList.add("active");
        } else if (index === 2 && active === 0) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    }
  };

  // Define the Intersection Observer callback
  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // If the component is in view, start auto-scroll
        setAutoScroll(true);
      } else {
        // If the component is out of view, stop auto-scroll
        setAutoScroll(false);
      }
    });
  };

  // Create an Intersection Observer for the "Specials" component
  useEffect(() => {
    const slideRef = slide_ref.current; // Create a local variable

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(slideRef); // Use the local variable here

    return () => {
      observer.unobserve(slideRef); // Use the local variable in the cleanup function
    };
  }, []);

  const MoveToNextItem = useCallback(() => {
    console.log("moving ", active);
    ref.current.style.transition = "0.5s";
    if (active >= 4) return;
    active = active + 1;
    ref.current.style.transform = `translateX(${-width * active}px)`;
    updateDots();
    console.log(active);
  }, [width]);

  const slideIntervalRef = useRef();

  useEffect(() => {
    const auto = () => {
      slideIntervalRef.current = setInterval(MoveToNextItem, intervalTime); // Store interval in ref
    };

    if (autoScroll) {
      auto();
    }

    return () => clearInterval(slideIntervalRef.current); // Clear interval using ref
  }, [MoveToNextItem, autoScroll, intervalTime]);

  const handleMouseEnter = () => {
    setAutoScroll(false); // Pause auto-scroll when the mouse enters the element
    clearInterval(slideInterval);
    console.log("Stop");
  };

  const handleMouseLeave = () => {
    setAutoScroll(true);
    console.log("Start");
  };

  useEffect(() => {
    ref.current.addEventListener("transitionend", () => {
      if (items[active].id === items[4].id) {
        console.log("reset");
        ref.current.style.transition = "none";
        active = 1;
        ref.current.style.transform = `translateX(${-width * active}px)`;
      } else if (items[active].id === items[0].id) {
        ref.current.style.transition = "none";
        active = items.length - 2;
        ref.current.style.transform = `translateX(${-width * active}px)`;
      }
    });
  }, [width]);

  const MoveToPrevItem = () => {
    console.log("moving ", active);
    ref.current.style.transition = "0.5s";
    if (active <= 0) return;
    active = active - 1;
    ref.current.style.transform = `translateX(${-width * active}px)`;
    updateDots();
    console.log(active);
  };

  const handleDotClick = (e) => {
    ref.current.style.transition = "none";
    active = parseInt(e.target.id);
    ref.current.style.transform = `translateX(${-width * active}px)`;
    updateDots();
    console.log("after dot click", active);
  };

  return (
    <Slider
      ref={slide_ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Header>
        <h1>This week's specials</h1>
      </Header>
      <List ref={ref} style={{ transform: `translateX(${-width * 1}px)` }}>
        {items.map((item) => {
          return (
            <Item key={item.id}>
              <ItemContent>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
              </ItemContent>
              <ItemImage src={item.imageUrl} alt={item.alt} />
            </Item>
          );
        })}
      </List>
      <Buttons>
        <Button className="prev" onClick={MoveToPrevItem}>
          {" "}
          {"<"}
        </Button>
        <Button className="next" onClick={MoveToNextItem}>
          {" "}
          {">"}
        </Button>
      </Buttons>
      <ActionButtons>
        <ActionButton className="btn_p">Order Now!</ActionButton>
        <ActionButton className="btn_s">Our Menu</ActionButton>
      </ActionButtons>
      <Dots ref={dot_ref}>
        <Li id="1" className="active" onClick={handleDotClick}></Li>
        <Li id="2" onClick={handleDotClick}></Li>
        <Li id="3" onClick={handleDotClick}></Li>
      </Dots>
    </Slider>
  );
};

export default Specials;
