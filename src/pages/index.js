import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import { DomainFacade } from "../components/domain"

const Home = () =>
  <>
    <Hero />
    <Layout>
      <DomainFacade />
    </Layout>
  </>

export default Home