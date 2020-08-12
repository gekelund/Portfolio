import React from "react";
import { Route } from "react-router-dom";
import Home from "../../pages/home";
import About from "../../pages/about";
import Projects from "../../pages/projects";
import Skills from "../../pages/skills";
import Resume from "../../pages/resume";
import Contact from "../../pages/contact";


const Paths = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/skills" component={Skills} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
      
    </>
  );
};

export default Paths;
