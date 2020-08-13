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

const Wrapper = styled.a`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 250px;
  padding-inline-end: 55px;
  margin: 0;
  text-decoration: none;
  color: white;
`;

const Contact = () => {
  return (
    <Container>
      <h2>Contact</h2>
      <hr style={{ width: "50%", margin: "2rem 0rem 4rem 0rem" }}></hr>
      <Wrapper href="tel:0705190809">
        <FontAwesomeIcon icon={faPhone} size="lg" />
        <h3>Phone</h3>
      </Wrapper>
      <a href="tel:0705190809" style={{textDecoration: "none", marginTop: "0", color: "orange", paddingRight: '25px'  }}>+46 (0)70 519 08 09</a>
      <Wrapper href="//mail.google.com/mail/?view=cm&fs=1&tf=1&to=gustafaekelund@email.com">
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
        <h3>Mail</h3>
      </Wrapper>
      <a href="//mail.google.com/mail/?view=cm&fs=1&tf=1&to=gustafaekelund@email.com" style={{textDecoration: "none", marginTop: "0", color: "orange", paddingRight: '25px'  }}>
        gustafaekelund@gmail.com
      </a>
      <Wrapper href="https://linkedin.com/in/gustaf-ekelund-799b58140">
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
        <h3>LinkedIn</h3>
      </Wrapper>
      <a href="https://linkedin.com/in/gustaf-ekelund-799b58140" style={{ textDecoration: "none", marginTop: "0", color: "orange", paddingRight: '25px'  }}>
        linkedin.com/in/gustaf-ekelund-799b58140
      </a>
    </Container>
  );
};

export default Contact;
