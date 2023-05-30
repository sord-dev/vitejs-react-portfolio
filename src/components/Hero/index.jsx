import { useRef } from 'react';
import { LinkButton } from '../LinkButton';
import styles from './styles.module.css';

import useMouseResponsiveFloating from '../../hooks/useMouseResponsiveFloating.js';
import { FadeIn } from '..';

export const Hero = () => {
  const heroImgRef = useRef(null);
  useMouseResponsiveFloating(heroImgRef, 0.01, 12);

  return (
    <FadeIn>
      <section className={styles['hero']}>
        <div className={styles['hero-content']}>
          <h2>Front-End React Developer</h2>

          <p>
            Passionate Junior Developer specializing in front-end web
            development. Crafting elegant and intuitive user experiences using
            modern technologies like React and Next.js. Dedicated to clean code
            and pixel-perfect design. Let's bring your ideas to life!
          </p>

          <LinkButton sameSite={true} message="About Me" link="/profile" />
        </div>

        <div ref={heroImgRef}>
          <img
            src="/bitmoji-computer.svg"
            alt="hero image"
            draggable="false"
            loading="eager"
          />
        </div>
      </section>
    </FadeIn>
  );
};
