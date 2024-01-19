import MenuListProduct from '../MenuListProduct/MenuListProduct';
import './MenuList.css';

export default function MenuList({ menuProducts, handleAddToOrder }) {
  const products = menuProducts.map(product =>
    <MenuListProduct
      key={product._id}
      handleAddToOrder={handleAddToOrder}
      menuProduct={product}
    />
  );
  return (
    <main className='menulist'>
      {products}
    </main>
  );
}
