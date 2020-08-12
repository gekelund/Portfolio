import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  height: 100%;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 250px;
  padding-inline-end: 55px;
  margin: 0;
  
`;

const Contact = () => {
  return (
    <Container>
      <h2>Contact</h2>
      <hr style={{ width: "50%", margin: "2rem 0rem 4rem 0rem" }}></hr>
      <Wrapper>
        <FontAwesomeIcon icon={faPhone} size="lg" />
        <h3>Phone</h3>
      </Wrapper>
      <p style={{ marginTop: "0", color: "orange", paddingRight: '25px'  }}>+46 (0)70 519 08 09</p>
      <Wrapper>
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
        <h3>Mail</h3>
      </Wrapper>
      <p style={{ marginTop: "0", color: "orange", paddingRight: '25px'  }}>
        gustafaekelund@gmail.com
      </p>
      <Wrapper>
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
        <h3>LinkedIn</h3>
      </Wrapper>
      <p style={{ marginTop: "0", color: "orange", paddingRight: '25px'  }}>
        linkedin.com/in/gustaf-ekelund-799b58140
      </p>
    </Container>
  );
};

export default Contact;
