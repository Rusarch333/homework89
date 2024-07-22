import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../Logo';
import styles from './AuthHeader.module.sass';
import CONSTANTS from '../../../constants';

const AuthHeader = () => {
  const { pathname } = useLocation();

  const isLoginPage = pathname === '/login';

  return (
    <div className={styles.container}>
        <header className={styles.headerAuthPage}>
          <Logo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo" />
          <div className={styles.linkAuthContainer}>
            <Link to={isLoginPage ?"/registration" : "/login"}>
              <span>{isLoginPage ? 'Signup' : 'Login'}</span>
            </Link>
          </div>
        </header>
    </div>
  );
};

export default AuthHeader;
