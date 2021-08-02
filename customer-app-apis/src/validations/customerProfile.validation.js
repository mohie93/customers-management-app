exports.validateCreateRequest = (req, res, next) => {
  try {
    next();
  } catch (error) {
    res.status(422).json({ error });
  }
};

exports.validateGetAllRequest = (req, res, next) => {
  try {
    next();
  } catch (error) {
    res.status(422).json({ error });
  }
};

exports.validateGetByIdRequest = (req, res, next) => {
  try {
    next();
  } catch (error) {
    res.status(422).json({ error });
  }
};

exports.validateDestroyRequest = (req, res, next) => {
  try {
    next();
  } catch (error) {
    res.status(422).json({ error });
  }
};

exports.validateSortByRequest = (req, res, next) => {
  try {
    next();
  } catch (error) {
    res.status(422).json({ error });
  }
};

exports.validateSearchByRequest = (req, res, next) => {
  try {
    next();
  } catch (error) {
    res.status(422).json({ error });
  }
};

exports.validateUpdateRequest = (req, res, next) => {
  try {
    next();
  } catch (error) {
    res.status(422).json({ error });
  }
};
