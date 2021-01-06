import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import theme from "../styles/theme";

//Components
import Marquee from "../components/Marquee";
import VerticalSocial from "./verticalSocial";

const Container = styled(motion.div)`
  width: calc(100% - 40px);
  background-color: #272525;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100px;
  flex: 1;
  margin-top:auto;
  @media (max-width: ${theme.breakpoint.md}) {
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    flex-direction: column;
    height: 100%;
    width: calc(100% - 30px);
  }
  @media (max-width: ${theme.breakpoint.sm}) {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: column;
    height: 100%;
    width: calc(100% - 20px);
  }
  .contact {
    justify-content: flex-end;
    display: flex;
    @media (max-width: ${theme.breakpoint.sm}) {
      justify-content: center;
    }
    a {
      font-family: "futura-pt", sans-serif;
      font-weight: 500;
      font-size: 24px;
      color: #eee7ca;
      letter-spacing: 2px;
      display: flex;
      align-items: center;
      text-decoration: none;
      position: relative;
      ::after {
        content: "";
        width: 0;
        height: 4px;
        position: absolute;
        bottom: 10px;
        left: 0;
        background-color: ${theme.hover};
        transition: width ${theme.ease};
      }
      :hover {
        ::after {
          width: 100%;
        }
      }
    }
  }
  .logo {
    display: flex;
    align-items: center;
    a {
      font-family: "futura-pt", sans-serif;
      font-weight: 700;
      font-size: 40px;
      color: #eee7ca;
      text-transform: uppercase;
      letter-spacing: 5px;
      display: flex;
      align-items: center;
      text-decoration: none;
    }
    span {
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background-color: #d08e43;
      margin-left: 10px;
      margin-right: 15px;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <div className="logo">
        <Link to="/">Brett</Link>
        <span></span>
        <Link to="/">Codes</Link>
      </div>
      <Marquee>
        <p>
          Under Construction. Coming Soon. More on the way. Thanks for visiting.
          Excuse the mess. Have a great day.
        </p>
        <p>
        &nbsp;Under Construction. Coming Soon. More on the way. Thanks for visiting.
          Excuse the mess. Have a great day.
        </p>
      </Marquee>
      <div className="contact">
        <a href="mailto:miller.brett.andrew@gmail.com">miller.brett.andrew@gmail.com</a>
      </div>
      <VerticalSocial horizontal='true'/>
    </Container>
  );
};

export default Footer;
