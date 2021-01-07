import React from 'react';
import Layout from "./Layout";
import styled from 'styled-components';
import {motion} from 'framer-motion'


const data = {
    headline:'Frank & Tawnee',
    subHead:'website build',
    nextUrl:'/sportsengine',
    nextTitle:'Next project',
    prevUrl:'/becca-neely',
    prevTitle:'Prev project',
    href:'https://www.frankandtawnee.com/'
}

const FT = () =>{
    return (
        <Layout 
        headline={data.headline} 
        subHead
        nextUrl={data.nextUrl} 
        nextTitle={data.nextTitle} 
        prevUrl={data.prevUrl} 
        prevTitle={data.prevTitle}
        href={data.href}
        >
        <motion.div>
        <p>Wedding site for a close designer buddy. This site was used to gather rsvps and showcase a beautiful, soon to be married couple. Frank and I collabed to create a site with animations and beautiful design.</p>
        <p> I challenged myself with a tight deadline and a technology I had just started learning. This was one of my first React sites and I had a lot of fun turning the mockup into markup.</p>
        <p>Designed by <a href="https://www.frankdenneycreative.com/" target="_blank"  rel="noopener noreferrer">Frank Denney</a></p>
        <p><b>Tech:</b> React, React Scroll Parallax, SCSS, Firebase</p>
         </motion.div>
        </Layout>
    )
}


export default FT;
