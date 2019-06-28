import * as React from "react";
import * as style from "./Marie.module.scss";
import * as classNames from "classnames";

interface Props {}
interface State {}

export class Marie extends React.Component<Props, State> {
  render() {
    return (
      <section className={style.Marie}>
        <div className={style.main}>
          <p className={style.mainText}>MAIN</p>
        </div>
        <div className={style.pattern}>
          <img
            src={require("../../assets/pattern.jpg")}
            className={style.patternImg}
          />
        </div>
        <div className={style.introduction}>
          <div className={style.section}>
            <div className={style.mainMain}>
              <img
                src={require("../../assets/map.jpg")}
                className={style.mainImg}
              />
            </div>
            <div className={style.sub}>
              <div className={style.frenchJapanese}>
                <p className={style.french}>About brittany</p>
                <p className={style.japanese}>ブルターニュとは</p>
              </div>
            </div>
          </div>
          <div className={style.section}>
            <div className={style.mainMain}>
              <img
                src={require("../../assets/marie.jpg")}
                className={style.mainImg}
              />
            </div>
            <div className={style.sub}>
              <div className={style.frenchJapanese}>
                <p className={style.french}>My profile</p>
                <p className={style.japanese}>自己紹介</p>
              </div>
            </div>
          </div>
          <div className={style.section}>
            <div className={style.mainMain}>
              <img
                src={require("../../assets/map.jpg")}
                className={style.mainImg}
              />
            </div>
            <div className={style.sub}>
              <div className={style.frenchJapanese}>
                <p className={style.french}>Guide service</p>
                <p className={style.japanese}>ツアー概要</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
