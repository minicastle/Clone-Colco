import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import styled from "@emotion/styled";
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  color:white;
  flex-direction: column;
`;

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
            <Container>
              <Navbar/>
              <HomePage/>
              <Footer/>
            </Container>
          }/>
            <Route path="/Startups" element={<div>startups</div>}/>
            <Route path="/Creaters" element={<div>Creaters</div>}/>
            <Route path="/Recruiters" element={<div>Recruiters</div>}/>
            <Route path="/Freelancers" element={<div>Freelancers</div>}/>
            <Route path="/Marketers" element={<div>Marketers</div>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App