import React from 'react';
import styled from "@emotion/styled";
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    margin-top: 80px;
    overflow: hidden;
    width: 100%;
`;
const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const TextContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    line-height: 1.1;
    font-weight: 800;
    @media screen and (max-width: 770px) {
        font-size: 52px;
        text-align: center;
    }
`;
const FullImage = styled.img`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    max-width: 1110px;
`;
const DownloadIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`;
const DownloadContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    color: #cdcdcd;
    width: 100%;
    max-width: 800px;
`;
const DownloadTitle = styled.h2`
    font-size: 30px;
    margin-top: 50px;
    @media screen and (max-width: 575px){
        font-size: 20px;
    }
`;
const Images = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;
`;
const Video = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Title = styled.div`
    width:100%;
    height:140px;
    background-color:#FFC5C5;
    color:black;
    font-size:50px;
    font-weight:900;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 700px) {
        font-size: 24px;
        height: 80px;
    }
`;
const VideoContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 1100px;
    justify-content: center;
    align-items: center;
    padding: 100px;
    @media screen and (max-width:770px) {
        padding: 20px 0;
    }
`;
const VideoItem = styled.video`
    width: 90%;
    height: fit-content;
`;
const ColcoSteps = styled.div`
    display: flex;
    max-width: 933px;
    justify-content: center;
    align-items: center;
    margin:0 10%;
    @media screen and (max-width: 770px){
        margin: 0;
    }
`;
const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 770px){
        flex-direction: column;
        gap: 20px;
    }
`;
const Info1Text = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    @media screen and (max-width: 770px){
        width: 90%;
    }
`;
const Info2Text = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    @media screen and (max-width: 770px){
        width: 90%;
    }
`;
const LogoCarousel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 30px;
    padding: 120px 0;
    @media screen and (max-width:770px){
        padding: 30px 0;
    }
`;
const Text = styled.div`
    line-height: 1.2;
    font-size: 40px;
    font-weight: 800;
    word-wrap: normal;
    text-transform: uppercase;
`;
const InfoImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding-right: 20px;
    @media screen and (max-width: 770px){
        width: 80%;
    }
`;
const Logos = styled.div`
    width:250px;
    border: 5px solid white;
    border-radius: 50px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:770px){
        width: 80px;
        height: 80px;
        border-radius: 10px;
        border: 3px solid white;
    }
`;
const Logo = styled.img`
    width: 200px;
    scale: 1.3;
    @media screen and (max-width:770px){
        width: 80px;
        scale: 1;
    }
`;
const Testers = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 400px;
    margin-bottom: 80px;
    position: relative;
    @media screen and (max-width:575px){
        height: 800px;
    }
`;
const Users = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width:100%;
    position: absolute;
    top:0;
    @media screen and (max-width:575px){
        flex-wrap: wrap;
        gap: 30px;
    }
`;
const User = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: 30%;
    position: relative;
    @media screen and (max-width:575px){
        min-width: 290px;
    }
`;
const UserImage = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
`;
const UserName = styled.p`
    font-size:26px;
    font-weight: 700;
    @media screen and (max-width:1025px){
        font-size:18px;
    }
`;
const UserMent = styled.span`
    text-align: center;
    width: 85%;
    font-size: 16px;
    font-weight: 500;
    @media screen and (max-width:1025px){
        font-size: 13px;
    }
