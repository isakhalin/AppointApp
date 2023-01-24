import React from 'react';

import classes from "./header.module.css";

export const Header = () => {
  return (
    <div className={`${classes.headerWrp} ${classes.title}`}>
      <div className={classes.mainTitle}>Министерство образования Сахалинской области</div>
      <div className={classes.title}>Сервис бронирования зала</div>
    </div>
  );
};