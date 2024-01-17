import styles from './MenuList.css';
import MenuListProduct from '../MenuListProduct/MeniListProduct';

export default function MenuList({ menuProducts, handleAddToOrder }) {
  const products = menuProducts.map(product =>
    <MenuListProduct
      key={product._id}
      handleAddToOrder={handleAddToOrder}
      menuProduct={product}
    />
  );
  return (
    <main className={styles.MenuList}>
      {products}
    </main>
  );
}
