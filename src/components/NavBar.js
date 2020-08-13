import React from 'react'
import { Link } from 'react-router-dom'
import  styled  from 'styled-components'
import {motion} from 'framer-motion'

const Container = styled.div`
    display:flex;
    width:100%;
    ul {
        list-style:none;
        padding:0;
        margin:0;
        width:100%;
        display: flex;
        align-items:center;
        li {
            flex: 1 1 50%;
            a {
                width:100%;
                display:flex;
                align-items:center;
                text-decoration:none;
                font-family:'futura-pt', sans-serif;
                font-weight:500;
                font-size:24px;
                color:#252727;
            }
            .arrow{
                margin-left:10px;
                svg {
                    width:22px;
                        path {
                        fill: #252727;
                    }
                }
        }
        .arrow-back{

            transform: scale(-1, 1);
            margin-right:10px;
                svg {
                    width:22px;
                        path {
                        fill: #252727;
                    }
                }
        }
    }
    .nextPage {
                a {
                    justify-content:flex-end;
                }
            }
}

`

const Navbar = ({nextUrl, nextTitle, prevUrl, prevTitle}) => (
    // <Container className={`navbar ${hide ? hide : ""}`}>
    <Container className='navbar'>
        <ul>
            <li key='prev' className='prevPage'>
            <Link to={prevUrl}>
            <div className="arrow-back">
                  <motion.svg
                  initial={{ x: 0 }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 101 57"
                  >
                    <path
                      d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                      fill="#000"
                      fillRule="evenodd"
                    ></path>
                  </motion.svg>
                </div>
            {prevTitle}
            </Link>
            </li>
            <li key='next' className='nextPage'>
            <Link to={nextUrl}>{nextTitle}
            <div className="arrow">
                  <motion.svg
                  initial={{ x: 0 }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 101 57"
                  >
                    <path
                      d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                      fill="#000"
                      fillRule="evenodd"
                    ></path>
                  </motion.svg>
                </div>
            </Link>
            </li>
        </ul>
    </Container>
)

export default Navbar;