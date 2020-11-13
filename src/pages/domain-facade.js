import React, { useState } from "react"
import { css } from "@emotion/core"

export const { LANDING, HOW_I_DO, DOMAIN_TOOLS } = {
  LANDING: "landing",
  HOW_I_DO: "howIdo",
  DOMAIN_TOOLS: "tools"
}

export const DomainFacade = () => {
  const [landingPageState, setLandingPageState] = useState(LANDING)

  const changeState = () => {
    switch (landingPageState) {
      case LANDING:
      default:
        setLandingPageState(HOW_I_DO)
        break
      case HOW_I_DO:
        setLandingPageState(DOMAIN_TOOLS)
        break
      case DOMAIN_TOOLS:
        setLandingPageState(LANDING)
        break
    }
  }

  return <>
    <div id={LANDING} hidden={landingPageState !== LANDING}>
      <h1>Améliorer votre expérience digital.</h1>
      <button onClick={changeState}>Plus de détails</button>
    </div>
    <div id={HOW_I_DO} hidden={landingPageState !== HOW_I_DO}>
      <h2>Comment j'interviens?</h2>
      <ol>
        <li>Analyse des besoins, identifications des traitements.</li>
        <li>Prototypage et proposition de budget.</li>
        <li>Développement d'une solution.</li>
        <li>Déploiement et exploitation de la solution.</li>
      </ol>
      <button onClick={changeState}>Mes outils</button>
    </div>
    <div id={DOMAIN_TOOLS} hidden={landingPageState !== DOMAIN_TOOLS}>
      <h2>Mes outils</h2>
      <h3>Méthodologies:</h3> Agile, Scrum, Kanban et Merise.
      <h3>Design:</h3> Figma.
      <h3>Mobile:</h3> Kotlin et Android Studio.
      <h3>Front side:</h3> Vanilla Javascript, Reactjs et Gatsbyjs.
      <h3>Server side:</h3>
      <ul css={css`list-style-type:none;`}>
        <li>Kotlin, Groovy, Java et Spring-Boot</li>
        <li>Javascript, Node.js et ExpressJs</li>
        <li>PostgreSQL, MySQL, H2 et Firebase</li>
        <li>Docker et Kubernetes</li>
      </ul>
      <button onClick={changeState}>Accueil</button>
    </div>
  </>
}