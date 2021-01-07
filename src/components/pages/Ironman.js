import React from 'react';
import Layout from "./Layout";
import styled from 'styled-components';
import {motion} from 'framer-motion'


const data = {
    headline:'IRONMAN',
    subHead:'website redesign & search functionality',
    nextUrl:'/pgajr-league',
    nextTitle:'Next project',
    prevUrl:'/sportsengine',
    prevTitle:'Prev project',
    href:'https://www.ironman.com/'
}

const List = styled.ul`
display:flex;
flex-wrap:wrap;
flex-direction:column;
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
    a {
        color:black;
    }
}
`

const Ironman = () =>{
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
        <p>Sportsengine partnered with IRONMAN (World Triathlon Corporation) to overhaul/design and build their flagship site&mdash; which was almost a decade old and came with out-dated user experience trends, functionality issues and cumbersome administration processes. The project focused on restructuring content and design to be athlete-first as well as streamlining the experience to get athletes to race info and registrations faster.</p>
        <p>After many, many, rounds of design revisions and POC's, I had the green light to begin theming and building their site. There were many SportsEngine firsts on this one that needed innovative solutions. Some of these highlights were:</p>
        <List>
        <li>A keyword race search which is filterable, weighted and pulls the most up to date data from their API.</li>
        <li>Pre-filtered race pages to help accommodate segmenting users for their marketing communications.</li>
        <li>A language toggle, an alternative to native browser translators for when more accurate translations are needed. IRONMAN has the ability to build out and control race content for various languages for each race.</li>
        </List>
        <p>The site features desktop animations, a mega-menu/ghost navigation, graphic elements that highlight their great photography and a modern article design to support their content creation goals. This project was marked by a high level of detail, pioneering functionality, complex change management, unique stakeholder engagement, and extenisve client training and documentation.</p>
        <p>Designed by <a href="https://www.linkedin.com/in/robin-marquardt-51750184" target="_blank"  rel="noopener noreferrer">Robin Marquadt </a></p>
         <p><b>Tech:</b> JS/jQuery, GSAP, SCSS, AJAX, API, Site Builder (SportsEngine’s proprietary CMS)</p>
         </motion.div>
        </Layout>
    )
}


export default Ironman;