import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Otto from "../components/Otto";
import FunProjects from "../components/FunProjects";
import OtherProjects from "../components/OtherProjects";
import Wave2 from "../components/Wave2";
import Wave from "../components/Wave";
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Intro />

      <Wave
        color={"var(--ifm-color-primary)"}
        bg={"var(--ifm-color-introBg)"}
      />
      <Otto />
      <Wave2
        color={"var(--ifm-color-secondary)"}
        bg={"var(--ifm-color-introBg)"}
      />
      <OtherProjects />
      <FunProjects />
      <Wave
        color={"var(--ifm-color-tertiary)"}
        bg={"var(--ifm-color-introBg)"}
      />
      <Footer />
    </Layout>
  );
}
