import React from 'react';
import styled from 'styled-components';

import logoSvg from '../../logo.svg';

const Container = styled.div`
  display: flex;
  background: #F4F6F8;
  box-shadow: inset 0px -1px 0px #DFE3E8;
  height: 56px;
  padding: 16px 32px;
  justify-content: space-between;
  align-items: center;  
`

const RightText = styled.p`
  margin: 0;
  padding: 0;
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  color: #637381;
`

const TopBar = () => {
  return (
    <Container>
      <img src={logoSvg} alt="Log Image"/>
      <RightText>by Staffy</RightText>
    </Container>
  )
}

export default TopBar;