const auth = (req, res, next) => {
  const cookie = req.header.cookie;
  const token = cookie.split("=")[1];

  next();
};
export default auth;
