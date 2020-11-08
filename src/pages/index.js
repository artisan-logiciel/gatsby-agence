import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import {Link} from "gatsby"
import Insta from "../components/insta";

const Home = () =>
    <>
        <Hero/>
        <Layout>
            <h1>Améliorer votre expérience digital.</h1>
            <Link to="/services/">Pour en savoir plus &rarr;</Link>
            <Insta />
        </Layout>
    </>;
export default Home
