import React from "react";
import styled from "styled-components";
import { ProjectContent } from "./content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ColorTheme } from "../../styles/globalStyles";

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
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
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
  background: orange;
  cursor: pointer;
  color: ${ColorTheme.primaryBackground};
  font-weight: bold;

  &:hover {
    background-color: softorange;
    letter-spacing: 0.3rem;
    box-shadow: 10px 10px 80px white;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6rem 2rem 3rem 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Project = () => {
  return (
    <>
      {ProjectContent.map((content) => (
        <GridContainer id={content.title}>
          <Header>
            <Image src={content.image} alt="Project image..." />
          </Header>
          <TechData>
            <SubHeadlineWrapper>
              <h3>{content.title}</h3>

              <LinkButton
                target="_blank"
                href={content.githubRepo}
                rel="noopener noreferrer"
              >
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
            <p>{content.about}</p>
          </Description>
        </GridContainer>
      ))}
    </>
  );
};

const Projects = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <h2 style={{ color: "orange" }}>PROJECTS</h2>
        <hr style={{ width: "80%", margin: "1rem 0rem 1rem 0rem" }}></hr>
        <blockquote>
          Here is some of the projects I been involved in. On my gitHub you can
          find additional projects I worked on.
        </blockquote>
      </ContentWrapper>
      <Project />
      <ContentWrapper>
        <h2>See Github for more projects</h2>
        <a
          style={{ textDecoration: "none", color: "orange" }}
          target="_blank"
          href="https://github.com/gekelund?tab=projects"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="4x" />
        </a>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Projects;
