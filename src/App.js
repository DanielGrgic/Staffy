import React ,{useState} from 'react';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import TopBar from "./components/TopBar";
import LeftSideBar from './components/LeftSideBar';
import RightSection from './components/RightSection';

function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="App">
      <TopBar />
      <MainContent>
        <LeftSideBar />
        <RightSection step={step} changeStep={stepValue=>{ console.log(stepValue); setStep(stepValue)}} />
      </MainContent>
    </div>
  );
}

const MainContent = styled.div`
  display: flex;  
  flex: 1;
`

export default App;
