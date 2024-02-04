import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components"
import disjuntor from "../assets/ge_disjuntor_01-removed.png";


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    /* background-color: #2e3092; */
    position: relative;
    overflow: hidden;
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
    display: flex;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 0.45;
`;

const Image = styled.img`
    position: relative;
    top: 25%;
    left: 20%;
   height: 45%;
   width: 30%;
`;

const InfoContainer = styled.div`
    flex: 0.55;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
    color: #000000;  
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 800;
    letter-spacing: 3px;
    color: #000000;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    font-weight: 800;
    background-color: transparent;
    cursor: pointer;
    color: #000000;
`;

const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src={disjuntor} width={150} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>DISJUNTORES</Title>
                        <Desc>
                            Disjuntor para chuveiro elétrico, fiação de casas e apartamentos e demais eletrodomésticos
                        </Desc>
                        <Button>Comprar</Button>
                    </InfoContainer>
                </Slide>
                <Slide>
                    <ImgContainer>
                        <Image src={disjuntor} width={150} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>DISJUNTORES</Title>
                        <Desc>
                            Disjuntor para chuveiro elétrico, fiação de casas e apartamentos e demais eletrodomésticos
                        </Desc>
                        <Button>Comprar</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
};


export default Slider