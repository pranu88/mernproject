import './MenuListProduct.css';

export default function MenuListProduct({ menuProduct, handleAddToOrder }) {
    // alert(menuProduct)
    console.log(menuProduct)
  return (
    <div className='MenuListProduct'>
      <img className='img' src={menuProduct.img} alt={menuProduct.name}/>
      <div className='name'>{menuProduct.name}</div>
      <div className='buy'>
        <span>${menuProduct.price}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuProduct._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}