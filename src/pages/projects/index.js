import React, { useState } from "react";
import styled from "styled-components";
import { ProjectContent } from "./content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const GridContainer = styled.div`
  height: 100%;
  display: grid;
  margin-bottom: 4rem;

  grid-template-areas:
    ". header . techData ."
    ". header . techData ."
    ". header . description ."
    ". header . description .";
  grid-template-rows: reapet(3, 1fr);
  grid-template-columns: 1fr 400px 30px 500px 1fr;

  @media screen and (max-width: 768px) {
    grid-template-areas:
      ". header ."
      ". techData ."
      ". description .";
    grid-template-rows: reapet(3, 1fr);
    grid-template-columns: 30px 1fr 30px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  grid-area: header;
  place-self: center;
`;

const TechData = styled.div`
  grid-area: techData;
  place-self: start center;
  width: 100%;
`;

const Description = styled.div`
  grid-area: description;
  place-self: center;
`;

const ListStyle = styled.ul`
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const ListItems = styled.li`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  padding: 0.2rem;
  font-size: 1.2rem;
`;

const Span = styled.span`
  font-weight: normal;
  font-size: 1.1rem;
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
`;

const SubHeadlineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 2px solid white;
`;

const LinkButton = styled.a`
  text-decoration: none;
  border-radius: 20px;
  border: none;
  padding: 10px 20px 10px 20px;
  background: blue;
  cursor: pointer;
  color: white;
  font-weight: bold;

  &:hover {
    background-color: orange;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
  justify-content: center;
  align-items: center;
`;

const Project = () => {
  return (
    <>
      {ProjectContent.map((content) => (
        <GridContainer id={content.title}>
          <Header>
            <Image src={content.image} />
          </Header>
          <TechData>
            <SubHeadlineWrapper>
              <h2>{content.title}</h2>

              <LinkButton target="_blank" href={content.githubRepo}>
                GitHub
              </LinkButton>
            </SubHeadlineWrapper>
            <ListStyle>
              <ListItems>
                Product Owner:
                <Span>{content.owner}</Span>
              </ListItems>
              <ListItems>
                Company:
                <Span>{content.company}</Span>
              </ListItems>
              <ListItems>
                Framework:<Span>{content.framework}</Span>
              </ListItems>
              <ListItems>
                Bakend:
                <Span>{content.backend}</Span>
              </ListItems>
              <ListItems>
                Styling: <Span>{content.styling}</Span>
              </ListItems>
            </ListStyle>
          </TechData>
          <Description>
            <p style={{ fontSize: "1.2rem" }}>{content.about}</p>
          </Description>
        </GridContainer>
      ))}
    </>
  );
};

const Projects = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <h1>Projects</h1>
        <p>
          Here is some of the projects I been involved in. On my gitHub you can
          find additional projects I worked on.
        </p>
      </HeaderWrapper>
      <Project />

      <h2>See Github for more projects</h2>
      <a
        style={{ textDecoration: "none", color: "orange" }}
        target="_blank"
        href="https://github.com/gekelund?tab=projects"
      >
        <FontAwesomeIcon icon={faGithub} size="4x" />
      </a>
    </Wrapper>
  );
};

export default Projects;
