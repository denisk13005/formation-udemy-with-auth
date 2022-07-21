import { useAuth } from "../auth/context.js"; // pas d'import par defaut !!
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/header.module.css";

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();
  console.log(isAuthenticated, user);
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
      {isAuthenticated && (
        <>
          <Link href="/dashboard" passHref>
            <span
              className={
                router.pathname === "/dashboard" ? styles.active : styles.link
              }
            >
              Dashboard
            </span>
          </Link>
          <span className={styles.link}>Bonjour {user.username}</span>
          <button className={styles.link} onClick={logout}>
            Déconnexion
          </button>
        </>
      )}
      {!isAuthenticated && (
        <Link href="/login" passHref>
          <span
            className={
              router.pathname === "/login" ? styles.active : styles.link
            }
          >
            Login
          </span>
        </Link>
      )}
    </div>
  );
};

export default Header;
