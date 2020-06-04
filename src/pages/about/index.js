import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction column;
  border: 2px solid green;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 20px;
  height: 100%;
`;

const About = () => {
  return (
    <Container>
      <h1>ABOUT ME</h1>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
    </Container>
  );
};

export default About;
