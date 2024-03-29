const product = require('./product');

const Schema = require('mongoose').Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  img: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  price: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
});

module.exports = productSchema;