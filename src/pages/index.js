import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import Hero from "../components/hero"

const Home = () =>
  <>
    <Hero />
    <Layout>
      <h1>Améliorer votre expérience digital.</h1>
      <h2>Comment j'interviens?</h2>
      <ol>
        <li>Analyse des besoins, identifications des workflows pour répondre à la demande.</li>
        <li>Prototypage et budget.</li>
        <li>Développement d'une solution.</li>
        <li>Déploiment et exploitation de la solution.</li>
      </ol>
      <h2>Mes outils</h2>
      <h3>Méthodologies:</h3> Agile, scrum, kanban et merise.
      <h3>Design:</h3> Figma.
      <h3>Mobile:</h3> AndroidStudio et Kotlin.
      <h3>Front side:</h3> Gatsby et Reactjs.
      <h3>Server side:</h3>
      <ul css={css`list-style-type:none;`}>
        <li>Spring-Boot et Kotlin</li>
        <li>PostgreSQL</li>
        <li>Javascript et Node.js</li>
        <li>Docker et Kubernetes</li>
      </ul>
    </Layout>
  </>
export default Home
