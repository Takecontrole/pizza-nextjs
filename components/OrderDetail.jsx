import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Оплата после доставки.</h1>
        <div className={styles.item}>
          <label className={styles.label}>Имя, Фамилия</label>
          <input
            placeholder="Как к вам обращаться?"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Номер телефона</label>
          <input
            type="text"
            placeholder="Оставте номер для связи"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Адресс</label>
          <textarea
            rows={5}
            placeholder="Куда везти?"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          Заказать
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
