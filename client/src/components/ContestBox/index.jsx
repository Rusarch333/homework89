import React from 'react';
import styles from './ContestBox.module.sass';
import CONSTANTS from '../../constants';
import { formatDiffDate, ucFirstLetter } from '../../utils/functions';

const ContestBox = ({ data, goToExtended }) => {
  const getPreferenceContest = () => {
    if (data.contestType === CONSTANTS.NAME_CONTEST) return data.typeOfName;
    if (data.contestType === CONSTANTS.LOGO_CONTEST) return data.brandStyle;
    return data.typeOfTagline;
  };

  const { id, title, contestType, prize, count, createdAt } = data;
  return (
    <div
      className={styles.contestBoxContainer}
      onClick={() => goToExtended(id)}
    >
      <div className={styles.mainContestInfo}>
        <div className={styles.titleAndIdContainer}>
          <span className={styles.title}>{title}</span>
          <span className={styles.id}>{`(#${id})`}</span>
        </div>
        <div className={styles.contestType}>
          <span>{`${ucFirstLetter(
            contestType
          )} / ${getPreferenceContest()}`}</span>
        </div>
        <div className={styles.contestType}>
          <span>
            This is an Invitation Only Contest and is only open to those
            Creatives who have achieved a Tier A status.
          </span>
        </div>
        <div className={styles.prizeContainer}>
          <div className={styles.guaranteedContainer}>
            <div>
              <img
                src={`${CONSTANTS.STATIC_IMAGES_PATH}smallCheck.png`}
                alt="check"
              />
            </div>
            <span>Guaranteed prize</span>
          </div>
          <div className={styles.prize}>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}diamond.png`}
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
              src={`${CONSTANTS.STATIC_IMAGES_PATH}entrieImage.png`}
              alt="logo"
            />
            <span>{count}</span>
          </div>
          <span>Entries</span>
        </div>
        <div className={styles.timeContainer}>
          <span className={styles.timeContest}>
            {formatDiffDate(createdAt)}
          </span>
          <span>Going</span>
        </div>
      </div>
    </div>
  );
};

export default ContestBox;
