import * as React from "react";
import * as style from "./Navigation.module.scss";
import * as classNames from "classnames";

interface Props {}
interface State {}

export class Navigation extends React.Component<Props, State> {
  render() {
    return (
      <section className={style.Navigation}>
        <div className={style.navigationContainer}>
          <p className={style.navItem}>ABOUT</p>
          <p className={style.navItem}>PROFILE</p>
          <p className={style.navItem}>COURSE</p>
          <p className={style.navItem}>PRICE</p>
          <p className={style.navItem}>CONTACT</p>
        </div>
      </section>
    );
  }
}
