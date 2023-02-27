import React, { useState } from 'react';
import styled from "@emotion/styled";
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position:sticky;
    top:0;
    background-color: black;
    z-index: 100;
`;
const Container = styled.div`
    display: flex;
    height: 77px;
    width: 100%;
    max-width: 1110px;
    justify-content: space-between;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    position: relative;
    @media screen and (max-width:990px){
        padding: 0 100px;
    }
`;
const NavItemContainer = styled.ul`
    padding: 10px 0;
    list-style: none;
    display: flex;
    @media screen and (max-width:990px){
        display: none;
    }
`;
const NavItems = styled.li`
    color:white;
    display: inline-block;
    font-size: 18px;
    padding:15px 28px;
    cursor:pointer;
`;
const TagA = styled.a`
    text-decoration: none;
    color:white;
    transition: all 0.5s ease 0s;
    :hover{
        color:#FFC5C5;
    }
`;
const Logo = styled.a`
    text-decoration: none;
`;
const MenuMinimize = styled.div`
    display: none;
    font-size: 35px;
    z-index: 100;
    @media screen and (max-width:990px){
        display: flex;
    }
`;
const Minimize = styled.div`
    padding-top: 80px;
    transition: 500ms ease-in-out;
    ${(props)=>{return props.minimize?{display:'flex',animation:'FadeIn 0.2s linear both'}:{display:'none'}}};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    position: absolute;
    background-color: black;
    top: 0;
    left: 0;
    @keyframes FadeIn {
        from{
            opacity: 0;
            transform: translateY(-30px);
        }
        to{
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
const MinimizeItem = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 30px;
    border-bottom: 1px solid white;
`
const MinimizeTitle = styled.p`
    font-size:26px;
    margin-bottom: 0;
`;
const MinimizeInfo = styled.p`
    font-size: 16px;
`;

function Navbar() {
    const [minimize,setMinimize] = useState(false);
    return (
        <Wrap>
            <Container>
                <Minimize minimize={minimize}>
                    <MinimizeItem>
                        <MinimizeTitle>Startups</MinimizeTitle>
                        <MinimizeInfo>Sell Business Services</MinimizeInfo>
                    </MinimizeItem>
                    <MinimizeItem>
                        <MinimizeTitle>Creators</MinimizeTitle>
                        <MinimizeInfo>Sell Content</MinimizeInfo>
                    </MinimizeItem>
                    <MinimizeItem>
                        <MinimizeTitle>Recruiters</MinimizeTitle>
                        <MinimizeInfo>Hire Employees</MinimizeInfo>
                    </MinimizeItem>
                    <MinimizeItem>
                        <MinimizeTitle>Freelancers</MinimizeTitle>
                        <MinimizeInfo>Find Jobs & Gigs</MinimizeInfo>
                    </MinimizeItem>
                    <MinimizeItem>
                        <MinimizeTitle>Marketers</MinimizeTitle>
                        <MinimizeInfo>Market Products</MinimizeInfo>
                    </MinimizeItem>
                </Minimize>
                <MenuMinimize>
                    <AiOutlineMenu style={minimize?{display:'none'}:{display:'flex'}} onClick={()=>{setMinimize(!minimize)}}/>
                    <AiOutlineClose style={minimize?{display:'flex'}:{display:'none'}} onClick={()=>{setMinimize(!minimize)}}/>
                </MenuMinimize>
                <Logo href='/Clone-Colco'>
                    <img src='https://colco.app/image/logo/sitelogo.png' alt='' style={{width:"160px",height:"fit-content",cursor:"pointer"}}/>
                </Logo>
                <NavItemContainer>
                    <NavItems>
                        <TagA href='https://www.colco.app/sell-business-service.html'>Startups</TagA>
                    </NavItems>
                    <NavItems>
                        <TagA href='https://www.colco.app/sell-digital-content.html'>Creators</TagA>
                    </NavItems>
                    <NavItems>
                        <TagA href='https://www.colco.app/hire-employees-freelancers.html'>Recruiters</TagA>
                    </NavItems>
                    <NavItems>
                        <TagA href='https://www.colco.app/intern-jobseekers-freelancer.html'>Freelancers</TagA>
                    </NavItems>
                    <NavItems>
                        <TagA href='https://www.colco.app/market-product-services.html'>Marketers</TagA>
                    </NavItems>
                </NavItemContainer>
                <MenuMinimize/>
            </Container>
        </Wrap>
    )
}

export default Navbar;