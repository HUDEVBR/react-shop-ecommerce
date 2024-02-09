import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
`;
const Image = styled.img`
max-width: 100%;
`;
const Info = styled.div``;
const Title = styled.h1``;
const Button = styled.button``;

const CategoryItem = ({item}) => {
  return (
      <Container>
      <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>COMPRE AGORA</Button>
        </Info>
      </Container>
  )
}

export default CategoryItem