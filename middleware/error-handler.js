const { CustomAPIError } = require("../errors/custom-error");

const errorHandelerMiddleware = (err, req, res, next) => {
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg: err.message})
    }
  return res.status(500).json({ msg: `somthing went wrong, please try again` });
};

module.exports = errorHandelerMiddleware;
