import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>El RICO GUSTO</h1>
      <p className={styles.desc}>
        Мы делаем вкусную пиццу из высококачественной продукции, чтобы вы могли наслаждаться сочетанием приготовленной профессиональными поворами пиццей и тщательно отобранных ингредиентов.
      </p>
      <div className={styles.wrapper}>
          {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
