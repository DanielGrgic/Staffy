import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;  
  flex-direction: column;
  width: 100%;  
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  width: 100%;
`
const BackDivContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 28px;
`

const BackBtn = styled.div`
  cursor: pointer;
  width: 61px;
  height: 16px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-transform: uppercase;  
  color: #13123C;  
  span {
    color: #F34867;  
  }
`

const RightSection = () => {
  
  return (
    <Container>
      <Content>
        <BackDivContainer>       
            <BackBtn>
              <span>{"<"}&nbsp;&nbsp;</span>
              BACK
            </BackBtn>
        </BackDivContainer>
      </Content>
    </Container>
  )
}

export default RightSection;