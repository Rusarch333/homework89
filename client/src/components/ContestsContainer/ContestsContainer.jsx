import React from 'react';
import styles from './ContestContainer.module.sass';
import Spinner from '../Spinner';

class ContestsContainer extends React.Component {
  componentDidMount () {
    window.addEventListener('scroll', this.scrollHandler);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  // Вимкнув, для демонстрації дублює постійно контести зі списку при
  // скроллі, створюючи безкінечний список контестів

  // scrollHandler = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop ===
  //     document.documentElement.offsetHeight
  //   ) {
  //     if (this.props.haveMore) {
  //       this.props.loadMore(this.props.children.length);
  //     }
  //   }
  // };

  render () {
    const { isFetching } = this.props;
    if (!isFetching && this.props.children.length === 0) {
      return <div className={styles.notFound}>Nothing not found</div>;
    }
    return (
      <div>
        {this.props.children}
        {isFetching && (
          <div className={styles.spinnerContainer}>
            <Spinner />
          </div>
        )}
      </div>
    );
  }
}

export default ContestsContainer;
