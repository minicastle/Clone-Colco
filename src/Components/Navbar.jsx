import React from 'react';
import styled from "@emotion/styled";

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
`;
const NavItemContainer = styled.ul`
    padding: 10px 0;
    list-style: none;
    display: flex;
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

function Navbar() {
    return (
        <Wrap>
            <Container>
                <Logo href='/'>
                    <img src='https://colco.app/image/logo/sitelogo.png' alt='' style={{width:"160px",height:"fit-content",cursor:"pointer"}}/>
                </Logo>
                <NavItemContainer>
                    <NavItems>
                        <TagA href='/Startups'>Startups</TagA>
                    </NavItems>
                    <NavItems>
                        <TagA href='/Creaters'>Creators</TagA>
                    </NavItems>
                    <NavItems>
                        <TagA href='/Recruiters'>Recruiters</TagA>
                    </NavItems>
                    <NavItems>
                        <TagA href='/Freelancers'>Freelancers</TagA>
                    </NavItems>
                    <NavItems>
                        <TagA href='/Marketers'>Marketers</TagA>
                    </NavItems>
                </NavItemContainer>
            </Container>
        </Wrap>
    )
}

export default Navbar;