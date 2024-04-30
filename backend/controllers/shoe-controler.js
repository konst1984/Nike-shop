const Shoe = require('../models/shoe');

const handleError = (res, error) => {
  res
    .status(500)
    .json({error})
}

const getShoes =  (req, res) => {
  Shoe
    .find({model: req.params.slug})
    .sort({title: 1})
    .then((shoes) => {
    res
      .status(200)
      .json(shoes)
    })
    .catch((err) => handleError(res, err))
}

const getShoe = (req, res) => {
   Shoe
    .findOne({ id: req.params.id})
    // .findById(req.params.id)
    .then((shoe) => {
      res
        .status(200)
        .json(shoe)
    })
    .catch((err) => handleError(res, err))
}

module.exports = {
  getShoes,getShoe
}
