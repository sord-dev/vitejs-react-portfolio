import { useRef } from 'react';
import Typewriter from 'typewriter-effect';
import useMouseResponsiveFloating from '../../utils/hooks/useMouseResponsiveFloating';
import styles from './styles.module.css';

export const AboutMe = () => {
  const aboutMeImgRef = useRef(null);
  useMouseResponsiveFloating(aboutMeImgRef, 0.01, 8);

  return (
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
          With a focus on continuous growth, I am dedicated to honing my skills
          and delivering high-quality projects. I am eager to contribute to
          collaborative teams and create user-friendly experiences.
        </p>
      </div>
    </div>
  );
};
