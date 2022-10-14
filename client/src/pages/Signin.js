import React from 'react'
import styled from "styled-components";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background:
    url("https://images.unsplash.com/photo-1533745848184-3db07256e163?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VsY29tZXxlbnwwfHwwfHw%3D&w=1000&q=80")
    center;
background-size: cover;
display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Signin = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>FORGOT YOUR PASSWORD?</Link>
        
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Signin;