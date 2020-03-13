import React, {useState} from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel'

import backImg from './back.png';

const LeftSideBar = () => {

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  }

  return (
    <Container>
      <StyledCarousel 
        activeIndex={index} 
        direction={direction} 
        onSelect={handleSelect}
        controls={false}
      >
        <Carousel.Item>
          <ItemContent>
            <CorouselDescription>
              “While running my small Shopify business I never had time to check up on what my staff was doing. But with Staffy, I can easily monitor and see their progress.” <br /><br />Tom, Qstomize
            </CorouselDescription>          
          </ItemContent>          
        </Carousel.Item>
        <Carousel.Item>
          <ItemContent>
            <CorouselDescription>
              “While running my small Shopify business I never had time to check up on what my staff was doing. But with Staffy, I can easily monitor and see their progress.” <br /><br />Tom, Qstomize
            </CorouselDescription>          
          </ItemContent>
        </Carousel.Item>
        <Carousel.Item>
          <ItemContent>
            <CorouselDescription>
              “While running my small Shopify business I never had time to check up on what my staff was doing. But with Staffy, I can easily monitor and see their progress.” <br /><br />Tom, Qstomize
            </CorouselDescription>          
          </ItemContent>
        </Carousel.Item>
      </StyledCarousel>
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  width: 363px;
  height: 100%;
  padding: 24px 32px;
  background-image: linear-gradient(180deg, rgba(14, 14, 14, 0) 0%, rgba(4, 4, 4, 0.4) 100%), linear-gradient(180deg, rgba(210, 96, 117, 0.1) 35.94%, rgba(243, 72, 119, 0.5) 100%), url(${backImg});
`
const StyledCarousel = styled(Carousel)`
  .carousel-inner {
    height: 100%;
  }
  .carousel-indicators li {
    width: 8px;
    height: 8px;
    border-radius: 4px;
    border: none;
  }  

  .carousel-item {
    position: relative;
    height: 100%;
  }
  
  .carousel-indicators {
    margin-bottom: 0;
  }
`;

const CorouselDescription = styled.p`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 32px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  margin: 0 0 32px 0;
`

const ItemContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;  
`

export default LeftSideBar;