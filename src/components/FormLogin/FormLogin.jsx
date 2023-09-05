import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUserThunk } from 'redux/auth/operations';
import css from './FormLogin.module.css';

const FormLogin = () => {
    const dispatch = useDispatch();
  
    const handleSubmit = event => {
      event.preventDefault();
      const form = event.currentTarget;
      const email = form.elements.userEmail.value;
      const password = form.elements.userPassword.value;
  
      dispatch(
        loginUserThunk({
          email,
          password,
        })
      );
    };
  
    return (
        <form onSubmit={handleSubmit} className={css.login_form}>
          <h1>Login Into Your Account</h1>
          <div className={css.login_input}>
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
          <div className={css.login_input}>
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
            Sign In
          </button>
        </form>
    );
  };
  
  export default FormLogin;