import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  padding: 0 20% 0 20%;
  margin: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

const About = () => {
  return (
    <Container>
      <h2>ABOUT ME</h2>
      <hr style={{ width: "80%", margin: "2rem 0rem 4rem 0rem" }}></hr>
      <p>
        I am an ambitious individual with great passion for solving problems. I
        am currently completed my studies at KYH in frontend development with focus
        on javascript, React, HTML, CSS, node but also to work after the agile
        processes. I have a background in management and engineering where I
        have a management degree from Martin College, Sydney Australia and a
        Bachelor's degree in Biomechanical engineering from Halmstad University.{" "}
      </p>

      <p>
        I got really interested in coding when my girlfriend
        who is currently working as a frontend developer introduced me to it. I
        immediately loved the problem solving aspect of it and the logic behind
        it. So I decided then and there that this is what I want to do for the
        rest of my career. My previous experience in both management and
        engineering enables me to effectively communicate with wide range of
        people and understand the technical aspects.
      </p>
      <p>
        My passion ever since I was a child is history. In my early twenties I
        decided that I wanted to visit some of the places I had heard and read about
        as a child. I traveled both to Asia and South
        America to experience the culture and history. I then decided to travel to Australia for a year to study.
      </p>
    </Container>
  );
};

export default About;
