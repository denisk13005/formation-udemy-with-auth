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

/**
 *
 * @param {String} key nom du cookie
 * @param {RequestInfo} req contenu de la requête
 * @returns retourne le cookie correspondant à la clé si il existe
 */
export const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  console.log(req.headers.cookie);
  const rawCookie = req.headers.cookie
    .split(";")
    .find((c) => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split("=")[1];
};
// on va chécker côté serveur si le token est présent dans les cookies (d'où l'utilisation des cookies et non de localStorage afin d'y avoir accès côté serveur)
/**
 *
 * @param {import("react").Context} context
 */
export const redirectFromServer = (context) => {
  if (context.req.headers.cookie) {
    const token = getCookieFromServer("token", context.req);
    if (token) {
      context.res.statusCode = 302;
      context.res.setHeader("Location", "/");
    }
  }
};
