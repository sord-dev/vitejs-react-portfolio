import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export const LinkButton = ({
  message = 'Read More',
  link = '#',
  target = '_blank',
  sameSite = false,
}) => {
  return sameSite ? (
    <InternalLink {...{ target, link, message }} />
  ) : (
    <ExternalLink {...{ link, message }} />
  );
};

const ExternalLink = ({ link, target, message }) => {
  return (
    <a className={styles['link-button']} href={link} target={target}>
      <button>
        {message} <AiOutlineArrowRight />
      </button>
    </a>
  );
};

const InternalLink = ({ link, message }) => {
  return (
    <Link to={link}>
      <a className={styles['link-button']} href={link}>
        <button>
          {message} <AiOutlineArrowRight />
        </button>
      </a>
    </Link>
  );
};
