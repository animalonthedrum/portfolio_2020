import React from 'react';
import {Link} from 'react-router-dom';
import Layout from "./Layout";
import img from "../../assets/images/SE/SE_home.jpg"
import ViewPort from '../iFrame.js';


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

const SE = () =>{
    return (
        <Layout 
        headline={data.headline} 
        subHead={data.subHead} 
        nextUrl={data.nextUrl} 
        nextTitle={data.nextTitle} 
        prevUrl={data.prevUrl} 
        prevTitle={data.prevTitle} 
        img={data.img} 
        imgAlt={data.imgAlt} 
        href={data.href}
        >
        <h2>PHP, DRUPAL, Twig, JS, SCSS</h2>
        <p>
            Over my three years with Sportsengine I have had the opportunity to work on hundreds of custom websites and landing pages. From client site maintenance and site builds to internal marketing campaigns and the new sportsengine.com product; my development ranged from JS, jQuery, HTML5, SCSS, Jekyll, Twig, Ajax, API's, Symphony, PHP, Drupal, gulp, git and more.
        </p>
        <p>Some of my favorite projects are <Link to='/ironman'>ironman.com</Link>, <Link to='/pgajr-league'>pgajrleague.com</Link></p>
        <ul>
            Other noteable works include
            <a href='https://www.spurssportsacademy.com/'>Spurs Sports Academy</a>
            <a href="https://www.uslsoccer.com/">USL Soccer</a>
            <a href="https://www.easternhockeyleague.org/">Eastern Hockey League</a>
            <a href="https://www.gomotionapp.com/solutions">GoMotion</a>
            <a href="https://www.teamunify.com/swim-team-management-software/mobile/">Team Unify</a>
            <a href="https://uk.teamunify.com/solutions">Team Unify UK</a>

        </ul>
        <ViewPort/>


        </Layout>
    )
}

export default SE;