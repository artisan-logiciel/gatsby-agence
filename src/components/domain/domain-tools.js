import { css } from "@emotion/core"
import React from "react"

const DomainTools = () =>
  <>
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
  </>
export default DomainTools