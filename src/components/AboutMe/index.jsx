import styles from './styles.module.css';
import Typewriter from 'typewriter-effect';

export const AboutMe = () => {
  return (
    <div className={styles['about-me']}>
      <h1>Stefan Syrett</h1>
      <Typewriter
        options={{
          strings: [
            'Junior Front-End Developer',
            'Nerd',
            'Stoic',
            'Music Enjoyer'
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};
