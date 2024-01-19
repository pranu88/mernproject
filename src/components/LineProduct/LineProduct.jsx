import  './LineProduct.css';

export default function LineProduct({ lineProduct, isPaid, handleChangeQty }) {
  console.log('line product'+lineProduct.qty)
  console.log('line product id'+lineProduct.product._id)
return (
  <div className='LineProduct'>
    <img  style={{width:'10em',height:'10em'}} src={lineProduct.product.img}/>
    <div className="flex-ctr-ctr flex-col">
      <span className="align-ctr">{lineProduct.product.name}</span>
      <span>{lineProduct.product.price.toFixed(2)}</span>
      {/* <span>{lineProduct.product.price}</span> */}
    </div>
    <div className='qty' style={{ justifyContent: isPaid && 'center' }}>
      {!isPaid &&
        <button
          className="btnminus"
          onClick={() => handleChangeQty(lineProduct.product._id, lineProduct.qty - 1)}
          // onClick={() => alert('clicked')}
        >-</button>
      }
      <span>{lineProduct.qty}</span>
      {!isPaid &&
        <button
          className="btnplus"
          onClick={() => handleChangeQty(lineProduct.product._id, lineProduct.qty + 1)}
        >+</button>
      }
    </div>
    <div className='extPrice'>${lineProduct.extPrice.toFixed(2)}</div>
    {/* <div className='extPrice'>${lineProduct.extPrice}</div> */}
  </div>
);
}