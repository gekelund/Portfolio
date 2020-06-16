import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  justify-content: space-around;
  width: 20rem;
`;

const Link = styled.a`
  color: white;

  &:hover {
    color: orange;
  }
`;

const SideBar = () => {
  return (
    <>
      <Container>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/gustaf-ekelund-799b58140"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </Link>
        </li>
        <li>
          <Link href="tel:0705190809">
            <FontAwesomeIcon icon={faPhone} size="2x" />
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="//mail.google.com/mail/?view=cm&fs=1&tf=1&to=gustafaekelund@email.com"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </Link>
        </li>
      </Container>
    </>
  );
};

export default SideBar;
