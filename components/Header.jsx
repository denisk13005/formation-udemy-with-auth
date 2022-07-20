import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

const Header = () => {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <Link href="/" passHref>
        <span className={router.pathname === "/" ? styles.active : styles.link}>
          Home
        </span>
      </Link>
      <Link href="/profile" passHref>
        <span
          className={
            router.pathname === "/profile" ? styles.active : styles.link
          }
        >
          Profile
        </span>
      </Link>
      <Link href="/dashboard" passHref>
        <span
          className={
            router.pathname === "/dashboard" ? styles.active : styles.link
          }
        >
          Dashboard
        </span>
      </Link>
      <Link href="/login" passHref>
        <span
          className={router.pathname === "/login" ? styles.active : styles.link}
        >
          Login
        </span>
      </Link>
    </div>
  );
};

export default Header;
