import React from "react";
import {Link} from "gatsby";
import Layout from "../components/layout";

export default function About() {
    return <Layout>
        <h1>About Us</h1>
        <Link to="/">&larr; back to home</Link>
    </Layout>
}