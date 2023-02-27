import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFCDD0;
    width: 100%;
    color:black;
`;
const Contents = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 70%;
    margin-top: 25px;
    max-width: 1000px;
    gap: 30px;
    height: fit-content;
    @media screen and (max-width: 780px){
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 0;
    }
`;
const Titles = styled.div`
    font-size: 30px;
    font-weight: bold;
    @media screen and (max-width: 700px){
        font-size: 24px;
    }
`;
const Items = styled.ul`
    list-style: none;
    padding: 0;
`;
const Item = styled.li`
    width:fit-content;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.7;
    @media screen and (max-width: 700px){
        font-size: 16px;
    }
    :hover{
        cursor: pointer;
        text-decoration: underline;
    }
`;
const Companys = styled.div`
    width: 315px;
    @media screen and (max-width: 720px){
        max-width: 225px;
    }
`;
const Follows = styled.div`
    width: 315px;
    @media screen and (max-width: 720px){
        max-width: 225px;
    }
`;
const Contats = styled.div`
    width: 315px;
    @media screen and (max-width: 720px){
        max-width: 225px;
    }
`;
const Others = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 70%;
    flex-wrap: wrap;
    white-space: nowrap;
    padding-top: 25px;
`;
const Other = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0 40px 15px 0;
    &#made{
        margin-left: 100px;
    }
    @media screen and (max-width: 780px){
        &#made{
            margin-left: 0;
        }
    }
    @media screen and (max-width: 700px){
        font-size: 16px;
    }
`;
function Footer() {
    return (
        <Container>
            <Contents>
                <Companys>
                    <Titles>Company</Titles>
                    <Items>
                        <Item>Sell Business Services</Item>
                        <Item>Sell Content</Item>
                        <Item>Hire Employees</Item>
                        <Item>Find Jobs & Gigs</Item>
                        <Item>Market Products</Item>
                    </Items>
                </Companys>
                <Follows>
                    <Titles>Follow Us</Titles>
                    <Items>
                        <Item>COLCO</Item>
                        <Item>LinkedIn</Item>
                        <Item>Instagram</Item>
                        <Item>Twitter</Item>
                        <Item>Facebook</Item>
                        <Item>Medium</Item>
                    </Items>
                </Follows>
                <Contats>
                    <Titles>Contact Us</Titles>
                    <Items>
                        <Item>business@colco.app</Item>
                    </Items>
                </Contats>
            </Contents>
            <Others>
                <Other>Privacy Policy</Other>
                <Other>Terms & Conditions</Other>
                <Other>Cookies Policy</Other>
                <Other id='made'>©2021 Healium Solutions Pvt Ltd.</Other>
            </Others>
        </Container>
    )
}

export default Footer;