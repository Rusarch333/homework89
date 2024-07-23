import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './ButtonGroup.module.scss';

const Button = (props) => {
  const {
    btn: { id, text },
    activeBtn,
    setActiveBtn = () => {},
  } = props;
  const handleClick = () => {
    setActiveBtn(id);
  };
  const classNames = cx(styles.btn, {
    [styles.active]: activeBtn === id,
  });
  return (
    <button onClick={handleClick} className={classNames}>
      {text}
    </button>
  );
};

Button.propTypes = {
  btn: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }),
  activeBtn: PropTypes.number.isRequired,
  setActiveBtn: PropTypes.func,
};

export default Button;
