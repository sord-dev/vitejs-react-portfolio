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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
          nibh gravida, hendrerit massa ut, condimentum metus. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Nulla eget nunc
          ante. Curabitur at pulvinar mauris. Duis nisl mi, semper nec faucibus
          ut, venenatis at massa.
        </p>
        <br />
        <p>Some of my Hobbies include:</p>
        <ul>
          <li>
            🎸 When I'm not scheming on my next project, you'll often find me
            playing something edgy on my guitar.
          </li>
          <li>
            📖 In my spare time, I delve into books on marketing and software
            development, constantly seeking to broaden my knowledge.
          </li>
          <li>📚 I have a deep fascination with morality and philosophy.</li>
          <li>
            🎮 Video games are another passion of mine, providing an interactive
            medium for storytelling and immersive experiences. They allow me to
            unwind and tap into my imagination.
          </li>
        </ul>
      </div>
    </div>
  );
};
