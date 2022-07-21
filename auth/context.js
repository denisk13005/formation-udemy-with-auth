import React, { useState, createContext, useContext } from "react";
import api from "./axios";
import Router from "next/router";
import { setCookie, removeCookie, getCookieFromBrowser } from "./cookies";
import jwt from "jwt-decode";
const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (username, password) => {
    //on va récupérer le token a 'l'url défini dans la config de axios (baseURL) a laquelle on ajoute /api/login
    const { data: token } = await api.post("/api/login", {
      username,
      password,
    });
    //si on obtient le token on le passe dans le header de la requête pour allez rcupérer l'utilisateur correspondant puis on met à jour le state avec
    if (token) {
      setCookie("token", token);
      api.defaults.headers.Authorization = `Bearer ${token}`;
      const userData = jwt(token); // on décode le token
      const { data: user } = await api.get(`/api/user/${userData._id}`); //on va récupérer l'user grace à l'userData._id décodé du token
      setUser(user);
      Router.push("/");
    }
  };
  // lorsqu'on se déconnecte on supprime le token des cookies et on réinitialise l'user
  const logout = () => {
    removeCookie("token");
    setUser(null);
    Router.push("/");
  };
  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
