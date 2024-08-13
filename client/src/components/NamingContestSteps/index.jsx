import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './NamingContestSteps.module.sass';
import CONSTANTS from '../../constants';

const NamingContestSteps = ({
  stylesContainer,
  stepDirectionStyles,
  isImageBeforeContent,
  imageName,
  stepContent,
  content,
}) => {
  const stepClass = cx(styles.step, styles[stepDirectionStyles]);
  const showContent = (item, index) => (
    <p key={index}>
      <i className={'fas fa-check'} />
      <span>{item}</span>
    </p>
  );
  return (
    <div className={styles[stylesContainer]}>
      <div className={stepClass}>
        {isImageBeforeContent && (
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}gif/${imageName}`}
            alt="compressed"
          />
        )}
        <div>
          <h3>{stepContent}</h3>
          {content.map(showContent)}
        </div>
        {!isImageBeforeContent && ( // ???????????????????????
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}gif/${imageName}`}
            alt="compressed"
          />
        )}
      </div>
    </div>
  );
};

// NamingContestSteps.propTypes = {};

export default NamingContestSteps;
