import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

//Components
import Header from '../components/Header'
import Footer from "../components/Footer"
//Styles
import {
    HomeContainer, 
    HomeMenu,
    HeaderDiv
} from '../styles/homeStyles'

const containerVariants = {
    hidden: { 
      opacity: 0, 
    },
    visible: { 
      opacity: 1,
      transition: { delay: .2, duration: 1.5 },
      
    },
    exit: {
      x: "-100vh",
      transition: { ease: 'easeInOut' }
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible:      {
        opacity: 1,
        scale: 1,
        transition: {
          delay: 0,
          when: "beforeChildren",
          staggerChildren: 0.3
        }
      }
  };

  const listVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type:"tween",
        ease:"easeIn",
        duration:.5
      }
    }
  };

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
      path: "/frank-and-tawnee",
    },
  ]

const Home = () => {
  return (
    <HomeContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >

    <HeaderDiv>
        <div className="menuView">
            <h3>Projects /</h3>
            <h3>About</h3>
        </div>
<Header/>
    </HeaderDiv>
    <HomeMenu
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
    >
        {navRoutes.map(route => (
            <motion.li
                key={route.id}
                variants={listVariants}
            >
                <Link to={`${route.path}`}>
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
        </HomeMenu>
       <Footer/>
    </HomeContainer>
  )
}

export default Home;