import React from 'react';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import TopBar from "./components/TopBar";
import LeftSideBar from './components/LeftSideBar';
import RightSection from './components/RightSection';

function App() {
  return (
    <div className="App">
      <TopBar />
      <MainContent>
        <LeftSideBar />
        <RightSection />
      </MainContent>
    </div>
  );
}

const MainContent = styled.div`
  display: flex;  
  flex: 1;
`

export default App;
