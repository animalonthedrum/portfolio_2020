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
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 25px;
  padding-bottom: 25px;
  height:100%;
  min-height:100vh;
  background-color:#fff;
`;
const Headline = styled.h1`
  font-family: "futura-pt", sans-serif;
  font-size: 50px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 12px;
`;

const Layout = ({ children, headline, nextUrl, nextTitle, prevUrl, prevTitle}) => {
  return (
    <Container className="container">
      <NavBar nextUrl={nextUrl} prevUrl={prevUrl} nextTitle={nextTitle} prevTitle={prevTitle} />
      <Headline>{headline}</Headline>
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
