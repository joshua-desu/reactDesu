import React from "react";
import Typed from "react-typed";
import "./Bubble.css";
import Hello from "../images/joshua.png";
import Slide from "react-reveal/Slide";
import mac from "../images/mac.svg";
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
          <div className="man">
            {" "}
            <Slide left>
              <div className="skills">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>React.js</li>
                  <li>node.js</li>
                  <li>Bootstrap</li>
                  <li>Python</li>
                  <li>SQL</li>
                  <li>npm</li>
                  <li>git</li>
                  <li>Mac OS</li>
                  <li>Photoshop</li>
                </ul>
              </div>{" "}
            </Slide>{" "}
            <img src={Hello} alt="selfie" />
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="aboutme"> </div>

        <div className="projects">P R O J E C T S</div>
        <div className="slide two">
          <div className="coverW"></div>
          <div className="words">
            <Slide right>
              <span id="testt">JAPANSLATOR</span></Slide>
              <span id="details">
                A Google Chrome extension that I built for students learning
                Japanese. This was my first attempt at making a browser
                extension, and it was written with Javascript, HTML, and CSS. It
                primarily functions based on DOM manipulation and API fetches.
                This extension allows you to easily translate Japanese kanji
                into easily readable hiragana. Additionally, you may view the
                English equivalent and check out the entries on Jisho.org
                dictionary.
              </span>
              <div className="languages">HTML, CSS, Javascript</div>
            
          </div>
          <div className="previewBox1"></div>
        </div>
        <div className="slide three">
          <div className="cover2"></div>
          <div className="words2">
            <Slide right>
            joshuadesu.io</Slide>
              <span id="details2">
              This project was an exercise in combing many different concepts related to front-end development. It is written within the React.js framework and uses a variety of packages for effects. The most challenging part of this project was creating custom CSS and optimizing it for mobile devices. It is still being updated as more ideas and changes come to me !
              </span>
              <div className="languages"></div>
            
          </div>
          <div className="previewBox22"></div>
        </div>
        <div className="slide four">
          <div className="coverW"></div>
          <Slide right>
            <div className="words">Future Goals</div>          </Slide>

            <span id="details">While I am working on perfecting the fundamentals, I am to gradually
            increase the complexicity of my designs. I have an iOS app in the planning stages which will
            require me to learn React Native in the process. I would also like to gain some fluency in Java.</span>
        </div>
        <div className="slide five">
          <Slide bottom>C O N T A C T</Slide>
          <form className="forms">
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
              name="text"
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
      <div className="background"></div>
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
    </div>
  );
};

export default Header;
