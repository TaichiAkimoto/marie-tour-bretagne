import * as React from "react";
import * as style from "./Tours.module.scss";
import * as classNames from "classnames";

interface Props {}
interface State {}

export class Tours extends React.Component<Props, State> {
  render() {
    return (
      <section className={style.Tours}>
        <div className={style.header}>
          <div className={style.main}>
            <p className={style.mainText}>TOURS</p>
          </div>
          <div className={style.pattern}>
            <img
              src={require("../../assets/pattern.jpg")}
              className={style.patternImg}
            />
          </div>
          <div className={style.subTitle}>
            大きく2つの部屋に分けてご紹介します
          </div>
        </div>
      </section>
    );
  }
}
