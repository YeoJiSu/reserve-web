export interface cookieType {
  [key: string]: string;
}

export const cookieStringToObject = (
  cookieString: string | undefined,
): cookieType => {
  const cookies: cookieType = {};

  if (cookieString) {
    return cookieString
      .split(";")
      .map((v) => {
        return v.split("=");
      })
      .map(([k, ...vs]) => [k, vs.join("=")])
      .reduce((acc, [k, v]) => {
        acc[k.trim()] = decodeURIComponent(v);
        return acc;
      }, {});
  }

  return cookies;
};
