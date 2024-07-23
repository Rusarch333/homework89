import React, { useState } from 'react';
import Button from './Button';
import styles from './ButtonGroup.module.scss';

const dataButtons = [
  { id: 1, text: 'top categories' },
  { id: 2, text: 'top industry' },
  { id: 3, text: 'top ideas' },
];

const ButtonGroup = () => {
  const [activeBtn, setActiveBtn] = useState(dataButtons.at(0).id);
  const showBtn = (btn) => (
    <Button
      key={btn.id}
      btn={btn}
      activeBtn={activeBtn}
      setActiveBtn={setActiveBtn}
    />
  );
  return <div className={styles.btnGroup}>{dataButtons.map(showBtn)}</div>;
};

export default ButtonGroup;
