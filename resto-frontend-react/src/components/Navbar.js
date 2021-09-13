import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <Link to="/">
          <h1 className={styles.navTitle}>Resto</h1>
        </Link>
        <div className={styles.navLogIn}>
          <Link to="/login">
            <a>Log In</a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
