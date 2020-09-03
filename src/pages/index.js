import React from "react"
import {Link} from "gatsby";
import Layout from "../components/layout";

export default function Home() {
    return <Layout>
        <h1>Welcome To Our Studio!</h1>
        <p>It's Nice To Meet You</p>
        <Link to="/about/">Learn about me &rarr;</Link>
    </Layout>
};
