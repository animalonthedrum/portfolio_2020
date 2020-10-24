import React from "react"
import styled from 'styled-components'

// import { motion } from "framer-motion";

//img
import headshot from '../assets/images/headshot.jpg'
//styles
import theme from '../styles/theme'
import {Container } from '../styles/homeStyles'

const Section = styled.div`
    width: 100%;
    display:flex;
    align-items:center;
    @media(max-width: ${theme.breakpoint.sm}) {
    flex-direction:column;
  }
    /* height:calc(100% - 100px); */
    > div {
        flex: 1 1 50%;
        @media(max-width: ${theme.breakpoint.sm}) {
            flex:1 1 100%;
        }
        h1 {
            color:${theme.day.color};
            font-family: "futura-pt", sans-serif;
            font-size:55px;
            font-weight:700;
            text-transform:uppercase;
            letter-spacing:2px;
            margin-top:0;
            .night & {
                color:${theme.night.color};
            }
        }
        p {
            color:${theme.day.color};
            font-family: "futura-pt", sans-serif;
            font-size:24px;
            font-weight:500;
            letter-spacing:2px;
            .night & {
                color:${theme.night.color};
            }
        }
    }
    .image-container {
        display:flex;
        align-items:center;
        justify-content:center;
        img {
            border-radius:50%;
        }
        &:before {
            content:'';

        }
    }
`

 const About = () => (
    <Container>
    <Section>
    <div>
    <h1>HELLO I'm Brett</h1>
    <p>Web developer residing in Minneapolis, currently employed full time at Sportsengine. I dig all things funky, hiking, camping and my doggos.</p>
    <p>Currently renovating a Ram Promaster Cargo van to a camper van.</p>
    <p>This site was built with React, Framer Motion and Styled Components for fun, sharing and learning. Thanks for visiting. Stay funky, keep nature wild. <span role="img" aria-label="woogity woogity" aria-labelledby="wave">🤙</span></p>
    </div>
    <div className='image-container'>
    <img src={headshot} alt="Felt cute might delete later"/>
    </div>
    </Section>
   
    </Container>

);

export default About;