import React from "react";
import styled from "styled-components";
import { ProjectContent } from "./content";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  padding: 2rem;
  margin: 3rem;
  border: 2px solid white;
  border-radius: 2rem;
`;

const ListStyle = styled.ul`
  list-style: none;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
`;

const ListItems = styled.li`
  padding: 0.5rem;
`;

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>

      {ProjectContent.map((content) => (
        <Container>
          <h3>{content.title}</h3>
          <p>{content.about}</p>

          <ListStyle>
            <ListItems>Product Owner: {content.owner}</ListItems>
            <ListItems>Company: {content.company}</ListItems>
            <ListItems>Framework: {content.framework}</ListItems>
            <ListItems>Bakend: {content.backend}</ListItems>
            <ListItems>Styling: {content.styling}</ListItems>
          </ListStyle>
        </Container>
      ))}

      <h2>See Github for more projects</h2>
    </>
  );
};

export default Projects;
