import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import astronaut from "../assets/Images/spaceman.png";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
    0% { transform: translateY(-10px) }
    50% { transform: translateY(15px) translateX(15px) }
    100% { transform: translateY(-10px) }

`;
const Spaceman = styled.div`
  position: absolute;
  top: 15%;
  right: 3%;
  width: 12vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 60vw;
  height: 58vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.4rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
          I am a full stack web developer with a passion for creating beautiful and functional websites. I am undergraduate with a degree in Artificial Intelligence & Data Science and have a strong understanding of web development technologies including HTML, CSS, JavaScript, TypeScript and various frameworks such as Angular, React, Node.js, and Express.
          <br /> <br />
          My goal as a developer is to build high-quality websites that not only look great but also provide an excellent user experience. I am always eager to learn new technologies and am constantly seeking new challenges to improve my skills.
          <br /> <br />I am excited to begin my career as a full stack web developer and am eager to work on projects that push me to grow and improve as a developer. If you are looking for a dedicated and motivated web developer, please don't hesitate to contact me.
        </Main>

        <BigTitle text="ABOUT ME" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
