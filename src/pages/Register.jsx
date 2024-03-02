import styled from "styled-components";
import Logo from '../../public/images/background_jfmateriais.png'

const Container = styled.div`
    width: 100vw;
    height: 100px;
    background-image: url(${Logo});
    `;

const Wrapper = styled.div``;

const Title = styled.h1``;

const Form = styled.form``;

const Input = styled.input``;

const Agreement = styled.span``;

const Button = styled.button``;

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