import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-top: 5%;

  @media screen and (max-width: 768px) {
    margin-bottom: 20%;
    margin-top: 20%;
  }
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const EachSkill = styled.p`
  display: flex;
  width: 250px;
  align-items: center;
  margin-right: auto;
  font-size: 1.4em;
  color: #ffffff;
`;

const SkillBarContainer = styled.section`
  width: 300px;
  height: 25px;
  background-color: #ddd;
  border-radius: 20px;
  box-shadow: 5px 5px 5px 3px darkgray inset;
  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;

const Skill = styled.div`
  text-align: right;
  height: 25px;
  color: white;
  border-radius: 20px;

  box-shadow: 5px 5px 5px 3px darkorange inset;
`;

const ListSkills = [
  {
    skill: "HTML",
    icon: faHtml5,
    iconStyle: { marginRight: "10px", color: "red" },
    style: { width: "97%", backgroundColor: "orange" },
  },
  {
    skill: "CSS",
    icon: faCss3Alt,
    iconStyle: { marginRight: "10px", color: "orange" },
    style: { width: "95%", backgroundColor: "orange" },
  },
  {
    skill: "JavaScript",
    icon: faJsSquare,
    iconStyle: { marginRight: "10px", color: "#ffe600" },
    style: { width: "90%", backgroundColor: "orange" },
  },
  {
    skill: "React",
    icon: faReact,
    iconStyle: { marginRight: "10px", color: "blue" },
    style: { width: "80%", backgroundColor: "orange" },
  },
  {
    skill: "Node js",
    icon: faNodeJs,
    iconStyle: { marginRight: "10px", color: "green" },
    style: { width: "50%", backgroundColor: "orange" },
  },
  {
    skill: "GitHub",
    icon: faGithub,
    iconStyle: { marginRight: "10px", color: "black" },
    style: { width: "85%", backgroundColor: "orange" },
  },
];

const Skills = (props) => {
  return (
    <Container>
      <h2>SKILLS</h2>
      <hr style={{ width: "50%", margin: "2rem 0rem 4rem 0rem" }}></hr>
      {ListSkills.map((skill) => (
        <SkillContainer>
          <EachSkill>
            <FontAwesomeIcon
              style={skill.iconStyle}
              icon={skill.icon}
              size="lg"
            />
            {skill.skill}
          </EachSkill>
          <SkillBarContainer>
            <Skill style={skill.style}></Skill>
          </SkillBarContainer>
        </SkillContainer>
      ))}
    </Container>
  );
};

export default Skills;
