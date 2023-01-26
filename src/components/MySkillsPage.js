import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Design width={40} height={40} /> Front-end Developer
          </Title>
          <Description>
          I love to create applications which are easy to understand and user friendly,I try to Keep it clean, minimal and simple.
          </Description>
          <Description>
            <strong>
              SKILLS
            </strong>
            <ul>
              <li>HTML, CSS, BootStrap</li>
              <li>JavaScript</li>
              <li>React,Solidity,Ethereum</li>
            </ul>
          </Description>
        </Main>
        <h1>+</h1>
        <Main>
          <Title>
            <Develope width={40} height={40} /> Back-end Developer
          </Title>
          <Description>
            I also like to solve the DataStructure Problem and debug issues backend side and to implement various backend features e.g., APIs.
          </Description>
          <Description>
            <strong>
              SKILLS
            </strong>
            <ul>
              <li>C, C++ </li>
              <li>Rest APIs, APIs </li>
              <li>MySQL, MongoDB </li>
            </ul>
          </Description>
          
        </Main>

        <BigTitle text="SKILLS" top="40%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
