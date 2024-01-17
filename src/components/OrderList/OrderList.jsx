import OrderListProduct from '../OrderListProduct/OrderListProduct';
import styles from './OrderList.module.css';

export default function OrderList({ orders, activeOrder, handleSelectOrder }) {
const orderProducts = orders.map(o =>
  <OrderListProduct
    order={o}
    isSelected={o === activeOrder}
    handleSelectOrder={handleSelectOrder}
    key={o._id}
  />
);

return (
  <main className={styles.OrderList}>
    {orderProducts.length ?
      orderProducts
      :
      <span className={styles.noOrders}>No Previous Orders</span>
    }
  </main>
);
}