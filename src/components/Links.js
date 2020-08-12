import React from "react"
import styled, { css } from "styled-components"
import {motion} from "framer-motion"
import { Link } from "react-router-dom"

export const Container = styled.div `
flex-grow:1;
margin:0 auto;
padding:0 32px;
width:100%;
height:100vh;
${props => 
    props.fluid && 
    css `
        padding:0;
        margin:0;
        max-width:100%;
`}
`
export const Flex = styled(motion.div)`
    position:relative;
    display:flex;
    align-items:center;
    
    ${props => 
        props.spaceBetween && 
        css`
            justify-content:space-between;
    `}

    ${props => 
        props.flexEnd && 
        css`
            justify-content:flex-end;
    `}

    ${props => 
        props.alignTop && 
        css`
            align-items:flex-start;
    `}

    ${props => 
        props.noHeight && 
        css`
            height:0;
    `}
`

const NavHeader = styled.div`
  h2 {
    color: ${props => props.theme.background};
  }
`

const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  ul {
    padding: 0;
    li {
      list-style: none;
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 900;
      overflow: hidden;
      padding-top:10px;
      padding-bottom:10px;
      z-index:2;
      .link {
        color: ${props => props.theme.background};
        position: relative;
        display: flex;
        align-items: center;
        .arrow {
          margin-right: 8px;
        }
      }
      svg {
        width: 100px;
        path {
          fill: ${props => props.theme.background};
        }
      }
    }
  }
`

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const navRoutes = [
  {
    id: 0,
    title: "IRONMAN",
    path: "/ironman",
  },
  {
    id: 1,
    title: "SportsEngine",
    path: "/sportsengine",
  },
  {
    id: 2,
    title: "Becca Neely",
    path: "/becca-neely",
  },
  {
    id: 3,
    title: "PGAJr League",
    path: "/pgajr-league",
  },
  {
    id: 4,
    title: "Hitch Adventures",
    path: "/hitch-adventures",
  },
  {
    id: 5,
    title: "Frank & Tawnee",
    path: "/frank-tawnee",
  },
]

const Links = () => (
  <Container>
    <NavHeader>
      <Flex
        noHeight
        alignTop
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -50, opacity: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
      >
        <h2 to="/">Projects /</h2>
        <h2 to="/about">About</h2>
      </Flex>
    </NavHeader>
    <NavList>
      <motion.ul variants={container} initial="hidden" animate="show">
        {navRoutes.map(route => (
          <motion.li
            key={route.id}
            variants={item}
            // animate={{y:toggleMenu ? -50 : 0}}
            // transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
            // whileHover={{ scale: 1.1 }}
            // whileTap={{ scale: 0.95 }}
          >
            <Link to={`/${route.path}`}>
              <motion.div
                initial={{ x: -100 }}
                className="link"
                whileHover={{
                  x: -40,
                  transition: {
                    duration: 0.4,
                    ease: [0.6, 0.05, -0.01, 0.9],
                  },
                }}
              >
                <span className="arrow">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 101 57"
                  >
                    <path
                      d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                      fill="#000"
                      fillRule="evenodd"
                    ></path>
                  </motion.svg>
                </span>
                {route.title}
              </motion.div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </NavList>
  </Container>
)

export default Links
