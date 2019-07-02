import { graphql } from "gatsby";
import * as React from "react";
import * as styles from "./Index.module.scss";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { Navigation } from "../components/Navigation/Navigation";
import { Gallery } from "../components/Gallery/Gallery";
import { Marie } from "../components/Marie/Marie";
import { Tours } from "../components/Tours/Tours";

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <>
        <HeroSection />
        <Navigation />
        <Gallery />
        <Marie />
        <Tours />
      </>
    );
  }
}
