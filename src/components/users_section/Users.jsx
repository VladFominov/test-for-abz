import React from "react";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import { getUsers } from "../../services/api";
import globalStyles from "../_styles.module.scss";
import styles from "./_users.module.scss";
import Button from "../button/Button";
import "../../scss/custom.scss";

const Users = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsloading] = useState(false);

  const loadMore = () => {
    setPage(page => page + 1);
  };

  useEffect(() => {
    setIsloading(true);
    getUsers()
      .then((res) => setUser(res.users))
      .catch((error) => {
        console.log(error);
      });
    setIsloading(false);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setIsloading(true);
    getUsers(page)
      .then((res) => setUser([...user, ...res.users]))
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsloading(false));
    // eslint-disable-next-line
  }, [page]);

  return (
    <div className={styles.section}>
      <div className={globalStyles.container}>
        <h2 className={styles.title}>Working with GET request</h2>
        {isLoading && <CircularProgress />}
        <ul className={styles.cardList}>
          {user.map(({ name, photo, position, phone, email, id }) => (
            <div className={styles.cardWrapper} key={id}>
              <li>
                <img
                  className={styles.cardImg}
                  src={photo}
                  alt="avatar"
                  width="70px"
                  height="70px"
                ></img>
              </li>
              <li className={styles.cardName}>{name}</li>
              <li className={styles.cardPos}>{position}</li>
              <li className={styles.cardEmail}>
                <span
                  className="d-inline-block text-truncate" 
                >
                  {email}
                </span>
              </li>
              <li className={styles.cardPhone}>{phone}</li>
            </div>
          ))}
        </ul>
        {user.length === 6 && (
          <Button className={styles.btn} onClick={loadMore}>
            Show more
          </Button>
        )}
      </div>
    </div>
  );
};

export default Users;
