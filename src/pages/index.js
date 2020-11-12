import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import Hero from "../components/hero"

const Home = () =>
  <>
    <Hero />
    <Layout>
      <h1>Améliorer votre expérience digital.</h1>
      {/*Plus de détails*/}

      <h2>Comment j'interviens?</h2>
      <ol>
        <li>Analyse des besoins, identifications des traitements.</li>
        <li>Prototypage et proposition de budget.</li>
        <li>Développement d'une solution.</li>
        <li>Déploiement et exploitation de la solution.</li>
      </ol>
      {/*Pour cela, voici mes outils*/}
      <h2>Mes outils</h2>
      <h3>Méthodologies:</h3> Agile, scrum, kanban et merise.
      <h3>Design:</h3> Figma.
      <h3>Mobile:</h3> AndroidStudio et Kotlin.
      <h3>Front side:</h3> Gatsby et Reactjs.
      <h3>Server side:</h3>
      <ul css={css`list-style-type:none;`}>
        <li>Spring-Boot et Kotlin</li>
        <li>PostgreSQL, MySQL, H2 et Firebase</li>
        <li>Javascript, Node.js et ExpressJs</li>
        <li>Docker et Kubernetes</li>
      </ul>
    </Layout>
  </>
export default Home
