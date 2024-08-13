import React from 'react';
import styles from './ContestBox.module.sass';
import { formatDiffDate, ucFirstLetter } from '../../utils/functions';
import CONSTANTS from '../../constants';

const ContestBox = ({ data, goToExtended }) => {
  const getPreferenceContest = () => {
    if (data.contestType === CONSTANTS.NAME_CONTEST) return data.typeOfName;
    if (data.contestType === CONSTANTS.LOGO_CONTEST) return data.brandStyle;
    return data.typeOfTagline;
  };

  const handleClick = () => goToExtended(id);

  const { id, title, contestType, prize, count = 0, createdAt } = data;
  return (
    <article className={styles.contestBoxContainer}>
      <div className={styles.mainContestInfo}>
        <h2 className={styles.title} onClick={handleClick}>
          <span>{title}</span>
        </h2>
        <h3 className={styles.additionalInfo}>
          <span className={styles.contestCategory}>{`${ucFirstLetter(
            contestType
          )} / ${getPreferenceContest()}`}</span>
          <span className={styles.formatDiffDate}>
            {formatDiffDate(createdAt)}
          </span>
        </h3>
        <p className={styles.contestContent}>
          This is an Invitation Only Contest and is only open to those Creatives
          who have achieved a Tier A status.
        </p>
        <div className={styles.prizeContainer}>
          <div className={styles.guaranteedContainer}>
            <img
              className={styles.contestIcon}
              src={`${CONSTANTS.STATIC_IMAGES_PATH}smallCheck.png`}
              alt="check"
            />
            <span>Guaranteed prize</span>
          </div>
          <div className={styles.prize}>
            <img
              className={styles.contestIcon}
              src={`${CONSTANTS.STATIC_IMAGES_PATH}ac-diamond.svg`}
              alt="diamond"
            />
            <span>{`$${prize}`}</span>
          </div>
        </div>
      </div>
      <div className={styles.entryAndTimeContainer}>
        <div className={styles.entriesContainer}>
          <div className={styles.entriesCounter}>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}ac-user.svg`}
              alt="logo"
            />
            <span className={styles.entries}>Entries</span>
          </div>
          <span className={styles.entriesSpan}>{count}</span>
        </div>
        <div className={styles.timeContainer}>
          <div className={styles.timePosted}>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}ac-time.svg`}
              alt="logo"
            />
            <span className={styles.timeLeft}>Time passed</span>
          </div>
          <span className={styles.timeContest}>
            {formatDiffDate(createdAt)}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ContestBox;
