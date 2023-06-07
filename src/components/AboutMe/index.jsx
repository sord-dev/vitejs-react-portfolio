import { useRef } from 'react';
import Typewriter from 'typewriter-effect';
import useMouseResponsiveFloating from '../../utils/hooks/useMouseResponsiveFloating';

import styles from './styles.module.css';

import {
  AiFillBook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from 'react-icons/ai';

import { IconContext } from 'react-icons/lib';

export const AboutMe = () => {
  const aboutMeImgRef = useRef(null);
  useMouseResponsiveFloating(aboutMeImgRef, 0.01, 8);

  return (
    <>
      <div className={styles['about-me']}>
        <div ref={aboutMeImgRef}>
          <img
            src="/bitmoji-computer.svg"
            alt="hero image"
            draggable="false"
            loading="eager"
          />
        </div>

        <h1>Stefan Syrett</h1>
        <Typewriter
          options={{
            strings: [
              'Junior Front-End Developer',
              'Nerd',
              'Stoic',
              'Music Enjoyer',
            ],
            autoStart: true,
            loop: true,
          }}
        />

        <div className={styles['description']}>
          <p>
            As a junior web developer with a passion for creating engaging
            websites, I bring enthusiasm and a willingness to learn. I have
            hands-on experience with technologies like React, JavaScript, and
            HTML, allowing me to build dynamic and visually appealing web
            solutions.
          </p>

          <br />

          <p>
            With a focus on continuous growth, I am dedicated to honing my
            skills and delivering high-quality projects. I am eager to
            contribute to collaborative teams and create user-friendly
            experiences.
          </p>
        </div>
      </div>
      <SocialList />
    </>
  );
};

const SocialList = () => {
  return (
    <div className={styles['social-list']}>
      <IconContext.Provider value={{ size: '3em' }}>
        <a href="https://www.linkedin.com/in/stefansyrett/" target="_blank">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/sord-dev" target="_blank">
          <AiFillGithub />
        </a>
        <a href="mailto:stefansyrett17@gmail.com" target="_blank">
          <AiFillMail />
        </a>
        <a
          href="https://docs.google.com/document/d/1YgO4AhYtWiec13T5Vxv4zgl8o1S-_MzFJfERLmmYk0Q/edit?usp=sharing"
          target="_blank"
        >
          <AiFillBook />
        </a>
      </IconContext.Provider>
    </div>
  );
};
