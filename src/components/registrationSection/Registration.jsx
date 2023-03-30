import React from "react";

import styles from "./_registration.module.scss";
import globalStyles from "../_styles.module.scss";
import RegistrationForm from "../bootstrapForm/BootstrapForm";
const Registration = () => {
  return (
    <div className={styles.section}>
      <div className={globalStyles.container}>
        <h2 className={styles.title}>Working with POST request</h2>
        <RegistrationForm />       
      </div>
    </div>
  );
};

export default Registration;
