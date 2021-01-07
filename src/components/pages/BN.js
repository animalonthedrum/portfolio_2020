import React from 'react';
import Layout from "./Layout";
import {motion} from 'framer-motion'


const data = {
    headline:'Becca Neely',
    subHead:'portfolio',
    nextUrl:'/frank-and-tawnee',
    nextTitle:'Next project',
    prevUrl:'/hitch-adventures',
    prevTitle:'Prev project',
    href:'https://www.beccaneely.com/'
}

const BN = () =>{
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
        <p>Portfolio site for a very talented designer who also happens to be my partner. I really enjoyed working in Gatsby and using mutation observer to add subtle slide up animations. I will likely continue using Gatsby in my future freelance builds.</p>

        <p><b>Tech:</b> GatsbyJS, SCSS, Netlify</p>
         </motion.div>
        </Layout>
    )
}


export default BN;