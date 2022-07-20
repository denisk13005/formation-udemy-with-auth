import React, { useState, createContext, useContext } from "react";
import api from "./axios";
import Router from "next/router";
import { setCookie, removeCookie, getCookieFromBrowser } from "./cookies";
const AuthContext = createContext({});
