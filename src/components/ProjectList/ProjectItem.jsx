import React, { useState } from 'react';

import { LinkButton } from '../LinkButton';
import styles from './styles.module.css';

const ProjectItem = ({
  project_name,
  project_url = [],
  code = '#',
  project_description,
  tags = [],
  link = '#',
}) => {
  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <div
      className={styles.project_item}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.project_item_thumbnail}>
        <img
          src={
            hovering && project_url.length > 1 ? project_url[1] : project_url[0]
          }
          alt="Project Thumbnail"
          draggable="false"
        />
      </div>
      <div className={styles.project_item_meta}>
        <h3>{project_name}</h3>
        <p>{project_description}</p>

        <div className={styles['project_item_tags']}>
          {tags.map((t, i) => (
            <p key={`product-item-tag-${t}-index-${i}`}>{t}</p>
          ))}
        </div>

        <div className={styles['project_item_links']}>
          <LinkButton
            {...{ link, target: '_blank', message: 'View Website' }}
          />
          <LinkButton
            {...{ link: code, target: '_blank', message: 'View Repo' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
