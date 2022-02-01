import React from "react";
import Typed from "react-typed";
import "./Bubble.css";
import Hello from "../images/joshua.png";
import Slide from "react-reveal/Fade";
import mac from "../images/mac.svg";
import css from "../images/css.svg";
import html from "../images/html.svg";
import js from "../images/js.svg";
import ps from "../images/ps.svg";
import react from "../images/react.svg";
import sql from "../images/sql.png";
import boot from "../images/boot.svg";
import npmm from "../images/npmm.svg";
import gh from "../images/git.svg";
import sf from "../images/sf.svg";
import jpns from "../images/jpns.jpg";
import desur from "../images/desur.png";
import Particle from "react-tsparticles";


const particlesInit = (main) => {
  console.log(main);

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
     
      <div className="logo">
        <Typed
          className="typed-text"
          strings={["joshuaBurns", "_"]}
          typeSpeed={40}
          backSpeed={50}
          startDelay={50}
          backDelay={4000}
          loop
        />
      </div>
      <div className="header-wrapper">
        <div className="aboutme">
          <div class="wrapper2">
            <div className="speechbubble">
              <p>
                const hello = ['web developer', <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                'driven leader', <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                'passionate communicator', <br />
                &nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                'human idea machine', <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                'google-fu expert'] <br />
              </p>
            </div>
          </div>
          
            {" "}
            <Slide left>
              <div className="skills">
                <ul>
                  <li><img src= { html } />HTML</li>
                  <li><img src= { css } />CSS</li>
                  <li><img src= { js } />Javascript</li>
                  <li><img src= { react } />React.js</li>
                  <li><img src= { sql } />node.js</li>
                  <li><img src= { sf } />Salesforce</li>
                  <li><img src= { boot } />Bootstrap</li>
                  <li><img src= { sql } />SQL</li>
                  <li><img src= { npmm } />npm</li>
                  <li><img src= { gh } />git</li>
                  <li><img src= { mac } />Mac OS</li>
                  <li><img src= { ps } />Photoshop</li>
                </ul>
              </div>{" "}
            </Slide>{" "}<div className="man">
            <img src={Hello} alt="selfie" />
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="aboutme"> </div>

        <Slide bottom><div className="projects">P R O J E C T S</div></Slide>
        <div className="slide two">
          <div className="coverW"></div>
          <div className="words">
            <Slide>
              <span id="testt">JAPANSLATOR</span>
             <span id="details">
                A Google Chrome extension that I built for students learning
                Japanese. This was my first attempt at making a browser
                extension, and it was written with Javascript, HTML, and CSS. It
                primarily functions based on DOM manipulation and API fetches.
                This extension allows you to easily translate Japanese kanji
                into easily readable hiragana. Additionally, you may view the
                English equivalent and check out the entries on Jisho.org
                dictionary.
              </span></Slide>
                      <div className="previewBox1"><img src = { jpns } /></div>

          </div>
        </div>
        <div className="slide three">
          <div className="cover2"></div>
          <div className="words2">
            <Slide>
            joshuadesu
            <span id="details2">
              This project was an exercise in combing many different concepts related to front-end development. It is written within the React.js framework and uses a variety of packages for effects. The most challenging part of this project was creating custom CSS and optimizing it for mobile devices. It is still being updated as more ideas and changes come to me !
              </span></Slide>
                      <div className="previewBox2"><img src = { desur } /></div>

          </div>
        </div>
        <div className="slide four">
          <div className="coverW"></div>
          <Slide>
            <div className="words">Goals</div>     

         <span id="details">While I am working on perfecting the fundamentals, I am to gradually
            increase the complexicity of my designs. I have an iOS app in the planning stages which will
            require me to learn React Native in the process. I would also like to gain some fluency in Java.</span>
       </Slide>  </div>
        <div className="slide five">
          <Slide bottom>C O N T A C T</Slide>
          <form className="forms" action="https://getform.io/f/819d429b-1a97-4c8f-a261-1b10c782940f" target="_blank" method="POST">
            <input
              name="name"
              type="text"
              class="feedback-input"
              placeholder="Name"
            />
            <input
              name="email"
              type="text"
              class="feedback-input"
              placeholder="Email"
            />
            <textarea
              class="feedback-input"
              placeholder="Comment"
            ></textarea>
            <input type="submit" value="SUBMIT" />
          </form>
          <div className='footer'>
            Designed in 2022 with 🔥 <br />
            Joshua Burns | joshua.desu@icloud.com
          </div>
      </div>
        </div>
    </div>
  );
};

export default Header;
