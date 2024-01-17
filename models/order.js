const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const productSchema = require('./productSchema')

const lineProductSchema = new Schema({
    qty:{type: Number, default:1},
    product: productSchema
},
{
  timestamps:true,
  toJSON:{virtuals:true}  
});

lineProductSchema.virtual('exPrice').get(function(){
    return this.qty * this.product.price;
});

const orderSchema = new Schema({
    user: {type: Schema.Types.ObjectId,ref: 'User'},
    lineProducts: [lineProductSchema],
    isPaid:{ type: Boolean, default: false}
},
{
    timestamps:true,
    toJSON:{virtuals:true}
});

orderSchema.virtual('orderTotal').get(function(){
    return this.lineProducts.reduce((total,product)=>total + product.extPrice ,0);
})

orderSchema.virtual('totalQty').get(function() {
    return this.lineProducts.reduce((total, product) => total + product.qty, 0);
  });

  orderSchema.virtual('orderId').get(function() {
    return this.id.slice(-6).toUpperCase();
  });

  orderSchema.statics.getCart = function(userId) {
    // 'this' is the Order model
    return this.findOneAndUpdate(
      // query
      { user: userId, isPaid: false },
      // update
      { user: userId },
      // upsert option will create the doc if
      // it doesn't exist
      { upsert: true, new: true }
    );
  };

  orderSchema.methods.addProductToCart = async function(productId) {
    const cart = this;
    // Check if product already in cart
    const lineProduct = cart.lineProducts.find(lineProduct => lineProduct.product._id.equals(productId));
    if (lineProduct) {
      lineProduct.qty += 1;
    } else {
      const product = await mongoose.model('Product').findById(productId);
      cart.lineProducts.push({ product });
    }
    return cart.save();
  };
  
  // Instance method to set an product's qty in the cart (will add product if does not exist)
orderSchema.methods.setProductQty = function(productId, newQty) {
    // this keyword is bound to the cart (order doc)
    const cart = this;
    // Find the line product in the cart for the menu product
    const lineProduct = cart.lineProducts.find(lineProduct => lineProduct.product._id.equals(productId));
    if (lineProduct && newQty <= 0) {
      // Calling deleteOne, removes itself from the cart.lineProcucts array
      lineProduct.deleteOne();
    } else if (lineProduct) {
      // Set the new qty - positive value is assured thanks to prev if
      lineProduct.qty = newQty;
    }
    // return the save() method's promise
    return cart.save();
  };
  
  module.exports = mongoose.model('Order', orderSchema);
  