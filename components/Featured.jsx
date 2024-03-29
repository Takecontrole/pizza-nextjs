import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/chrome_image_14 апр. 2023 г. 13_09_08 GMT+04_00.png",
    "/img/elevate-snnhGYNqm44-unsplash.jpg",
    "/img/katherine-sousa-ln2R1wJ8TCM-unsplash.jpg",

  ];

  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        
          <div className={styles.imgContainer}>
            <Image src="/img/chrome_image_14 апр. 2023 г. 13_09_08 GMT+04_00.png" alt="" layout="fill" objectFit="cover" objectPosition="right"/>
            <div className={styles.mainText} style={{position:"absolute"}} >
            <p >
            El RICO GUSTO
            </p>
            <p  >
            Мы делаем ваш день лучше.
            </p>
        
      </div>
      </div>
          <div className={styles.imgContainer}>
            <Image src="/img/elevate-snnhGYNqm44-unsplash.jpg" alt="" layout="fill" objectFit="cover"/> 
      </div>
          <div className={styles.imgContainer}>
            <Image src="/img/katherine-sousa-ln2R1wJ8TCM-unsplash.jpg" alt="" layout="fill" objectFit="cover"/> 
      </div>
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain"/>
      </div>
    </div>
  );
};

export default Featured;
