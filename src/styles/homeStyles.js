import styled from "styled-components"
import {motion} from "framer-motion"

const theme = {
    night:{
        bg:'#272525',
        color:'#eee7ca',
        accent:'#d08e43',
        hover:'#e2be30'
    },
    day:{
        bg:'#eee7ca',
        color:'#272525',
        accent:'#d08e43',
        hover:'#e2be30'
    }
};

export const HomeContainer = styled(motion.div)`
    background-color:${theme.day.bg};
    width:100%;
    height:100vh;
    max-height:100%;
    overflow:hidden;
    transition: background-color .3s ease-in-out;
    .night &{
        background-color:${theme.night.bg};
    }
`
export const HeaderDiv = styled(motion.div)`
    display:flex;
    width:calc(100% - 4vw);
    align-items:center;
    padding:2vw;
    .menuView {
        display:flex;
        width:100%;
        align-items:center;
        h3 {
            margin:0;
        }
    }
`

export const HomeMenu = styled(motion.ul)`
    list-style:none;
    padding:0;
    margin:0;
    display: flex;
    flex-direction:column;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;

    li {
        display:flex;
    }
    a {
        display:flex;
        text-decoration:none;
        font-family: "futura-pt", sans-serif;
        font-size:50px;
        font-weight:700;
        text-transform:uppercase;
        letter-spacing:12px;



    }
    svg {
        width:100px;
    }
`
