import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthentificated } from 'redux/authReducer';
import { registerUserThunk } from 'redux/operations';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthentificated);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(
      registerUserThunk({
        name,
        email,
        password,
      })
    );
  };

  if (authenticated) return <Navigate to="/contacts" />;

  return (  
  <section className={css.register}> 
    <form className={css.register_form} onSubmit={handleSubmit}>
      <h1>Register Your Account</h1>
      <div className={css.register_input}>
        <label className={css.form_label}>
          <p>Name:</p>
          <input 
            name="userName" 
            type="text" 
            className={css.form_control} 
            required minLength={2} 
          />
        </label>
      </div>
      <div className={css.register_input}>
        <label className={css.form_label}>
          <p>Email:</p>
          <input 
            name="userEmail" 
            type="email" 
            className={css.form_control} 
            required 
          />
        </label>
      </div>
      <div className={css.register_input}>
        <label className={css.form_label}>
          <p>Password:</p>
          <input 
            name="userPassword" 
            type="password" 
            className={css.form_control} 
            required minLength={7} 
          />
        </label>
      </div>
        <button 
          type="submit"
          className={css.btn_primary}
        >
            Sign Up
        </button>
    </form>
  </section>
  );
};

export default RegisterPage;