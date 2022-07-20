import React, { useState } from "react";
import styles from "../styles/login.module.css";
const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values.username, values.password);
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

export default Login;
