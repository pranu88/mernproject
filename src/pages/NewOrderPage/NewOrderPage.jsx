import { useState, useEffect, useRef } from 'react';
import * as productsAPI from '../../utilities/products-api';
import * as ordersAPI from '../../utilities/order-api';
import './NewOrderPage.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser }) {
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
    const updatedCart = await ordersAPI.setProductQtyInCart(productId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

  return (
    <main className='NewOrderPage'>
      <aside>
        {/* <Logo /> */}
        <CategoryList
          categories={categoriesRef.current}
          cart={setCart}
          setActiveCat={setActiveCat}
        />
        {/* <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link> */}
        {/* <UserLogOut user={user} setUser={setUser} /> */}
      </aside>
      <aside className='menulist'>
      <MenuList
        menuProducts={menuProducts.filter(product => product.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />
      </aside>
      {/* <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      /> */}
    </main>
  );
}