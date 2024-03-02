import styled from "styled-components";
import logo from "../assets/images/background_jfmateriais.png"


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2)),url(${logo}) center;
    background-size: 100vw;
    background-repeat: no-repeat;
    `;

const Wrapper = styled.div``;

const Title = styled.h1``;

const Form = styled.form``;

const Input = styled.input``;

const Agreement = styled.span``;

const Button = styled.button``;
const Image = styled.img``;

const Register = () => {
  return (
        <Container>
          <Wrapper>
              <Title>Crie sua conta</Title>
              <Form>
                  <Input placeholder="Nome" />
                  <Input placeholder="Sobrenome" />
                  <Input placeholder="Nome de usuário" />
                  <Input placeholder="Email" />
                  <Input placeholder="Senha" />
                  <Input placeholder="Confirmar senha" />
                  <Agreement>Ao estar criando esta conta, Eu concedo o processamento dos meus
                      dados pessoais de acordo com a <b>POLÍTICA DE PRIVACIDADE</b> e a <b>LGPD</b>.
                  </Agreement>
                  <Button>Criar</Button>
              </Form>
          </Wrapper>
        </Container>
  )
}

export default Register