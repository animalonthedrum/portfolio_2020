import React, {Fragment} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//Components
import NavBar from "../NavBar";
import Footer from "../Footer";

import theme from "../../styles/theme";

const Container = styled(motion.div)`
  width: calc(100% - 100px);
  max-width: ${theme.maxWidth};
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 50px;
  padding-bottom: 25px;
  height:100%;
  min-height:calc(100vh - 100px);
  background-color:#fff;
`;
const Header = styled.div`
  display:flex;
  align-items:baseline;
  justify-content:flex-start;
`; 

const Headline = styled.h1`
  font-family: "futura-pt", sans-serif;
  font-size: 50px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-right:10px;
  color:#e2be30;
  box-shadow: 0 4px 0 0 #e2be30;
`;
const SubHead = styled.h4`
  font-family: "futura-pt", sans-serif;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 1px;
`;

const Hero = styled.div`
  width:100%;
  max-width:calc(100% - 40px);
  padding-right:20px;
  padding-left:20px;
  a {
    width:100%;
    height:100%;
  }
  img {
    width:100%;
    height:auto;
  }
`;

const Button = styled.button`
border:0;
outline:none;
`

const Layout = ({ children, headline, subHead, nextUrl, nextTitle, prevUrl, prevTitle, img, imgAlt, href}) => {
  return (
    <Fragment>
    <Container className="container">
      <NavBar nextUrl={nextUrl} prevUrl={prevUrl} nextTitle={nextTitle} prevTitle={prevTitle} />
      <Header>
      <Headline>
      {headline}
      </Headline>
      <SubHead>
      {subHead}
      </SubHead>
      </Header>
      <Hero>
        <a href={href}>
          <img src={img} alt={imgAlt}/>
        </a>
      </Hero>
      {children}
      <Button>
      <a href={href}>CHECK IT OUT</a>
      </Button>
    </Container>
    <Footer />
    </Fragment>
  );
};

export default Layout;
