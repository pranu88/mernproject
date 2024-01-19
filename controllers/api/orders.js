const Order = require('../../models/order');
// const Product = require('../../models/product');

module.exports = {
  cart,
  addToCart,
  setProductQtyInCart,
  checkout,
  history
};

// A cart is the unpaid order for a user
async function cart(req, res) {
  try{
    const cart = await Order.getCart(req.user._id);
    res.status(200).json(cart);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

// Add an product to the cart
async function addToCart(req, res) {
  try{
    const cart = await Order.getCart(req.user._id);
    await cart.addProductToCart(req.params.id);
    res.status(200).json(cart);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

// Updates an product's qty in the cart
async function setProductQtyInCart(req, res) {
  try{
    const cart = await Order.getCart(req.user._id);
    console.log('controllers cart'+ cart)
console.log(req.body)
    await cart.setProductQty(req.body.productId, req.body.newQty);
    

    res.status(200).json(cart);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  try{
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    res.status(200).json(cart);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

// Return the logged in user's paid order history
async function history(req, res) {
  // Sort most recent orders first
  try{
    console.log('before searching the order')
    const orders = await Order
      .find({ user: req.user._id, isPaid: true })
      .sort('-updatedAt').exec();
      console.log(orders)
    res.status(200).json(orders);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }

}