import React, { useState } from "react";
import styled from "styled-components";

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

const Content = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  background-color: transparent;
  height: calc(100vh - 100px);
`;

const Header = styled.div`
  background-color: transparent;
  width: calc(100% - 100px);
  max-width: ${theme.maxWidth};
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
  align-items: center;
  overflow: hidden;
  z-index:10;
  > div {
    flex: 1 1 50%;
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
  font-weight: ${(props) => (props.active ? "700" : "500")};
  font-size: 20px;
  box-shadow: ${(props) => (props.active ? "0 4px 0 0 #e2be30" : "")};
  transition: border-bottom ${theme.ease}, color ${theme.ease};
  .night & {
    color: ${theme.night.color};
  }
  :hover {
    cursor: pointer;
    font-weight: 700;
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
    <div>
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
      <Content active={active === 0}>
        <Projects />
      </Content>
      <Content active={active === 1}>
       <About/>
      </Content>
      <Footer />
      <VerticalSocial/>
    </div>
  );
}

export default Home;
