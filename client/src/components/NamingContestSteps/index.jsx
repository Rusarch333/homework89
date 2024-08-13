import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './NamingContestSteps.module.sass';
import CONSTANTS from '../../constants';

const NamingContestSteps = ({
  stylesContainer = 'whiteContainer',
  stepDirectionStyles = 'stepReverse',
  isImageBeforeContent = false,
  imageName,
  imageAlt = 'compressed',
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
            alt={imageAlt}
          />
        )}
        <div>
          <h3>{stepContent}</h3>
          {content.map(showContent)}
        </div>
        {isImageBeforeContent === false && (
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}gif/${imageName}`}
            alt={imageAlt}
          />
        )}
      </div>
    </div>
  );
};

NamingContestSteps.propTypes = {
  stylesContainer: PropTypes.string,
  stepDirectionStyles: PropTypes.string,
  isImageBeforeContent: PropTypes.bool,
  imageName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  stepContent: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NamingContestSteps;
