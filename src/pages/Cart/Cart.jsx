import { useState, useEffect, useRef } from 'react';
import * as productsAPI from '../../utilities/products-api';
import * as ordersAPI from '../../utilities/order-api';
import  './Cart.css';
import {  useNavigate } from 'react-router-dom';
import OrderDetail from '../../components/OrderDetail/OrderDetail';


export default function Cart({ user, setUser }) {
  const [menuProducts, setMenuProducts] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function() {
    async function getProducts() {
      const products = await productsAPI.getAll();

      console.log('products from database :' +products)

      categoriesRef.current = products.reduce((cats, product) => {
        const cat = product.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      setMenuProducts(products);
      setActiveCat(categoriesRef.current[0]);
    }
    getProducts();
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);
  // Providing an empty 'dependency array'
  // results in the effect running after
  // the FIRST render only

  /*-- Event Handlers --*/
  async function handleAddToOrder(productId) {
    const updatedCart = await ordersAPI.addProductToCart(productId);
    setCart(updatedCart);
  }

  async function handleChangeQty(productId, newQty) {
    console.log('in cart'+productId)
    console.log('in cart'+newQty)
    const updatedCart = await ordersAPI.setProductQtyInCart(productId, newQty);
    console.log('in cart'+updatedCart)
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

  return (
    <main className='cart'>
            
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </main>
  );
}