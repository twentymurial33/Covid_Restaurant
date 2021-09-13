import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.welcomeTitle}>Covid Reataurant</h1>
      <p className={styles.welcomeSubTitle}>We made food with love</p>
      <div className={styles.btnOrder}>
        <Link to="/order-menu" className={styles.btn}>
          <a>Let&apos;s order!</a>
        </Link>
      </div>
    </main>
  );
}
