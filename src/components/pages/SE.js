import React from 'react';
import {Link} from 'react-router-dom';
import Layout from "./Layout";
import styled from "styled-components";
import {motion} from 'framer-motion'
import img from "../../assets/images/SE/SE_home.jpg"


const data = {
    headline:'Sportsengine',
    subHead:'the home of youth sports',
    nextUrl:'/ironman',
    nextTitle:'Next project',
    prevUrl:'/',
    prevTitle:'Projects',
    img:img,
    imgAlt:'the new Sportsengine homepage',
    href:'https://www.sportsengine.com/'
}
const List = styled.ul`
display:flex;
flex-wrap:wrap;
align-items:center;
padding:0;
margin:0;
list-style:none;
font-family: "futura-pt", sans-serif;
font-size: 18px;
font-weight: 500;
letter-spacing: 1px;
li {
    padding-top:10px;
    padding-bottom:10px;
    padding-left:5px;
    padding-right:5px;
    a {
        color:black;
    }
}
`

const SE = () =>{
    return (
        <Layout 
        headline={data.headline} 
        subHead={data.subHead} 
        nextUrl={data.nextUrl} 
        nextTitle={data.nextTitle} 
        prevUrl={data.prevUrl} 
        prevTitle={data.prevTitle} 
        href={data.href}
        >
        <motion.div
        style={{
            opacity:0,
            y:50,
            }}
          animate={{ opacity: 1, y:0 }}
          transition={{ 
            duration: .2, 
            ease:"easeInOut",
            y:{ type: "spring", duration:.2, bounce: 0.2}, }}
        >
        <p>Over the three years at Sportsengine I have had the opportunity to build hundreds of custom websites, landing pages, integrate with multiple API's, develop custom modules and work both on the front and backend of our Drupal applications. My projects ranged from client site theming, maintenance, site builds, internal marketing campaigns, API architecture and developing a new sportsengine.com product. </p>
        <br/>
        <p><b>Tech:</b> JS, jQuery, PHP, Drupal, Twig, HTML5, SCSS, Jekyll, Liquid, Ajax, API's, Symfony, Redis, Angular, Typescript, AWS, gulp, git, Jira, Sketch, Zeplin and more.</p>
        <p><b>Some of my favorite projects:</b> <b><a href='https://www.sportsengine.com' target="_blank"  rel="noopener noreferrer">Sportsengine</a>, </b> <b><a href='https://www.sportsengine.com/solutions' target="_blank"  rel="noopener noreferrer">Sportsengine HQ</a></b>, <b><Link to='/ironman'>IRONMAN</Link></b> and <b><Link to='/pgajr-league'>PGA JR League</Link></b></p>
        <List>
            <b>Other noteable works:</b>
            <li><a href="https://www.gomotionapp.com/solutions" target="_blank"  rel="noopener noreferrer">GoMotion</a></li>
            <li><a href="https://www.teamunify.com/swim-team-management-software/mobile/" target="_blank"  rel="noopener noreferrer">Team Unify</a></li>
            <li><a href="https://uk.teamunify.com/solutions" target="_blank"  rel="noopener noreferrer">Team Unify UK</a></li>
            <li><a href='https://www.spurssportsacademy.com/' target="_blank"  rel="noopener noreferrer">Spurs Sports Academy</a></li>
            <li><a href="https://www.uslsoccer.com/" target="_blank"  rel="noopener noreferrer">USL Soccer</a></li>
            <li><a href="https://www.easternhockeyleague.org/" target="_blank"  rel="noopener noreferrer">Eastern Hockey League</a></li>
        </List>
        </motion.div>
        </Layout>
    )
}

export default SE;