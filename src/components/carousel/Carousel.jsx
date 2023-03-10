import React from 'react';
import { Carousel } from 'antd';

import styles from './Carousel.module.css'

const MyCarousel = () => {

  return (
    <Carousel autoplay className={styles.body}>
      <div className={styles.img_wrap + ' ' + styles.first}>
       <span> INTEX </span> 
       <p>Ishonchli, Hamyonbob, Sifatli</p>
      </div>
      <div className={styles.img_wrap + ' ' + styles.second}>
       <span> INTEX </span> 
       <p>Ishonchli, Hamyonbob, Sifatli</p>
      </div>
      <div className={styles.img_wrap + ' ' + styles.third}>
       <span> INTEX </span> 
       <p>Ishonchli, Hamyonbob, Sifatli</p>
      </div>
    </Carousel>
  );
};

export default MyCarousel;