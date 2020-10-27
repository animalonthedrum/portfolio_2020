import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion"; 

//Components
import ToggleButton from "./toggleButton";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";
import VerticalSocial from "./verticalSocial";

//Hooks
import useNightMode from "../hooks/use-night-theme";

//Styles
import theme from "../styles/theme";

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  background-color: transparent;
  height: 100%;
  flex: 6;
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};
`;

const Header = styled.div`
  background-color: transparent;
  width: calc(100% - 100px);
  /* max-width: ${theme.maxWidth}; */
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
  align-items: center;
  overflow: hidden;
  z-index:10;
  flex:1;
  margin:0 auto;
  @media(max-width: ${theme.breakpoint.sm}) {
    width: calc(100% - 30px);
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  > div {
    flex: 1 1 50%;
    @media(max-width: ${theme.breakpoint.sm}) {
      flex:1 1 auto;
    }
  }
  span {
    color: ${theme.day.color};
    font-size: 20px;
    font-weight: 500;
    padding-left: 10px;
    padding-right: 10px;
    .night & {
      color: ${theme.night.color};
    }
  }
`;

const Tab = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${theme.day.color};
  cursor: pointer;
  font-family: "futura-pt", sans-serif;
  font-weight: 500;
  transform: scale(${(props) => (props.active ? "1.1" : "1")});
  font-size: 20px;
  box-shadow: ${(props) =>
    props.active ? "inset 0 -6px 0 0 #e2be30" : "0 0 0 0 #e2be30"};
  transition: box-shadow ${theme.ease}, color ${theme.ease},
    transform ${theme.ease}, font ${theme.ease};
  .night & {
    color: ${theme.night.color};
  }
  :hover {
    cursor: pointer;
  }
`;

function Home() {
  const [active, setActive] = useState(0);
  const [nightMode, setNightMode] = useNightMode();

  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  return (
    <HomePage>
    <motion.div
    style={{
      opacity:0,
      y:-100,
      }}
    animate={{ opacity: 1, y:0 }}
    transition={{ duration: 2, ease:"easeInOut" }}>
      <Header>
        <div>
          <Tab onClick={handleClick} active={active === 0} id={0}>
            Projects
          </Tab>
          <span> | </span>
          <Tab onClick={handleClick} active={active === 1} id={1}>
            About
          </Tab>
        </div>
        <ToggleButton nightMode={nightMode} setNightMode={setNightMode} />
      </Header>
      </motion.div>
      <Content active={active === 0}>
        <Projects />
      </Content>
      <Content active={active === 1} center="center">
        <About />
      </Content>
      <motion.div
    style={{
      opacity:0,
      y:100,
      }}
    animate={{ opacity: 1, y:0 }}
    transition={{ 
      duration: 1, 
      ease:"easeInOut",
      y:{ type: "spring", duration:1, bounce: 0.5 }, }}>
      <Footer />
      </motion.div>
      <motion.div
    style={{
      opacity:0,
      x:100,
      }}
    animate={{ opacity: 1, x:0 }}
    transition={{ duration: 1, delay:3, ease:"easeInOut" }}>
      <VerticalSocial />
      </motion.div>
    </HomePage>
  );
}

export default Home;
