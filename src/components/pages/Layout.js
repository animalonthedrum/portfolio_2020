import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//Components
import NavBar from "../NavBar";
import Footer from "../Footer";

import theme from "../../styles/theme";

const Container = styled(motion.div)`
  width: calc(100% - 100px);
  max-width: ${theme.maxWidth};
  margin-left:auto;
  margin-right:auto;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 50px;
  padding-bottom: 25px;
  height:100%;
  min-height:calc(100vh - 100px);
  background-color:${theme.day.bg};
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

const Button = styled.button`
border:0;
outline:none;
`

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  }
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: .5
};


const Layout = ({ children, headline, subHead, nextUrl, nextTitle, prevUrl, prevTitle, href}) => {
  return (
    <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
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
      {children}
      <Button>
      <a href={href} target="_blank"  rel="noopener noreferrer">Visit {headline}</a>
      </Button>
    </Container>
    <Footer />
    </motion.div>
  );
};

export default Layout;
