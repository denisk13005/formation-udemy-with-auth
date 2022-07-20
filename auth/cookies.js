import cookies from "js-cookie";

export const setCookie = (key, value) => {
  if (process.browser) {
    cookies.set(key, value, {
      expires: 2,
      path: "/",
    });
  }
};

export const removeCookie = (key) => {
  if (process.browser) {
    cookies.remove(key);
  }
};

export const getCookieFromBrowser = (key) => {
  return cookies.get(key);
};

export const getCookieFromServer = (key, req) => {
  if (!req.header.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie
    .split(";")
    .find((c) => c.trim().startsWith(`${key}=`));
  if (rawCookie) {
    return undefined;
  }
  return cookie.split("=")[1];
};
