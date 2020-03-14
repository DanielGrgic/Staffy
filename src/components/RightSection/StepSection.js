import React, {useState} from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form'
import Select from 'react-select';
import Button from 'react-bootstrap/Button'

import { SELECT_OPTIONS } from '../../constants';

const StepSection = ({
  step,
  changeStep
}) => {

  const [stepValues, setStepValues] = useState([[],{},{},{}]);

  const getTitle = (step=1) => {
    switch(step) {
      case 1:
        return 'Let’s get to know you and your Shopify store a bit:';
      case 2:
      case 3:
        return "Well let's continue";
      default: 
        return 'Let’s get to know you and your Shopify store a bit:';
    }
  }  

  const handleChangeStepValue = (selectedOption, nIndex) => {
    if (nIndex === step-1)
      changeStep(step + 1)    
    const temp = stepValues;
    temp[nIndex] = selectedOption;
    setStepValues([...temp])
  }

  return (
    <Container>
      {
        step < 6 && (
          <Title>{getTitle()}</Title>
        )
      }      
      {
        (step === 2 || step === 3 || step ===4) && (
          <SubTitle style={{marginTop: '24px'}}>Let's get to know you andyour Shopify store a bit:</SubTitle>
        )
      }
      <Form>
        {
          (step <= 5) && (      
            <Form.Group style={{marginTop: '24px'}}>
            <StepFormLabel>Why do you need staffy?</StepFormLabel>
              <StepSelect
                placeholder="Choose Multiple"
                options={SELECT_OPTIONS}
                isMulti={true}
                value={stepValues[0]}
                onChange={selectedOption => {handleChangeStepValue(selectedOption, 0)}}
              />              
            </Form.Group>                      
          )
        }
        {
          (step > 1 && step <= 5) && (          
            <Form.Group style={{marginTop: '24px'}}>
              <StepFormLabel>How many people do you need to manage?</StepFormLabel>
              <StepSelect
                placeholder="Choose One"
                options={SELECT_OPTIONS}
                value={stepValues[1]}
                onChange={selectedOption => {handleChangeStepValue(selectedOption, 1)}}
              />              
            </Form.Group>
          )
        }
        {
          (step > 2 && step <= 5) && (          
            <Form.Group style={{marginTop: '24px'}}>
              <StepFormLabel>What type of Shopify store do you have?</StepFormLabel>
              <StepSelect
                placeholder="Choose One"
                options={SELECT_OPTIONS}
                value={stepValues[2]}
                onChange={selectedOption => {handleChangeStepValue(selectedOption, 2)}}
              />              
            </Form.Group>            
          )
        }
        {
          (step > 3 && step <= 5) && (          
            <Form.Group style={{marginTop: '24px'}}>
              <StepFormLabel>What do your staff do?</StepFormLabel>
              <StepSelect
                placeholder="Choose One"
                options={SELECT_OPTIONS}
                value={stepValues[4]}
                onChange={selectedOption => {handleChangeStepValue(selectedOption, 3)}}
              />              
            </Form.Group>            
          )
        }
        {
          step === 5 && (
            <NextBtn onClick={() => {changeStep(6)}}>Next</NextBtn>
          )
        }
      </Form>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  margin-top: 123px;
  margin-left: 96px;
  width: 100%;
  flex-direction: column;
`

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 32px;
  color: #13123C;
`

const SubTitle = styled.h2`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: #8E9FAD;
`

const StepFormLabel = styled(Form.Label)`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #343446;
  padding: 0;
  margin: 0;
`

const StepSelect = styled(Select)`
  width: 331px;
`

const NextBtn = styled(Button)`
  background-color: #F34867;
  border-radius: 3px;
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;    
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none !important;
  width: 80px;
  height: 36px;
  outline: none !important;
  box-shadow: none !important;
  margin-top: 24px;

  &:hover {
    background-color: #F34867 !important;
    opacity: 0.8;
  }
  &:active {
    background-color: #F34867 !important;
    opacity: 0.8;
  }  
  &:focus {
    background-color: #F34867 !important;
    opacity: 0.8;
  }  
`

export default StepSection;