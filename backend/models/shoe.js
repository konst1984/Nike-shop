const { mongoose } = require('mongoose');

const shoesSchema = mongoose.Schema({
  id: {
    type: String,
  },
  category: {
    type: String,
  },
  title: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
  },
  images: {
    type: [String],
  },
  color: {
    type: String,
  },
  gender: {
    type: String,
  },
  height: {
    type: String,
  },
  price: {
    type: Number,
  },
  sizes: {
    type: [{
      size: Number,
      enabled: Boolean
    }],
  }
})


const Shoe = mongoose.model('Shoe', shoesSchema);

module.exports = Shoe;