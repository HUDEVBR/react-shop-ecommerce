import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Wrapper = styled.div``;
const ImgContainer = styled.div``;
const Image = styled.img`
    width: 20%;
    margin-left: 30px;
`;
const InfoContainer = styled.div``;
const Title = styled.div``;
const Desc = styled.div``;
const Price = styled.div``;

const Product = () => {
  return (
      <Container>
          <Navbar />
          <Announcement />
          <Wrapper>
              <ImgContainer>
                  <Image src="../../images/taschibra_luminaria_01.png" />
              </ImgContainer>
              <InfoContainer>
                  <Title>Produto</Title>
                  <Desc>Descrição</Desc>
                  <Price>R$ 50,00</Price>
              </InfoContainer>
          </Wrapper>
          <Newsletter />
          <Footer/>
      </Container>
  )
}

export default Product