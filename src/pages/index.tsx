import { graphql } from "gatsby";
import * as React from "react";
import * as styles from "./Index.module.scss";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { Navigation } from "../components/Navigation/Navigation";

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
      };
    };
  };
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`;

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <>
        <HeroSection />
        <Navigation />
      </>
    );
  }
}
