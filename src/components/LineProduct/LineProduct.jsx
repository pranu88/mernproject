import styles from './LineProduct.css';

export default function LineProduct({ lineProduct, isPaid, handleChangeQty }) {
return (
  <div className={styles.LineProduct}>
    <div className="flex-ctr-ctr">{lineProduct.product.img}</div>
    <div className="flex-ctr-ctr flex-col">
      <span className="align-ctr">{lineProduct.product.name}</span>
      <span>{lineProduct.product.price.toFixed(2)}</span>
    </div>
    <div className={styles.qty} style={{ justifyContent: isPaid && 'center' }}>
      {!isPaid &&
        <button
          className="btn-xs"
          onClick={() => handleChangeQty(lineProduct.product._id, lineProduct.qty - 1)}
        >-</button>
      }
      <span>{lineProduct.qty}</span>
      {!isPaid &&
        <button
          className="btn-xs"
          onClick={() => handleChangeQty(lineProduct.product._id, lineProduct.qty + 1)}
        >+</button>
      }
    </div>
    <div className={styles.extPrice}>${lineProduct.extPrice.toFixed(2)}</div>
  </div>
);
}