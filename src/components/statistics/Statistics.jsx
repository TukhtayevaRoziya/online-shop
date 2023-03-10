import React, { memo } from "react";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";


import styles from "./Statistics.module.css";

export const Statistics = memo(() => {
  return (
    <div className={styles.numberSec} id='statistics'>
      <div className={styles.numberSec__block}>
        <div className={styles.counter_body}>
          <div className={styles.counter_block}>
            <CountUp start={1} end={200} duration={0.7}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <h1>Mijozlar</h1>
          </div>
          <div className={styles.counter_block}>
            <CountUp start={0} end={100} duration={0.7}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <h1>Sotuvchilar</h1>
          </div>
          <div className={styles.counter_block}>
            <CountUp start={1} end={34} duration={0.7}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <h1>Hamkorlar</h1>
          </div>
          <div className={styles.counter_block}>
            <CountUp start={1} end={100} duration={0.7}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <h1>Mahsulotlar</h1>
          </div>
          {/* <div className={styles.counter_block}>
            <CountUp start={1} end={data.erkaklar} duration={0.7}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <h1>{t("aboutMen")}</h1>
          </div> */}
        </div>
      </div>
    </div>
  );
});