import  './LineProduct.css';

export default function LineProduct({ lineProduct, isPaid, handleChangeQty }) {
return (
  <div className='LineProduct'>
    <img className="flex-ctr-ctr" src={lineProduct.product.img}/>
    <div className="flex-ctr-ctr flex-col">
      <span className="align-ctr">{lineProduct.product.name}</span>
      {/* <span>{lineProduct.product.price.toFixed(2)}</span> */}
      <span>{lineProduct.product.price}</span>
    </div>
    <div className='qty' style={{ justifyContent: isPaid && 'center' }}>
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
    {/* <div className={styles.extPrice}>${lineProduct.extPrice.toFixed(2)}</div> */}
    <div className='extPrice'>${lineProduct.extPrice}</div>
  </div>
);
}