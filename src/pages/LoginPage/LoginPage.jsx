import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthentificated } from 'redux/auth/selectors';
import FormLogin from 'components/FormLogin/FormLogin';

import css from './LoginPage.module.css';

const LoginPage = () => {
  const authenticated = useSelector(selectAuthentificated);

  if (authenticated) return <Navigate to="/contacts" />;

  return (
    <section className={css.login}>
      <FormLogin />
    </section>
  );
};

export default LoginPage;
