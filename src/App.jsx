import { Suspense, lazy, useEffect } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import css from 'App.module.css'

import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated, selectToken } from 'redux/authReducer';
import { logoutUserThunk, refreshUserThunk } from 'redux/operations';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);

  useEffect(() => {
    if (!token || authentificated) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch, authentificated]);

  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };

  return (
  <div className={css.container}>
    <header className={css.header}>
        <nav className={css.navBox}>
          <NavLink to="/"
            className={`${css['header__nav-link']}`}
          >
            Home
          </NavLink>
          {authentificated ? (
            <>
              <NavLink to="/contacts"
                className={`${css['header__nav-link']}`}
              >
                Contacts
              </NavLink>
              <button 
                onClick={handleLogOut}
                className={css.btn_primary}
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login"
                className={`${css['header__nav-link']}`}
              >
                Login
              </NavLink>
              <NavLink to="/register"
              className={`${css['header__nav-link']}`}
              >
                Register
              </NavLink>
            </>
          )}
        </nav>
    </header>
    <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo='/login'>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Suspense>
        
    </main>
  </div>
  );
};
