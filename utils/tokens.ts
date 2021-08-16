interface cookieType {
  [key: string]: string;
}

export const cookieStringToObject = (
  cookieString: string | undefined,
): cookieType => {
  const cookies: cookieType = {};

  if (cookieString) {
    const itemString = cookieString?.split(/\s;\s*/);
    itemString.forEach((value) => {
      const data = value.split(/\s*=\s*/);
      cookies[data[0]] = data.splice(1).join("=");
    });
  }

  return cookies;
};
