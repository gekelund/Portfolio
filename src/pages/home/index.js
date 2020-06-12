import React from "react";
import styled from "styled-components";
import { NavLink, withRouter } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 20px;
  height: 100%;
`;

const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  background-color: orange;
  border: none;
  border-radius: 20px;
  padding: 1.3rem;
  cursor: pointer;
  margin: 3rem;

  &:hover {
    background-color: softorange;
    letter-spacing: 0.3rem;
    box-shadow: 10px 10px 80px white;
  }
`;

const Home = () => {
  return (
    <Container>
      <h1
        style={{
          color: "orange",
        }}
      >
        I AM GUSTAF EKELUND
      </h1>
      <h3>FRONT END DEVELOPER</h3>

      <Link to="/about" exact>
        Get To Know Me
      </Link>
    </Container>
  );
};

export default Home;
