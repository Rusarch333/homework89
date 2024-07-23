import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.sass';
import CONSTANTS from '../../constants';

const Card = (props) => {
  const {
    card: { src, alt, title, description },
  } = props;
  return (
    <article className={styles.card}>
      <img src={`${CONSTANTS.STATIC_IMAGES_PATH}${src}`} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default Card;
