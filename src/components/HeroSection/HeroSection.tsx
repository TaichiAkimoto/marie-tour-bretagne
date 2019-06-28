import * as React from "react";
import * as style from "./HeroSection.module.scss";
import * as classNames from "classnames";

interface Props {}
interface State {}

export class HeroSection extends React.Component<Props, State> {
  render() {
    return (
      <section className={style.HeroSection}>
        <div className={style.container}>
          <img
            src={require("../../assets/title.jpg")}
            className={style.title}
          />
        </div>
        <div className={style.buttons}>
          <img
            src={require("../../assets/instagram.jpg")}
            className={style.instagram}
          />
          <img
            src={require("../../assets/facebook.jpg")}
            className={style.facebook}
          />
          <img
            src={require("../../assets/email.jpg")}
            className={style.email}
          />
        </div>
      </section>
    );
  }
}
