import { LinkButton } from '../LinkButton';
import styles from './styles.module.css';

const ProjectItem = ({
  project_name,
  project_url,
  project_description,
  tags = [],
  link = '#',
}) => {
  return (
    <div className={styles['project_item']}>
      <div className={styles['project_item_thumbnail']}>
        <img src={project_url ? project_url : ''} alt="boo" />
      </div>
      <div className={styles['project_item_meta']}>
        <h3>{project_name}</h3>
        <p>{project_description}</p>

        <div className={styles['project_item_tags']}>
          {tags.map((t) => (
            <p>{t}</p>
          ))}
        </div>

        <LinkButton {...{ link, target: '_blank', message: 'View Website' }} />
      </div>
    </div>
  );
};

export default ProjectItem;
