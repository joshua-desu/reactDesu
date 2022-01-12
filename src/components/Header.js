import React from "react";
import Typed from "react-typed";
import "./Bubble.css";
import Hello from "../images/joshua.png";
import Slide from "react-reveal/Slide";
import simpleIcons from "simple-icons";
import Particle from "react-tsparticles";

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
        <div className="snow">
          {" "}
          <Particle
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
                  straight: false,
                },
                number: { density: { enable: true, area: 1000 }, value: 30 },
                opacity: {
                  value: 0.08,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 3, max: 8 },
                },
              },
              themes: [
                {
                  name: "light",
                  default: {
                    value: true,
                    mode: "light",
                  },
                  options: {
                    background: {
                      color: "#fff",
                    },
                    particles: {
                      color: {
                        value: "#000",
                      },
                    },
                  },
                },
                {
                  name: "dark",
                  default: {
                    value: true,
                    mode: "dark",
                  },
                  options: {
                    background: {
                      color: "#FF",
                    },
                    particles: {
                      color: {
                        value: "#000",
                      },
                    },
                  },
                },
              ],
            }}
          />
        </div>
        <div className="logo"><Typed
            className="typed-text"
            strings={["joshuaBurns", "_"]}
            typeSpeed={40}
            backSpeed={50}
            startDelay={50}
            backDelay={4000}
            loop
          /></div>
          <div className="header-wrapper">
                    <div className="aboutme">
                        <div class='wrapper2'>
                  <div className='speechbubble'>
                            const hello = ['web developer',  <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     'fullstack', <br />
                            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     'passionate communicator', <br />
                          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     'human idea machine', <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     'google-fu expert']                            <br />
                        </div>
                                               
                        </div>
                       <div className="man">    <div className="skills">
              <ul>
                <li>
               
                  HTML
                </li>
                <li>
                
                  CSS++
                </li>
                <li>
                
                  
                  Javascript
                </li>
                <li>
                 
                  React.js+
                </li>
                <li>SQL</li>
                <li>Bootstrap</li>
                <li>Python</li>
                <li>Java</li>
                <li>npm</li>
                <li>git</li>
                <li>Mac OS</li>
                <li>Photoshop</li>
              </ul>
            </div>      <img src={Hello} />
</div>

                        
                </div>

     </div>

      <div className="wrapper">
          <div className="aboutme">  </div>

           <div className="projects">P  R  O  J  E        C   T   S</div>
        <div className="slide two">
          <div className="coverW"></div>
          <div className="words">
            <Slide right>
              <span id="testt">JAPANSLATOR</span>
              <p>
              A Google Chrome extension that I built for students learning Japanese. This was my first attempt at making a browser extension, and it was written with Javascript, HTML, and CSS. It primarily functions based on DOM manipulation and API fetches. This extension allows you to easily translate Japanese kanji into easily readable hiragana. Additionally, you may view the English equivalent and check out the entries on Jisho.org dictionary.
              </p>{" "}
              <div className="languages">HTML, CSS, Javascript</div>
            </Slide>
          </div>
          <div className="previewBox1"></div>
        </div>
        <div className="slide three">
          <div className="cover2"></div>
          <div className="words2">
            <Slide right>
              DOKO IKU GO
              <p>
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="languages">React Native</div>
            </Slide>
          </div>
          <div className="previewBox22"></div>
        </div>
        <div className="slide four">
          <div className="coverW"></div>
          <Slide right>
            MONTELLODAIRY.COM
            <p>
              Coming Soon...
            </p>
          </Slide>
        </div>
        <div className="slide five">
          <Slide bottom>CONTACT</Slide>
        </div>
      </div>
      <div className="background"></div>
    </div>
  );
};

export default Header;
