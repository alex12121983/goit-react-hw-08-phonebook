import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthentificated } from 'redux/auth/selectors';
import FormRegister from 'components/FormRegister/FormRegister';

import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const authenticated = useSelector(selectAuthentificated);

  if (authenticated) return <Navigate to="/contacts" />;

  return (  
  <section className={css.register}> 
      <FormRegister />
  </section>
  );
};

export default RegisterPage;
