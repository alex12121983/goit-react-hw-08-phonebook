import React from 'react';
import css from './HomePage.module.css'

const HomePage = () => {

  return (
    <section className={css.home}>
      <div className={css.home_main}>
        <h1>Welkome to your Phonebook!</h1>
      </div>
    </section>
  );
};

export default HomePage;
