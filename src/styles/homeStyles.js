import styled from "styled-components"
import {motion} from "framer-motion"
import theme from './theme'

export const HomeContainer = styled(motion.div)`
    background-color:${theme.day.bg};
    width:100%;
    height:100vh;
    max-height:100%;
    overflow:hidden;
    transition: background-color ${theme.ease};
    .night &{
        background-color:${theme.night.bg};
    }
`
export const Container = styled.div`
    width:calc(100% - 100px);
    max-width:${theme.maxWidth};
    padding-left:50px;
    padding-right:50px;
    padding-top:25px;
    padding-bottom:25px;
    @media(max-width: ${theme.breakpoint.md}) {
        width:calc(100% - 40px);
        padding-left:20px;
        padding-right:20px;
        padding-top:25px;
        padding-bottom:25px;
    }

    @media(max-width: ${theme.breakpoint.sm}) {
        width:calc(100% - 30px);
        padding-left:15px;
        padding-right:15px;
        padding-top:25px;
        padding-bottom:25px;
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
            color:${theme.day.color};
            transition:color ${theme.ease};
            .night & {
            color:${theme.night.color};
            }
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

    .item {
        display:flex;
        @media(max-width: ${theme.breakpoint.sm}) {
            transform: translateX(0) translateZ(0px)!important;   
        }
        :hover {
            color:${theme.hover};
        }
    }
    a {
        display:flex;
        text-decoration:none;
        font-family: "futura-pt", sans-serif;
        font-size:50px;
        font-weight:700;
        text-transform:uppercase;
        letter-spacing:5px;
        color:${theme.day.color};
        transition:color ${theme.ease};
        @media(max-width: ${theme.breakpoint.md}) {
            font-size:38px;
        }

        @media(max-width: ${theme.breakpoint.sm}) {
            font-size:28px;
        }
        .night & {
            color:${theme.night.color};
        }
    }
    svg {
        width:100px;
        @media(max-width: ${theme.breakpoint.md}) {
            display:none;
        }
        
        @media(max-width: ${theme.breakpoint.sm}) {
            display:none;
        }
        path {
            fill: ${theme.hover};
        }
    }
`
