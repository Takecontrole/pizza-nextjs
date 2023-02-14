import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            ПИЦЦЕРИЯ El RICO GUSTO.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Наши рестораны находятся по адресу</h1>
          <p className={styles.text}>
            Марксистская 5.
            <br /> Москва, 
            <br /> (8800)67-10-10
          </p>
          <p className={styles.text}>
            Рябиновый бульвар 7
            <br /> Санкт-Петербург, 
            <br /> (602) 867-1011
          </p>
          <p className={styles.text}>
            ул. Николая второго 11.
            <br /> Самара,
            <br /> (602) 867-1012
          </p>
          <p className={styles.text}>
            Тихоокеанский бульвар 77.
            <br /> Владивосток,
            <br /> 67-10-13
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}> ЧАСЫ РАБОТЫ</h1>
          <p className={styles.text}>
            <br /> Пн. 9:00 – 22:00
            <br /> Вт. 9:00 – 22:00
            <br /> Ср. 9:00 – 22:00
            <br /> Чт. 9:00 – 22:00
            <br /> Пт. 9:00 – 22:00
          </p>
          <p className={styles.text}>
            СУББОТА - ВОСКРЕСЕНЬЕ
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
