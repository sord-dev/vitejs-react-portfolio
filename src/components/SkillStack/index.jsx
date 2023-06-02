import { useState } from 'react';
import styles from './styles.module.css';

export const SkillStack = ({ skills = {} }) => {
  const [activeStack, setActiveStack] = useState('front-end');

  return (
    <>
      <h2>My Skills</h2>
      <div className={styles['skill-stack']}>
        <div className={styles['stack']}>
          <button
            className={activeStack == 'front-end' ? styles['active'] : null}
            onClick={() => setActiveStack('front-end')}
          >
            Front-End 🎨
          </button>
          <button
            className={activeStack == 'back-end' ? styles['active'] : null}
            onClick={() => setActiveStack('back-end')}
          >
            Back-End 💻
          </button>
          <button
            className={activeStack == 'tooling' ? styles['active'] : null}
            onClick={() => setActiveStack('tooling')}
          >
            Tooling 🔨
          </button>
        </div>

        <div className={styles['pile-container']}>
          <h4>{activeStack}</h4>
          <div className={styles['pile']}>
            {skills[activeStack]
              ? skills[activeStack].map((s, i) => (
                  <SkillItem {...s} key={`${s.name}-skill-item-${i}`} />
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

const SkillItem = ({ name, icon }) => {
  return (
    <div className={`${styles['skill-item']} ${styles['fade-in']}`}>
      <div className={styles['skill-item-icon']}>
        <img src={icon} alt={name} draggable="false" />
      </div>
      <p>{name}</p>
    </div>
  );
};
