import React from 'react';
import {motion} from 'framer-motion'
import Layout from "./Layout";


import img from "../../assets/images/PGA/pga_home.jpg"

const data = {
    headline:'PGAJr League',
    subHead:'website redesign, search functionality build',
    nextUrl:'/hitch-adventures',
    nextTitle:'Next project',
    prevUrl:'/ironman',
    prevTitle:'Prev project',
    img:img,
    imgAlt:'pgajr homepage',
    href:'https://www.pgajrleague.com/'
}

const PgaJr = () =>{
    return (
        <Layout 
        headline={data.headline} 
        subHead={data.subHead} 
        nextUrl={data.nextUrl} 
        nextTitle={data.nextTitle} 
        prevUrl={data.prevUrl} 
        prevTitle={data.prevTitle} 
        img={data.img} 
        imgAlt={data.imgAlt} 
        href={data.href}
        >
        <motion.div>
        <p>In the fall of 2019, long term partner, PGA Jr League tasked Sportsengine to rebuild their website and improve their program search functionality. The project team at Sportsengine consisted of a <a href='http://www.seanmcgrathdesign.com/' target='_blank'>designer</a>, project manager and myself, (Front End Developer). We collaborated with stakeholders from PGAJr League to examine the pain points from their previous site, create wireframes/mockups and outline the user experience/customer path to registration.</p>
        <p> After mockups were approved I started building the search functionality and styling of the site. The previous program search was one of their biggest pain points so the biggest goal was to make that process easier for users. Fast forward to launch day - over 1500 users registered for programs breaking the single day sign up record. </p> 
        <a href='https://www.pgajrleague.com'>Visit Site</a>
         <p>Technologies: JS/jQuery, SCSS, Redline Zipcode API, Site Builder (SportsEngine’s proprietary CMS)</p>
         </motion.div>
        </Layout>
    )
}

export default PgaJr;