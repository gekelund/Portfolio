import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { navLinks } from "./navLinks.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const NavContainer = styled.nav`
  position: fixed;
  left: 0;
  top: 0px;
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UlWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 50%;

  @media screen and (max-width: 1000px) {
    position: fixed;
    right: 2rem;
    transition: 300ms ease all;
  }
`;

const Links = styled.li`
  list-style: none;
  padding: 20px;
  display: flex;
  align-items: center;
`;

const Menu = styled.figure`
  display: none;

  @media screen and (max-width: 1000px) {
    display: flex;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    height: auto;
    z-index: 2;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  transition-timing-function: ease-in-out;
  transition: 0.4s;

  &.active {
    border-left: 5px solid blue;
    transform: translate(100px);
    transition-timing-function: ease-in-out;
    transition: 0.4s;
  }
  @media screen and (max-width: 1000px) {
    transform: translate(0px);

    &.active {
      border-left: 5px solid blue;
      transform: translate(0px);
    }
  }
`;

const ResponsivNavigation = ({ hoverBorder }) => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <NavContainer>

      <UlWrapper style={navOpen ? { bottom: "150px" } : { bottom: "-90%" }}>

        <Menu onClick={() => setNavOpen(!navOpen)}>
          <FontAwesomeIcon size="2x" icon={faBars} />
        </Menu>
        {navLinks.map((link, index) => (
          <StyledNavLink
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
            onClick={() => setNavOpen(!navOpen)}
            style={{

              borderLeft:
                hoverIndex === index ? hoverBorder || "5px solid blue" : "",

              textDecoration: "none",
            }}
            key={link.textDecoration}
            to={link.path}
            exact
          >


            <Links key={link.text}>{link.text}</Links>
          </StyledNavLink>
        ))}
      </UlWrapper>
    </NavContainer>
  );
};

export default withRouter(ResponsivNavigation);
