import styles from './OrderDetail.css';
import LineProduct from '../LineProduct/LineProduct';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {

    if (!order) return null;
console.log('inside orderdetail'+handleChangeQty)
    const lineProducts = order.lineProducts.map(product =>
      <LineProduct
        lineProduct={product}
        isPaid={order.isPaid}
        handleChangeQty={handleChangeQty}
        key={product._id}
      />
    );

    return (
      <div className={styles.OrderDetail}>
        <div className={styles.sectionHeading}>
          {/* {order.isPaid ?
            <span>ORDER <span className="smaller">{order.orderId}</span></span>
            :
            <span>LATEST ORDER</span>
          } */}
          {/* <span>{new Date(order.updatedAt).toLocaleDateString()}</span> */}
        </div>
        <div className={`${styles.lineProductContainer} flex-ctr-ctr flex-col scroll-y`}>
          {lineProducts.length ?
            <>
              {lineProducts}
              <section className={styles.total}>
                {order.isPaid ?
                  <span className={styles.right}>TOTAL&nbsp;&nbsp;</span>
                  :
                  <button
                    className="btn-sm"
                    onClick={handleCheckout}
                    disabled={!lineProducts.length}
                  >CHECKOUT</button>
                }
                {/* <span>{order.totalQty}</span><br/> */}
                <span className={styles.right}>${order.orderTotal.toFixed(2)}</span>
              </section>
            </>
            :
            <div className={styles.hungry}>
              <h4>Cart ({order.totalQty} items)</h4>
              <img src="https://media2.giphy.com/media/fscIxPfKjPyShbwUS5/giphy.gif?cid=6c09b95244flha0fvjxv1f3mawayw4q2as2bmodimqjwrwu3&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="empty cart" className='cartimg'/>

              {/* <img src="https://hadayalb.com/images/cart-empty.gif" alt="empty cart" className='cartimg'/> */}
              </div>
          }
        </div>
      </div>
    );
  }