`;
function HomePage() {
    let [playing,setPlaying] = useState(false);
    return (
        <Container>
            <TextArea>
                <TextContainer>
                    <span style={{color:'#FFC5C5'}}>Audio-centric Social Network for</span>
                    <span style={{color:'#D0EDD2'}}>Professionals & Startups</span>
                </TextContainer>
                <i style={{margin:"25px 0",fontSize:"16px",lineHeight:1.2,fontWeight:600}}>Simplifying Earnings For You</i>
            </TextArea>
            <FullImage src='https://colco.app/image/hero_colco_screenshot/home_ss.jpg' alt='' >
            </FullImage>
            <DownloadIcon>
                <DownloadContainer>
                    <h2 style={{fontSize:"30px",marginBottom:"50px"}}>Available on</h2>
                    <Images>
                        <img src='https://colco.app/image/logo/googleplay_store.webp' alt='' style={{width:"200px",marginRight:"40px",border:"1px solid white",borderRadius:"10px",padding:"5px"}}></img>
                        <img src='https://colco.app/image/logo/apple_store.webp' alt='' style={{width:"200px",border:"1px solid white",borderRadius:"10px",padding:"5px"}}></img>
                    </Images>
                </DownloadContainer>
            </DownloadIcon>
            <Title>
                <span>HOW DOES IT WORK?</span>
            </Title>
            <Video>
                <VideoContainer>
                    <VideoItem loop={false} poster="https://colco.app/image/video_thumbnail/sellingbusinessserviceswebsite_thumbnail.jpg" onClick={(e)=>{
                        if(playing){
                            e.target.pause();
                            setPlaying(false);
                        }
                        else{
                            e.target.play();
                            setPlaying(true);
                        }
                    }}>
                        <source src='https://colco.app/colco-video/colco-video.mp4' type='video/mp4'>
                        </source>
                            Your browser does not support HTML5 video. 
                    </VideoItem>
                </VideoContainer>
            </Video>
            <ColcoSteps style={{marginTop:"40px"}}>
                <Info>
                    <Info1Text>
                        <Text style={{color: "#d0edd2"}}>FIND JOBS, INTERNSHIPS AND FREELANCE GIGS</Text>
                        <p>Get automated recommendations of the jobs and gigs according to your requirement</p>
                    </Info1Text>
                    <InfoImage>
                        <img src='https://colco.app/image/hero_colco_screenshot/intern-jobseekers_steps.jpg' alt='' style={{width:"100%"}}/>
                    </InfoImage>
                </Info>
            </ColcoSteps>
            <ColcoSteps style={{marginTop:"70px"}}>
                    <Info>
                        <InfoImage>
                            <img src='https://colco.app/image/hero_colco_screenshot/hire_emp_steps.png' alt='' style={{width:"100%"}}/>
                        </InfoImage>
                        <Info2Text>
                            <Text style={{color: "#d4d5ff"}}>HIRE PROFESSIONALS AND FREELANCERS</Text>
                            <p>Hire talent according to your needs via 60 seconds audio</p>
                        </Info2Text>
                    </Info>
            </ColcoSteps>
            <ColcoSteps style={{marginTop:"70px"}}>
                <Info>
                    <Info1Text>
                        <Text style={{color: "#FFCDD0"}}>SELL BUSINESS AND PROFESSIONAL SERVICES</Text>
                        <p>Selling services has never been this easy</p>
                    </Info1Text>
                    <InfoImage>
                        <img src='https://colco.app/image/hero_colco_screenshot/selling_business_services_steps.jpg' alt='' style={{width:"100%"}}/>
                    </InfoImage>
                </Info>
            </ColcoSteps>
            <ColcoSteps style={{marginTop:"70px"}}>
                <Info>
                    <InfoImage>
                        <img src='https://colco.app/image/hero_colco_screenshot/home_4.png' alt='' style={{width:"100%"}}/>
                    </InfoImage>
                    <Info2Text>
                        <Text style={{color: "#ECD3FF"}}>SHOWCASE YOUR STARTUP AND PRODUCTS</Text>
                        <p>Tell the world about your amazing startup and products</p>
                    </Info2Text>
                </Info>
            </ColcoSteps>
            <Title style={{marginTop:"150px"}}>FEATURED IN</Title>
            <LogoCarousel>
                <Logos>
                    <Logo src='https://colco.app/image/logo/featured_logo/ibt.png' alt=''/>
                </Logos>
                <Logos>
                    <Logo src='https://colco.app/image/logo/featured_logo/yahoo.png' alt=''/>
                </Logos>
                <Logos>
                    <Logo src='https://colco.app/image/logo/featured_logo/thrive.png' alt=''/>
                </Logos>
                <Logos>
                    <Logo src='https://colco.app/image/logo/featured_logo/latestly.png' alt=''/>
                </Logos>
            </LogoCarousel>
            <Title>USER TESTIMONIALS</Title>
            <Testers>
                <div style={{width:"100%",height:"50px",backgroundColor:"#FFC5C5"}}></div>
                <Users>
                    <User>
                        <UserImage src='https://colco.app/image/testimonial/kreative.png' alt=''/>
                        <UserName>Creative Scoop</UserName>
                        <UserMent>“You guys seriously created a good platform for the artist and keep their work in front of a large audience. It motivates and gives a different vibe to achieve goals. Keep up the good work”</UserMent>
                    </User>
                    <User>
                        <UserImage src='https://colco.app/image/testimonial/bhawana_chitara.png' alt=''/>
                        <UserName>Bhawana Chitara</UserName>
                        <UserMent>"I had a great experience with COLCO. It is a social platform for collaborations. The best thing is, it is open for everyone from college students to creators & professionals "</UserMent>
                    </User>
                    <User>
                        <UserImage src='https://colco.app/image/testimonial/sushmita_biwas.png' alt=''/>
                        <UserName>Sushmita Biiwas</UserName>
                        <UserMent>"COLCO is stepping forward and doing great work continuously. They helped many great talents out there by featuring them on their page. I believe they will continue doing the same and help as many talented people as possible."</UserMent>
                    </User>
                </Users>
            </Testers>
            <DownloadIcon>
                <DownloadContainer>
                    <DownloadTitle>Available on</DownloadTitle>
                    <Images>
                        <img src='https://colco.app/image/logo/googleplay_store.webp' alt='' style={{width:"30%",marginRight:"40px",border:"1px solid white",borderRadius:"10px",padding:"5px"}}></img>
                        <img src='https://colco.app/image/logo/apple_store.webp' alt='' style={{width:"30%",border:"1px solid white",borderRadius:"10px",padding:"5px"}}></img>
                    </Images>
                </DownloadContainer>
            </DownloadIcon>
        </Container>
    )
}

export default HomePage