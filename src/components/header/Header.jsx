import React from 'react';
import Button from '../button/Button';

import styles from "./_header.module.scss";
import globalStyles from "../_styles.module.scss"
import logo from "../../assets/images/Logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={globalStyles.container}>
        <div className={styles.flexWrapper}>
          <div>
            <a href="/">
              <img src={logo} alt="Logo"></img>
            </a>
          </div>
          <div className={styles.wrapper}>
            <Button >Users</Button>
            <Button >Sign up</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;