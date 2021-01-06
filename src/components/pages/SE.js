import React from 'react';
import {Link} from 'react-router-dom';
import Layout from "./Layout";
import styled from "styled-components";
import img from "../../assets/images/SE/SE_home.jpg"


const data = {
    headline:'Sportsengine',
    subHead:'the home of youth sports.',
    nextUrl:'/ironman',
    nextTitle:'Next project',
    prevUrl:'/',
    prevTitle:'Back to projects',
    img:img,
    imgAlt:'the new Sportsengine homepage',
    href:'https://www.sportsengine.com/'
}
const List = styled.ul`
display:flex;
flex-direction:column;
padding:0;
margin:0;
list-style:none;
li {
    padding-top:10px;
    padding-bottom:10px;
    a {
        color:black;
    }
}
`

const SE = () =>{
    return (
        <Layout 
        headline={data.headline} 
        subHead={data.subHead} 
        nextUrl={data.nextUrl} 
        nextTitle={data.nextTitle} 
        prevUrl={data.prevUrl} 
        prevTitle={data.prevTitle} 
        >
        <p>
            Over my three years with Sportsengine I have had the opportunity to build hundreds of custom websites, landing pages, integrate with multiple API's, develop custom modules and work both on the front and backend of our Drupal applications. My projects ranged from client site theming, maintenance, site builds, internal marketing campaigns, API architecture and developing a new sportsengine.com product. 
        </p>
        <br/>
        <p>Technologies used were JS, jQuery, PHP, Drupal, Twig, HTML5, SCSS, Jekyll, Liquid, Ajax, API's, Symfony, gulp, git, Jira, Sketch, Zeplin and more.</p>
        <p>Some of my favorite projects are <b><a href='https://www.sportsengine.com' target="_blank"  rel="noopener noreferrer">Sportsengine</a>, </b> <b><a href='https://www.sportsengine.com/solutions' target="_blank"  rel="noopener noreferrer">Sportsengine HQ</a></b>, <b><Link to='/ironman'>IRONMAN</Link></b> and <b><Link to='/pgajr-league'>PGA JR League</Link></b></p>
        <List>
            Other noteable works include
            <li><a href="https://www.gomotionapp.com/solutions" target="_blank"  rel="noopener noreferrer">GoMotion</a></li>
            <li><a href="https://www.teamunify.com/swim-team-management-software/mobile/" target="_blank"  rel="noopener noreferrer">Team Unify</a></li>
            <li><a href="https://uk.teamunify.com/solutions" target="_blank"  rel="noopener noreferrer">Team Unify UK</a></li>
            <li><a href='https://www.spurssportsacademy.com/' target="_blank"  rel="noopener noreferrer">Spurs Sports Academy</a></li>
            <li><a href="https://www.uslsoccer.com/" target="_blank"  rel="noopener noreferrer">USL Soccer</a></li>
            <li><a href="https://www.easternhockeyleague.org/" target="_blank"  rel="noopener noreferrer">Eastern Hockey League</a></li>
        </List>
        </Layout>
    )
}

export default SE;