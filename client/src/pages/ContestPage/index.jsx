import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import styles from './ContestPage.module.sass';
import 'react-18-image-lightbox/style.css';
import isEqual from 'lodash/isEqual';
import withRouter from '../../hocs/withRouter';
import {
  getContestById,
  setOfferStatus,
  clearSetOfferStatusError,
  changeEditContest,
  changeContestViewMode,
  changeShowImage,
} from '../../store/slices/contestByIdSlice';
import { goToExpandedDialog } from '../../store/slices/chatSlice';
import LightBox from 'react-18-image-lightbox';
import ContestSideBar from '../../components/ContestSideBar/ContestSideBar';
import OfferBox from '../../components/OfferBox/OfferBox';
import OfferForm from '../../components/OfferForm/OfferForm';
import Brief from '../../components/Brief/Brief';
import Spinner from '../../components/Spinner';
import TryAgain from '../../components/TryAgain/TryAgain';
import Error from '../../components/Error/Error';
import CONSTANTS from '../../constants';

const ContestPage = ({
  params: { id },
  changeShowImage,
  changeContestViewMode,
  clearSetOfferStatusError,
}) => {
  const dispatch = useDispatch();

  const {
    isShowOnFull,
    imagePath,
    error,
    isFetching,
    isBrief,
    contestData,
    offers,
    setOfferStatusError,
  } = useSelector((state) => state.contestByIdStore);
  const { role } = useSelector((state) => state.userStore);
  const { messagesPreview } = useSelector((state) => state.chatStore);

  const getData = useCallback(() => {
    dispatch(getContestById({ contestId: id }));
  }, [dispatch, id]);

  useEffect(() => {
    getData();
    return () => {
      dispatch(changeEditContest(false));
    };
  }, [dispatch, id]);

  const setOffersList = () => {
    const array = [];
    for (let i = 0; i < offers.length; i++) {
      array.push(
        <OfferBox
          data={offers[i]}
          key={offers[i].id}
          needButtons={needButtons}
          setOfferStatus={setOfferStatus}
          contestType={contestData.contestType}
          date={new Date()}
        />
      );
    }
    return array.length !== 0 ? (
      array
    ) : (
      <div className={styles.notFound}>
        There is no suggestion at this moment
      </div>
    );
  };

  const needButtons = (offerStatus) => {
    const contestCreatorId = contestByIdStore.contestData.User.id;
    const userId = userStore.data.id;
    const contestStatus = contestByIdStore.contestData.status;
    return (
      contestCreatorId === userId &&
      contestStatus === CONSTANTS.CONTEST_STATUS_ACTIVE &&
      offerStatus === CONSTANTS.OFFER_STATUS_PENDING
    );
  };

  const setOfferStatus = (creatorId, offerId, command) => {
    dispatch(clearSetOfferStatusError());
    const { id, orderId, priority } = contestByIdStore.contestData;
    const obj = {
      command,
      offerId,
      creatorId,
      orderId,
      priority,
      contestId: id,
    };
    dispatch(setOfferStatus(obj));
  };

  const findConversationInfo = (interlocutorId) => {
    const { id } = userStore.data;
    const participants = [id, interlocutorId];
    participants.sort(
      (participant1, participant2) => participant1 - participant2
    );
    for (let i = 0; i < messagesPreview.length; i++) {
      if (isEqual(participants, messagesPreview[i].participants)) {
        return {
          participants: messagesPreview[i].participants,
          _id: messagesPreview[i]._id,
          blackList: messagesPreview[i].blackList,
          favoriteList: messagesPreview[i].favoriteList,
        };
      }
    }
    return null;
  };

  const goChat = () => {
    const { User } = contestByIdStore.contestData;
    dispatch(
      goToExpandedDialog({
        interlocutor: User,
        conversationData: findConversationInfo(User.id),
      })
    );
  };

  return (
    <div>
      {/* <Chat/> */}
      {isShowOnFull && (
        <LightBox
          mainSrc={`${CONSTANTS.publicURL}${imagePath}`}
          onCloseRequest={() =>
            dispatch(changeShowImage({ isShowOnFull: false, imagePath: null }))
          }
        />
      )}
      {error ? (
        <div className={styles.tryContainer}>
          <TryAgain getData={getData} />
        </div>
      ) : isFetching ? (
        <div className={styles.containerSpinner}>
          <Spinner />
        </div>
      ) : (
        <div className={styles.mainInfoContainer}>
          <div className={styles.infoContainer}>
            <div className={styles.buttonsContainer}>
              <span
                onClick={() => dispatch(changeContestViewMode(true))}
                className={classNames(styles.btn, {
                  [styles.activeBtn]: isBrief,
                })}
              >
                Brief
              </span>
              <span
                onClick={() => dispatch(changeContestViewMode(false))}
                className={classNames(styles.btn, {
                  [styles.activeBtn]: !isBrief,
                })}
              >
                Offer
              </span>
            </div>
            {isBrief ? (
              <Brief contestData={contestData} role={role} goChat={goChat} />
            ) : (
              <div className={styles.offersContainer}>
                {role === CONSTANTS.CREATOR &&
                  contestData.status === CONSTANTS.CONTEST_STATUS_ACTIVE && (
                    <OfferForm
                      contestType={contestData.contestType}
                      contestId={contestData.id}
                      customerId={contestData.User.id}
                    />
                  )}
                {setOfferStatusError && (
                  <Error
                    data={setOfferStatusError.data}
                    status={setOfferStatusError.status}
                    clearError={() => dispatch(clearSetOfferStatusError())}
                  />
                )}
                <div className={styles.offers}>{setOffersList()}</div>
              </div>
            )}
          </div>
          <ContestSideBar
            contestData={contestData}
            totalEntries={offers.length}
          />
        </div>
      )}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   const { contestByIdStore, userStore, chatStore } = state;
//   return { contestByIdStore, userStore, chatStore };
// };

// const mapDispatchToProps = (dispatch) => ({
//   getDataFunc: (data) => dispatch(getContestById(data)),
//   setOfferStatus: (data) => dispatch(setOfferStatus(data)),
//   clearSetOfferStatusError: () => dispatch(clearSetOfferStatusError()),
//   goToExpandedDialog: (data) => dispatch(goToExpandedDialog(data)),
//   changeEditContest: (data) => dispatch(changeEditContest(data)),
//   changeContestViewMode: (data) => dispatch(changeContestViewMode(data)),
//   changeShowImage: (data) => dispatch(changeShowImage(data)),
// });

export default withRouter(ContestPage);
