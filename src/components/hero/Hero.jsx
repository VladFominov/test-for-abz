import React from 'react';
import Button from '../button/Button';

import styles from "./_hero.module.scss"
import globalStyles from "../_styles.module.scss";

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}>
        <div className={globalStyles.container}>
          <div className={styles.heroWrapper}>
            <h1 className={styles.title}>
              Test assignment for front-end developer
            </h1>
            <p className={styles.text}>
              What defines a good front-end developer is one that has skilled
              knowledge of HTML, CSS, JS with a vast understanding of User
              design thinking as they'll be building web interfaces with
              accessibility in mind. They should also be excited to learn, as
              the world of Front-End Development keeps evolving.
            </p>
            <Button className={styles.btn}>Sign up</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;