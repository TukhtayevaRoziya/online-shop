import React from 'react'
import { PhoneOutlined, InstagramOutlined } from "@ant-design/icons";
import { FaTelegramPlane } from "react-icons/fa";

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.body}>
          <div class={styles.user_options}>
        <a
          href="tel:+998900001122"
          target="_blank"
          rel="noopener noreferrer"
          class={styles.option}
        >
          <PhoneOutlined />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          class={styles.option}
        >
          <InstagramOutlined />
        </a>
        <a
          href="https://telegram.org"
          target="_blank"
          rel="noopener noreferrer"
          class={styles.option}
        >
          <FaTelegramPlane />
        </a>
      </div>
      <h1>© Copyright, 2023 - NB</h1>
    </div>
  )
}

export default Footer
