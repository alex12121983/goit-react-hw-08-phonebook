import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUserThunk } from 'redux/auth/operations';
import css from './FormRegister.module.css';

const FormRegister = () => {
  const dispatch = useDispatch();

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


  return (  
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
  );
};

export default FormRegister;
