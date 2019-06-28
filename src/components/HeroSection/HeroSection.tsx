import * as React from "react";
import * as style from "./HeroSection.module.scss";
import * as classNames from "classnames";

interface Props {}
interface State {}

export class HeroSection extends React.Component<Props, State> {
  render() {
    return (
      <section className={style.HeroSection}>
        <div className={style.backgroundLayer}>
          <img src={require("../../assets/signboard.jpg")} />
        </div>
        <div>
          let's begin to develop this beautiful website, shall we?
        </div>
      </section>
    );
  }
}
