function setCookie(name, value) {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 60 * 1000); // 60 seconds * 1000 milliseconds
  const cookieString = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = cookieString;
}
setCookie("myCookie", "myValue"); // Set a cookie that expires after one minute
