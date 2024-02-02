import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components"
import backgroundLogo from "../assets/background_jfmateriais_01.png";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-image: url(${backgroundLogo});
    background-repeat: no-repeat;
    position: relative;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.6;
`;

const Wrapper = styled.div`
    height: 100%;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    
`;

const Image = styled.img`
    display: flex;
    align-items: center;
    width: 100vw;
    height: fit-content;
`;

const InfoContainer = styled.div`
    flex: 1;
`;


const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                <Slide>
                <ImgContainer>
                    
                </ImgContainer>
                <InfoContainer></InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
} 


export default Slider