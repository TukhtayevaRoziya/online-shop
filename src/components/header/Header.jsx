import React from 'react'
import { PhoneOutlined, InstagramOutlined } from '@ant-design/icons';

import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.body}>
      <img src='https://api-frameworks.vercel.sh/framework-logos/other.svg' alt='' />
      <div className={styles.main}>

      <div>
        <a href='/#about'>Biz haqimizda</a>
        <a href='/#adc'>E'lonlar</a>
        <a href='/#statstics'>Statistika</a>
        <a href="/#contact">Bog'lanish</a>
      </div>
      <div>
       <a href="tel:+998900001122" target="_blank" rel="noopener noreferrer"> <PhoneOutlined /></a>
       <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"> <InstagramOutlined /></a>
       <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"> <InstagramOutlined /></a>
        <PhoneOutlined />
      </div>
      </div>

    </div>
  )
}

export default Header
