import React from 'react'
import  styled, {keyframes} from "styled-components"
import {motion} from "framer-motion"

const marquee = keyframes `

from { 
      transform: translateX(0);
     }
    to {
       transform: translateX(-50%);
     }
`;

export const MarqueeContainer = styled(motion.div)`
    position: relative;
    overflow-x: hidden;
    flex-grow:2;
    margin-left:20px;
    margin-right:20px;


    .marquee-track {
        position: absolute;
        white-space: nowrap;
        will-change: transform;
        display: flex;
        align-items: center;
        height: 100%;
        animation: ${marquee} 18s 3s linear infinite;
        p {
        font-family: "futura-pt", sans-serif;
        font-weight:400;
        font-size:24px;
        color:#e2be30;
        letter-spacing:5px;
        text-decoration:none;
        }
    }
`

const Marquee = ({children}) => (
    <MarqueeContainer>
        <div className='marquee-track'>
        {children}
        </div>
    </MarqueeContainer>
)

export default Marquee;