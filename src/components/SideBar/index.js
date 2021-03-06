import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Container = styled.footer`
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


const CvFrame = styled.div`
border: 2px solid #fff;
padding: 4px;
border-radius: 3px; 
color: #fff;
font-weight: 800; 
font-size: 1rem;
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
        <li>
          <Link
            style={{textDecoration: "none"}}
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1jnL3wXddzfYNbVGg3xjL06w2P0YsJ6sv/view?usp=sharing"
          >
            <CvFrame>
            CV
            </CvFrame>
          </Link>
        </li>
      
      </Container>
    </>
  );
};

export default SideBar;
