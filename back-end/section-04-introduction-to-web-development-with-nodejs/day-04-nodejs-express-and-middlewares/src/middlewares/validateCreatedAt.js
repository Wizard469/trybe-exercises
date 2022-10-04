const validateCreatedAt = (req, res, next) => {
  const { description: { createdAt } } = req.body;

  const dateRegex = /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/i;

  if (!dateRegex.test(createdAt)) {
    return res.status(400).json(
      { "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" }
      );
  };

  next();
};

module.exports = validateCreatedAt;
