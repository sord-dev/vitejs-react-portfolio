import { LinkButton } from '../LinkButton';
import styles from './styles.module.css';

const ProjectItem = ({
  project_name,
  project_url,
  code = '#',
  project_description,
  tags = [],
  link = '#',
}) => {
  return (
    <div className={styles['project_item']}>
      <div className={styles['project_item_thumbnail']}>
        <img src={project_url ? project_url : ''} alt="boo" draggable="false" />
      </div>
      <div className={styles['project_item_meta']}>
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
