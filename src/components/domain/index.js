import React, { useState } from "react"
import { css } from "@emotion/core"

export const LandingPageEnums = {
  LANDING: "landing",
  HOW_I_DO: "howIdo",
  DOMAIN_TOOLS: "tools"
}

export const DomainFacade = () => <><Landing /><HowIdo /><DomainTools /></>

export const Landing = () =>
  <>
    <h1>Améliorer votre expérience digital.</h1>
    <LandingTransition>Plus de détails</LandingTransition>
  </>

export const HowIdo = () =>
  <>
    <h2>Comment j'interviens?</h2>
    <ol>
      <li>Analyse des besoins, identifications des traitements.</li>
      <li>Prototypage et proposition de budget.</li>
      <li>Développement d'une solution.</li>
      <li>Déploiement et exploitation de la solution.</li>
    </ol>
    <LandingTransition>Pour cela, voici mes outils</LandingTransition>
  </>


export const DomainTools = () =>
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
    <LandingTransition>Accueil</LandingTransition>
  </>


function hide(page) {

}

export const LandingTransition = () => {
  const { DOMAIN_TOOLS, HOW_I_DO, LANDING } = LandingPageEnums
  const [landingPageState, setLandingPageState] = useState(LANDING)

  const onClickLandingButton = () => {
    if (landingPageState === LANDING) {
      setLandingPageState(HOW_I_DO)
      hide(LANDING)
      hide(DOMAIN_TOOLS)
    }
    if (landingPageState === HOW_I_DO) {
      setLandingPageState(DOMAIN_TOOLS)
      hide(LANDING)
      hide(HOW_I_DO)
    }
    if (landingPageState === DOMAIN_TOOLS) {
      setLandingPageState(LANDING)
      hide(HOW_I_DO)
      hide(DOMAIN_TOOLS)
    }
  }

  return <>
    <button onClick={onClickLandingButton} />
  </>
}
