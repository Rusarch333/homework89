import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import browserHistory from './browserHistory';
import Router from './router';
import OnlyNotAuthorizedUserRoute from './components/Routes/OnlyNotAuthorizedUserRoute';
import PrivateRoute from './components/Routes/PrivateRoute';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import UserProfile from './pages/UserProfile';
import Payment from './pages/Payment';
import Dashboard from './pages/Dashboard';
import ContestPage from './pages/ContestPage';
import ContestCreationPage from './pages/ContestCreationPage';
import StartContestPage from './pages/StartContestPage';
import ChatContainer from './components/Chat/ChatComponents/ChatContainer';
import Layout from './pages/Layout';
import CONSTANTS from './constants';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route element={<OnlyNotAuthorizedUserRoute />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/registration" element={<RegistrationPage />} />
            </Route>

            <Route element={<PrivateRoute />}>
              <Route path="/payment" element={<Payment />} />
              <Route path="/startContest" element={<StartContestPage />} />
              <Route
                path="/startContest/nameContest"
                element={
                  <ContestCreationPage
                    contestType={CONSTANTS.NAME_CONTEST}
                    title="Company Name"
                  />
                }
              />
              <Route
                path="/startContest/taglineContest"
                element={
                  <ContestCreationPage
                    contestType={CONSTANTS.TAGLINE_CONTEST}
                    title="TAGLINE"
                  />
                }
              />
              <Route
                path="/startContest/logoContest"
                element={
                  <ContestCreationPage
                    contestType={CONSTANTS.LOGO_CONTEST}
                    title="LOGO"
                  />
                }
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/contest/:id" element={<ContestPage />}/>
              <Route path="/account" element={<UserProfile />}/>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <ChatContainer />
      </Router>
    );
  }
}

export default App;
