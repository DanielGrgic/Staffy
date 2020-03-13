import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form'
import Select from 'react-select';

import { SELECT_OPTIONS } from '../../constants';

const StepSection = ({
  step,
}) => {
  return (
    <Container>
      <Title>Let’s get to know you and your Shopify store a bit:</Title>
      <Form>
        <Form.Group style={{marginTop: '24px'}}>
          <StepFormLabel>Why do you need staffy?</StepFormLabel>
          <StepSelect
            placeholder="Choose Multiple"
            options={SELECT_OPTIONS}
            isMulti={true}                    
          />              
        </Form.Group>                      
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
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 32px;
  color: #13123C;
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

export default StepSection;