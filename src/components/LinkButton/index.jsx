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
    <InternalLink {...{ link, message }} />
  ) : (
    <ExternalLink {...{ target, link, message }} />
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
    <Link className={styles['link-button']} to={link}>
      <button>
        {message} <AiOutlineArrowRight />
      </button>
    </Link>
  );
};
