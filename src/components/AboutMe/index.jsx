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
          <li>This</li>
          <li>Oh and this!</li>
          <li>Don't forget this!!</li>
          <li>Last but not least! THIS!!!</li>
        </ul>
      </div>
    </div>
  );
};
