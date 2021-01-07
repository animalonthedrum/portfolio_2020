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
            a {
                font-family: "futura-pt", sans-serif;
                font-size:24px;
                font-weight:500;
                letter-spacing:2px;
                color:${theme.day.color};
                .night & {
                    color:${theme.night.color};
                }
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
    <h1><span role="img" aria-label="woogity woogity" aria-labelledby="wave">👋</span> Hi, I'm Brett</h1>
    <p>Creative developer currently residing in Minneapolis, MN. I dig CSS, animating divs, problem solving, and learning new tech. On a personal level, drums, vinyl, hiking and card games are my jam. I am currently employed at SportsEngine on the creative marketing team.</p>
    <p>During quarantine my partner and I purchased a Promaster Cargo van and have been turning it into an off grid camper. Follow along with our progress <a href="https://www.instagram.com/thesacredroute/" target="_blank"  rel="noopener noreferrer">here</a></p>
    <p>This site was built with React, Framer Motion and Styled Components. Thanks for visiting. Stay funky, wear a mask and keep nature wild. <span role="img" aria-label="woogity woogity" aria-labelledby="wave">🤙</span></p>
    </div>
    <div className='image-container'>
    <img src={headshot} alt="Felt cute might delete later"/>
    </div>
    </Section>
   
    </Container>

);

export default About;