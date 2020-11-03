import React from "react"
import {Link} from "gatsby";
import Layout from "../components/layout";

export default function Home() {
    return <Layout>
        <h1>Améliorons votre experience digital.</h1>
        <Link to="/services/">Tell me more &rarr;</Link>
    </Layout>
};
