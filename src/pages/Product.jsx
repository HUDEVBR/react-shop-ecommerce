import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 800;
`;

const Desc = styled.p`
    font-weight: 400;
    margin: 20px 0px;
    font-size: 18px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
    
`;

const FilterContainer = styled.div`
    width: 70%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;

`;

const Filter = styled.div`
    display: flex;
    align-content: center;
    
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
    padding: 0px 20px;
`;

const FilterBrandTypes = styled.label`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow-wrap: normal;

`;

const FilterBrand = styled.label`
    width: 150%;
    color: black;
    margin:5px 5px;
    display: block;
    cursor: pointer;

`;
const FilterValues = styled.select`
    height: 5vh;
`;

const FilterPrice = styled.option`
    
`;

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
                  <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium eaque iure atque? Hic vitae voluptatibus maiores exercitationem cumque odit quisquam officiis harum eius. Rerum vero corrupti debitis ea facilis quidem!</Desc>
                  <Price>R$ 50,00</Price>
                  <FilterContainer>
                  <Filter>
                          <FilterTitle>Marca:</FilterTitle>
                                <FilterBrandTypes>
                                    <FilterBrand value="0">3M</FilterBrand>
                                    <FilterBrand value="1">G.E. General Eletrics</FilterBrand>
                                    <FilterBrand value="2">Cobrecon</FilterBrand>
                                    <FilterBrand value="3">Lorenzetti</FilterBrand>
                                    <FilterBrand value="4">Lumifacil</FilterBrand>
                                    <FilterBrand value="5">Megatron</FilterBrand>
                                    <FilterBrand value="6">Papaiz</FilterBrand>
                                    <FilterBrand value="7">Starret</FilterBrand>
                                    <FilterBrand value="8">Taschibra</FilterBrand>
                                    <FilterBrand value="9">Imperial</FilterBrand>
                                </FilterBrandTypes>
                  </Filter>
                  <Filter>
                      <FilterTitle >Preços:</FilterTitle>    
                          <FilterValues>
                            <FilterPrice>Até R$ 50</FilterPrice>
                            <FilterPrice>De R$ 51 Até R$ 100</FilterPrice>
                            <FilterPrice>De R$ 101 Até R$ 200</FilterPrice>
                            <FilterPrice>Mais de R$ 201</FilterPrice>
                        </FilterValues>
                  </Filter>
              </FilterContainer>
              </InfoContainer>
          </Wrapper>
          <Newsletter />
          <Footer/>
      </Container>
  )
}

export default Product