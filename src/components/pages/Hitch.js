import React from 'react';
import Layout from "./Layout";
import {motion} from 'framer-motion'


const data = {
    headline:'Hitch Adventures',
    subHead:'website build',
    nextUrl:'/becca-neely',
    nextTitle:'Next project',
    prevUrl:'/pgajr-league',
    prevTitle:'Prev project',
    href:'https://hitch-adventures.web.app/'
}

const Hitch = () =>{
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
        <p>Hitch is a woman owned teardrop camper rental startup. What started as one run down trailer camper turned into a refurbished beauty ready for the road. The Task: Establishing a web presence, and creating a site that's design showed just as much personality as the camper.</p>
        <p> I really enjoyed giving this site some flavor&mdash; building animated components and adding parallax scroll effects and an svg loader.</p>
        <p>Designed by <a href="https://www.frankdenneycreative.com/" target="_blank"  rel="noopener noreferrer">Frank Denney</a></p>
        <p><b>Tech:</b> React, RC-Animate, SCSS, Firebase</p>
         </motion.div>
        </Layout>
    )
}


export default Hitch;