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
    width: 100%;
    max-width: 1000px;
    gap: 30px;
`;
const Titles = styled.div`
    font-size: 30px;
    font-weight: bold;
    margin:25px 0;
`;
const Items = styled.ul`
    list-style: none;
    padding: 0;
    padding-bottom: 50px;
`;
const Item = styled.li`
    width:fit-content;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.7;
    :hover{
        cursor: pointer;
        text-decoration: underline;
    }
`;
const Companys = styled.div`
    width:30%;
`;
const Follows = styled.div`
    width:30%;
`;
const Contats = styled.div`
    width:30%;
`;
const Others = styled.div`
    display: flex;
    gap: 40px;
    white-space: nowrap;
`;
const Other = styled.p`
    font-size: 20px;
    font-weight: bold;
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
                <Other style={{marginLeft:"100px"}}>©2021 Healium Solutions Pvt Ltd.</Other>
            </Others>
        </Container>
    )
}

export default Footer;