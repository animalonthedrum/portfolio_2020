import React from 'react';
import {motion} from 'framer-motion'
import Layout from "./Layout";

const data = {
    headline:'PGA Jr League',
    subHead:'website redesign & search functionality',
    nextUrl:'/hitch-adventures',
    nextTitle:'Next project',
    prevUrl:'/ironman',
    prevTitle:'Prev project',
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
        href={data.href}
        >
        <motion.div>
        <p>In the fall of 2019, long term partner, PGA Jr League tasked Sportsengine to rebuild their website and improve their program search functionality. We collaborated with stakeholders from PGAJ r League to examine the pain points from their previous site, create wireframes/mockups and outline the user experience/customer path to registration.</p>
        <p> After mockups were approved I started building the search functionality and styling of the site. The previous program search was one of their biggest pain points so the biggest goal was to make that process easier for users. Fast forward to launch day - over 1500 users registered for programs breaking the single day sign up record. </p> 
        <p>Designed by <a href='http://www.seanmcgrathdesign.com/' target='_blank' rel="noopener noreferrer">Sean McGrath</a></p>

         <p><b>Tech:</b> JS/jQuery, SCSS, Redline Zipcode API, Site Builder (SportsEngine’s proprietary CMS)</p>
         </motion.div>
        </Layout>
    )
}

export default PgaJr;