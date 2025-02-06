const JWT = require("jsonwebtoken");
// here we will decrypt token

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
        console.log(err);
        
      if (err) {
        return res.status(406).send({
          success: false,
          message: "unauthorized user",
        });
      } else {
        req.body.id = decode.id;
        next();
      }
    });
  } catch (error) {
    console.log(error),
      res.status(500).send({
        success: false,
        message: "Error happened in middleware auth token",
        error,
      });
  }
};
