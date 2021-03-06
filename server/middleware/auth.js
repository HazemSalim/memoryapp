const jwt = require("jsonwebtoken");

const secret = "test";

const auth = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const isCustomAuth = token.length < 500;

      let decodedData;

      if (token && isCustomAuth) {
        decodedData = jwt.verify(token, secret);

        if (decodedData) req.userId = decodedData.id;
      } else {
        decodedData = jwt.decode(token);

        if (decodedData) req.userId = decodedData.sub;
      }
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = auth;
