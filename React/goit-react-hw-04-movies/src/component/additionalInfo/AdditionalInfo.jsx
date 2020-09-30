import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./additionalInfo.module.scss";

const {
  additional,
  additionalTitle,
  additionalList,
  additionalListItem,
  additionalActive,
  additionalLink,
} = styles;

const AdditionalInfo = ({ match, location }) => {
  return (
    <div className={additional}>
      <h2 className={additionalTitle}>Additional information</h2>
      <ul className={additionalList}>
        <li className={additionalListItem}>
          <NavLink
            activeClassName={additionalActive}
            className={additionalLink}
            exact
            to={{
              pathname: `${match.url}/cast`,
              state: {
                from: location.state.from,
              },
            }}
          >
            Cast
          </NavLink>
        </li>
        <li className={additionalListItem}>
          <NavLink
            activeClassName={additionalActive}
            className={additionalLink}
            to={{
              pathname: `${match.url}/reviews`,
              state: {
                from: location.state.from,
              },
            }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalInfo;
