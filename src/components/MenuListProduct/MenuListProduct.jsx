import styles from './MenuListProduct.css';

export default function MenuListProduct({ menuProduct, handleAddToOrder }) {
  return (
    <div className={styles.MenuListProduct}>
      <div className={styles.img + ' ' + 'flex-ctr-ctr'}>{menuProduct.img}</div>
      <div className={styles.name}>{menuProduct.name}</div>
      <div className={styles.buy}>
        <span>${menuProduct.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuProduct._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}