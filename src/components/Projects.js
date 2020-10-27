import React from "react"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//Styled Components
import { Container, HomeMenu } from '../styles/homeStyles'


const navRoutes = [
  {
    id: 0,
    title: "SportsEngine",
    path: "/sportsengine",
    // path: "https://www.sportsengine.com/",
  },
  {
    id: 1,
    title: "IRONMAN",
    path: "/ironman",
    // path: "https://www.ironman.com/",
  },
  {
    id: 2,
    title: "PGAJr League",
    path: "/pgajr-league",
    // path: "https://www.pgajrleague.com/",
  },
  {
    id: 3,
    title: "Hitch Adventures",
    path: "/hitch-adventures",
    // path: "https://www.hitchadventures.com/",
  },
  {
    id: 4,
    title: "Becca Neely",
    path: "/becca-neely",
    // path: "https://www.beccaneely.com/",
  },
  {
    id: 5,
    title: "Frank & Tawnee",
    path: "/frank-tawnee",
    // path: "https://frankandtawnee.com/",
  }
]

const Projects = ( ) => {
  
  const menuVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.2,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    exit:{x:-100, scale:0}
  };
  
  const listVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeIn",
        duration: 0.5,
      },
    },
  };

  return (
    <>
    <Container>
      <HomeMenu
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {navRoutes.map((route) => (
          <motion.li className='item' key={route.id} variants={listVariants}>
            <Link to={`${route.path}`}>
            {/* <a href={route.path} target='_blank'> */}
              <motion.div className='item'
                initial={{ x: -100 }}
                whileHover={{
                  x: -40,
                  transition: {
                    duration: 0.4,
                    ease: [0.6, 0.05, -0.01, 0.9],
                  },
                }}
              >
                <div className="arrow">
                  <motion.svg
                  initial={{ x: -50 }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 101 57"
                  >
                    <path
                      d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                      fill="#000"
                      fillRule="evenodd"
                    ></path>
                  </motion.svg>
                </div>
                {route.title}
              </motion.div>
            </Link>
            {/* </a> */}
          </motion.li>
        ))}
      </HomeMenu>
      </Container>
    </>
  )
}

export default Projects;
