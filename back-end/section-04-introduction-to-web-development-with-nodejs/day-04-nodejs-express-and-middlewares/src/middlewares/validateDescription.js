const validateDescription = (descriptionValeu, res, value) => {
  if (descriptionValeu === undefined) {
    return res.status(400).json(
      { "message": `O campo ${value} é obrigatório` }
      );
  };
};

module.exports = (req, res, next) => {
  const { description } = req.body;
  const { createdAt, rating, difficulty } = description;

  return validateDescription(description, res, 'description')
  || validateDescription(createdAt, res, 'createdAt')
  || validateDescription(rating, res, 'rating')
  || validateDescription(difficulty, res, 'difficulty')
  || next();
};
