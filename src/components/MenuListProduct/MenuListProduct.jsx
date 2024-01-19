import './MenuListProduct.css';

export default function MenuListProduct({ menuProduct, handleAddToOrder }) {
    // alert(menuProduct)
    // console.log("menulist product id"+menuProduct._id)
  return (
    <div className='MenuListProduct'>
      <img className='img' src={menuProduct.img} alt={menuProduct.name}/>
      <div className='name'>{menuProduct.name}</div>
      <div className='buy'>
        <span>${menuProduct.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuProduct._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}