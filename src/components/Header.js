import React from 'react'
import Typed from 'react-typed';
import './Bubble.css'
import Hello from "../images/hello.png";
import Slide from "react-reveal/Slide";
import {Cloud, renderSimpleIcon, renderImg, renderText} from 'react-icon-cloud'
import simpleIcons from "simple-icons";
import Magic from './Magic.tsx'




const textTag = [
     renderText({
  text: 'npm'
}),
renderText({
    text: 'React.js'
  }),
  renderText({
    text: 'Bootstrap'
  }),
  renderText({
    text: 'HTML'
  }),
  renderText({
    text: 'SQL'
  }),
  renderText({
    text: 'CSS'
  }),
  renderText({
    text: 'Javascript'
  }),
]


const Header = () => {
    return (
        <div className="outer-wrapper">
            <div className="toppbar">
            </div>
            <div className='header-wrapper'>
            <div className="logo">joshuaBurns</div>
                <h2>
                <Typed
                    className="typed-text"
                    strings={["('Hello world')", "_"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop /></h2>
                    
            </div>

            <div className="wrapper">  
                <div className='slide one'>
                <div className="cloud"><Cloud >
                            {textTag}
                            </Cloud></div>
                    <div className="aboutme">
                        <div class='wrapper2'>
                       <Slide right> <div className='speechbubble'>
                        <p>
                            Check out some of my skills! <br />
                            Some of my projects can be found below.
                        </p>
                        </div></Slide>
                        </div>
                        <div className="man">
                            <img src={Hello} />
                        </div>
                        
                        
                </div>
                </div>
                
                <div className="slide two"><Slide right>JAPANSLATOR
                <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Slide></div>
                <div className="slide three"><Slide right>DOKUGOGO
                <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Slide>
                </div>
                <div className="slide four"><Slide right>JOSHUADESU
                <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Slide></div>
                <div className="slide five"><Slide right>CONTACT</Slide></div>
            </div>
            <div className="background"></div>
        </div>
            )
}


export default Header
