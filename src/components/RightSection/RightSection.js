import React from 'react';
import styled from 'styled-components';

import StepSection from './StepSection';

const RightSection = ({step, changeStep}) => {
  
  return (
    <Container>
      <Content>
        <BackDivContainer>       
          <BackBtn>
            <span>{"<"}&nbsp;&nbsp;</span>
            BACK
          </BackBtn>          
          <StepSection step={step} changeStep={stepValue => {changeStep(stepValue)}} />
        </BackDivContainer>
      </Content>
    </Container>
  )
}

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

export default RightSection;