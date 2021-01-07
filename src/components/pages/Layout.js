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
  p {
    font-family: "futura-pt", sans-serif;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    &:first-of-type {
      text-indent:10px;
    }
    b {
      font-family: "futura-pt", sans-serif;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 1px;
    }
    a {
      color:black;
    }
  }
  
`;
const Header = styled.div`
  display:flex;
  flex-wrap:wrap;
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
  color:${theme.accent};
  box-shadow: 0 4px 0 0 ${theme.accent};
  @media(max-width: ${theme.breakpoint.sm}) {
    font-size:36px;
  }
  a {
    text-decoration:none;
    color: ${theme.accent};
    transition:color .2s linear;
    &:hover {
      color:${theme.hover};
      cursor:pointer;
    }
  }
`;
const SubHead = styled.h4`
  font-family: "futura-pt", sans-serif;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 1px;
`;

const Flex = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const Button = styled.button`
outline:0;
border:0;
border-bottom:8px solid ${theme.accent};
background-color:${theme.night.bg};
display:flex;
justify-content:center;
align-items:center;
margin-top:50px;

a {
  text-decoration:none;
  color:${theme.night.color};
  font-family: "futura-pt", sans-serif;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-left:15px;
  padding-right:15px;
  padding-top:15px;
  padding-bottom:15px;
  transition:color .2s linear;
  display:flex;
  align-items:center;
  @media(max-width: ${theme.breakpoint.sm}) {
    font-size: 14px;
  }
  div {
    margin-right:5px;
    width:30px;
    height :100%;
    svg {
      path { 
        fill:transparent;
        transform:translateX(-20px);
        transition: fill .2s linear, transform .2s linear;
      }
    }
  }
  &:hover {
    cursor:pointer;
    color:${theme.hover};
    svg {
      path {
        fill:${theme.hover};
        transform:translateX(0);
      }
    }
  }

}
`

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0.7,
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
      <a href={href}>{headline}</a>
      </Headline>
      <SubHead>
      {subHead}
      </SubHead>
      </Header>
      {children}
      <Flex>
      <Button>
      <a href={href} target="_blank"  rel="noopener noreferrer">
      <div>
      <motion.svg
        initial={{ x: 0 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 101 57"
        >
          <path
            d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
            fillRule="evenodd"
          ></path>
        </motion.svg>
      </div>
      Visit {headline}.COM
      </a>
      </Button>
      </Flex>
    </Container>
    <Footer />
    </motion.div>
  );
};

export default Layout;
