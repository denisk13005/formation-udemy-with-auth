import React, { useState, useEffect } from "react";
import styles from "../styles/login.module.css";
import { useAuth } from "../auth/context";
import { useRouter } from "next/router";
import { redirectFromServer } from "./../auth/cookies";
const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  //Exemple de redirection côté client
  // useEffect(() => {
  //   isAuthenticated && router.push("/");
  // }, [isAuthenticated]);
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    login(values.username, values.password);
  };
  return (
    <div className={styles.main}>
      <h1> Formulaire de connection</h1>
      <form>
        <label htmlFor="username">Nom utilisateur</label>
        <br />
        <input
          className={styles.input}
          type="text"
          placeholder="username"
          onChange={handleChange("username")}
        />
        <br />

        <label htmlFor="password">password utilisateur</label>
        <br />

        <input
          className={styles.input}
          type="password"
          placeholder="password"
          onChange={handleChange("password")}
        />
        <br />
        <button type="submit" onClick={onSubmit} className={styles.button}>
          Connexion
        </button>
      </form>
    </div>
  );
};

// On se sert de getServerSideProps pour faire une redirection côté serveur si déjà log
export const getServerSideProps = async (context) => {
  redirectFromServer(context);
  return {
    props: {},
  };
};

export default Login;
