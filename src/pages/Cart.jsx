import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import styled from 'styled-components'
import Footer from '../components/Footer';

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 20px;
`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
`;

const TopTexts = styled.div``;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`;

const Bottom = styled.div``;


const Cart = () => {
  return (
    <div>
        <Container>
              <Navbar />
              <Announcement />
              <Wrapper>
                  <Title>LAMPADAS</Title>
                  <Top>
                      
                      <TopButton>CONTINUAR COMPRANDO</TopButton>
                      <TopTexts>
                          <TopText>Lampadas (2)</TopText>
                          <TopText>Itens desejados (0)</TopText>
                      </TopTexts>
                      <TopButton>FINALIZAR COMPRAS</TopButton>
                  </Top>
                  <Bottom></Bottom>
              </Wrapper>
              <Footer/>
        </Container>
    </div>
  )
}

export default Cart