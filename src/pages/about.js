import React from "react";
import {Link} from "gatsby";
import Layout from "../components/layout";

export default function About() {
    return <Layout>
        {/*date: */}02-11-2020<br/>
        <Link to="/">&larr; back to home</Link>
    </Layout>
}