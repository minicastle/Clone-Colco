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
            <Route path="/Clone-Colco" element={
              <Container>
                <Navbar/>
                <HomePage/>
                <Footer/>
              </Container>
            }/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App