import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <ul className={styles.headerList}>
          <li className={styles.headerListItem}>
            <NavLink
              exact
              to="/"
              className={styles.headerLink}
              activeClassName={styles.headerLinkActive}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.headerListItem}>
            <NavLink
              exact
              to="/movies"
              className={styles.headerLink}
              activeClassName={styles.headerLinkActive}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
