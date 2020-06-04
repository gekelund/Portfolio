import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 20px;
  height: 100%;
`;

const Home = () => {
  return (
    <Container>
      <h1>I AM GUSTAF EKELUND</h1>
      <h3>FRONT END DEVELOPER</h3>
    </Container>
  );
};

export default Home;
