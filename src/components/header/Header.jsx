import React, { useEffect } from "react";
import { PhoneOutlined, InstagramOutlined } from "@ant-design/icons";
import { FaTelegramPlane } from "react-icons/fa";
import styles from "./Header.module.css";
import "./Header.css";
import { useWindowSize } from "../../utils/hooks";

const Header = () => {
const [width] = useWindowSize();

useEffect(() => {
  
}, []);
  return (
    <>
    {
      width > 1000 
      ? <header className={styles.header_container}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.menu_active}>
        <nav className={styles.navbar}>
          <div className={styles.nav_item}>
            <a href="/#about">Biz haqimizda</a>
          </div>
          <div className={styles.nav_item}>
            <a href="/#adc">Elonlar</a>
          </div>
          <div className={styles.nav_item}>
            <a href="/#statistics">Statictics</a>
          </div>
          <div className={styles.nav_item}>
            <a href="/#contact">Bog'lanish</a>
          </div>
        </nav>
        <div className={styles.user_options}>
          <div className={styles.option}>
            <i className="fa fa-moon"></i>
          </div>
          <div className={styles.option}>
            <i className="fa fa-user"></i>
          </div>
          <div className={styles.option}>
            <i className="fa fa-gear"></i>
          </div>
        </div>
      </div>
      <nav className={styles.navbar}>
        <div className={styles.nav_item}>
          <a href="/#about">Biz haqimizda</a>
        </div>
        <div className={styles.nav_item}>
          <a href="/#adc">Elonlar</a>
        </div>
        <div className={styles.nav_item}>
          <a href="/#statistics">Statictics</a>
        </div>
        <div className={styles.nav_item}>
          <a href="/#map">Manzil</a>
        </div>
      </nav>
      <div className={styles.user_options}>
        <a
          href="tel:+998900001122"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.option}
        >
          <PhoneOutlined />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.option}
        >
          <InstagramOutlined />
        </a>
        <a
          href="https://telegram.org"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.option}
        >
          <FaTelegramPlane />
        </a>
      </div>
      <div className={styles.menu}>
        <i className="fa fa-bars"></i>
      </div>
    </header>


    :  <header className={styles.header_container}>
    <div className={styles.logo}>LOGO</div>

    <div className={styles.user_options}>
      <a
        href="tel:+998900001122"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.option}
      >
        <PhoneOutlined />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.option}
      >
        <InstagramOutlined />
      </a>
      <a
        href="https://telegram.org"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.option}
      >
        <FaTelegramPlane />
      </a>
    </div>
    <div className={styles.menu}>
      <i className="fa fa-bars"></i>
    </div>
  </header>

    }
   

    </>
  );
};

export default Header;
