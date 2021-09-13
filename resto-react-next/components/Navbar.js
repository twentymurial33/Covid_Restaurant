import React from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <h1 className={styles.navTitle}>Resto</h1>
        <div className={styles.navLogIn}>
          <Link href="/login">
            <a>LogIn</a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
