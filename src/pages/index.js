import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Agence from "../components/agence/agence"

const Home = () =>
  <>
    <Hero />
    <Layout>
      <Agence />
    </Layout>
  </>

export default Home