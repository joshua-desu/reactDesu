import React from 'react'
import Typed from 'react-typed';
import './Bubble.css'
import Hello from "../images/hello.png";
import Slide from "react-reveal/Slide";
import simpleIcons from "simple-icons";
import Particle from "react-tsparticles"




const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

const Header = () => {
    return (
        
        <div className="outer-wrapper">
            <div className="topbar"> </div> 
            <div className='header-wrapper'>
           <div className="snow"> <Particle
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
    particles: {
      move: {
        bounce: false,
        direction: "none",
        enable: true,
        outModes: "out",
        random: false,
        speed: 1,
        straight: false
      },
      number: { density: { enable: true, area: 1000 }, value: 30 },
      opacity: {
        value: 0.08
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 3, max: 8 }
      }
    },
    themes: [
      {
        name: "light",
        default: {
          value: true,
          mode: "light"
        },
        options: {
          background: {
            color: "#fff"
          },
          particles: {
            color: {
              value: "#000"
            }
          }
        }
      },
      {
        name: "dark",
        default: {
          value: true,
          mode: "dark"
        },
        options: {
          background: {
            color: "#FF"
          },
          particles: {
            color: {
              value: "#000"
            },
        }
    }
  }

]
      }}
    /></div>
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
              
          
      <div className="man">
                            <img src={Hello} />
                        </div>
                    <div className="aboutme">
                        <div class='wrapper2'>
                       <Slide right> <div className='speechbubble'>
                        <p>
                            Thanks for checking out my page! <br />
                            My name is Joshua, and I live in Nashville, TN. I am a fullstack developer who is also finishing a Computer Information Systeems degree. 
                            I've listed some of my skills and projects here for you to explore.
                            <br />
                            <br />
    
                        </p>
                        </div>                        </Slide>
                        </div>

                        <div className="skills">
                        <ul>
    <li><img height="32" width="32" src="https://unpkg.com/simple-icons@v6/icons/html5.svg" />HTML+++</li>
    <li><img height="32" width="32" src="https://unpkg.com/simple-icons@v6/icons/css3.svg" />CSS++</li>
    <li><img height="32" width="32" src="https://unpkg.com/simple-icons@v6/icons/javascript.svg" />Javascript++    </li>
    <li><img height="32" width="32" src="https://unpkg.com/simple-icons@v6/icons/react.svg" />React.js+</li>
    <li>SQL</li>
    <li>Bootstrap</li>
    <li>Python</li>
    <li>Java</li>
    <li>Photoshop</li>
    <li>git</li>
    <li>npm</li>
</ul>


                        </div>
                        </div>
                  
                        
                        
                </div>
                
                <div className="slide two">                
                    <div className="coverW"></div>
                    <div className="words"><Slide right><span id="testt">JAPANSLATOR</span>
                <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>                <div className="languages">HTML, CSS, Javascript</div>
</Slide></div>
                <div className="previewBox"></div>
                </div>
                <div className="slide three">                
                    <div className="cover2"></div>
                    <div className="words2"><Slide right>DESUGOGO
                <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="languages">React Native</div></Slide></div>
                <div className="previewBox2"></div>
                </div>
                 <div className="slide four">
                <div className="coverW"></div>
                    <Slide right>JOSHUADESU
                <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Slide></div>
                <div className="slide five"><Slide right>CONTACT</Slide></div>
            </div>
            <div className="background"></div>
        </div>
            )
}


export default Header
