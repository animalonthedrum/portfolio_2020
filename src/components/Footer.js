import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {motion} from 'framer-motion'

//Components
import Marquee from '../components/Marquee'

const Container = styled(motion.div)`
    position:absolute;
    bottom:0;
    left:0;
    width:calc(100% - 40px);
    background-color:#272525;
    padding-top:20px;
    padding-bottom:20px;
    padding-left:20px;
    padding-right:20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height:100px;
    .contact {
        justify-content:flex-end;
        display:flex;
        a {
        font-family: "futura-pt", sans-serif;
        font-weight:500;
        font-size:24px;
        color:#eee7ca;
        letter-spacing:2px;
        display:flex;
        align-items:center;
        text-decoration:none;
    }
    }
    .logo {
        display:flex;
        align-items:center;
        a {
        font-family: "futura-pt", sans-serif;
        font-weight:700;
        font-size:40px;
        color:#eee7ca;
        text-transform:uppercase;
        letter-spacing:5px;
        display:flex;
        align-items:center;
        text-decoration:none;
    }
    span {
            height:30px;
            width:30px;
            border-radius:50%;
            background-color:#d08e43;
            margin-left:10px;
            margin-right:15px;
        }

    }
`

const Footer = () =>{
    
    return (
    <Container>
        <div className="logo">
        <Link to='/'>Brett</Link>
        <span></span>
        <Link to='/'>
        Codes
        </Link>
        </div>
        <Marquee>
            <p>I have a goldendoodle named waffles and a long hair weiner dog named Mr.Weenie.</p>
            <p>Currently turning a cargo van into a camper, one tentius shot at a time.</p>
            <p>I can speak Japanese, kind of.</p>
            <p>I was once a touring drummer in a reggae funk band.</p>
            <p>I have a muppet as a tatoo.</p>
            <p>Q: How do fish end their work emails? A: Let minnow what you think.</p>
            <p>Send me a joke hello@brett.codes</p>
        </Marquee>
        <div className="contact">
            <a href="mailto:hello@brett.codes">hello@brett.codes</a>
        </div>
        
    </Container>
    )
}

export default Footer;