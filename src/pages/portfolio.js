import React from "react";
import {Link} from "gatsby";
import Layout from "../components/layout";

export default function Portfolio() {
    return <Layout>
        <h1>Portfolio</h1>
        <Link to="/">&larr; back to home</Link>
    </Layout>
}