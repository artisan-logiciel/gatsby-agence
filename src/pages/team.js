import React from "react";
import {Link} from "gatsby";
import Layout from "../components/layout";
import Insta from "../components/insta";

const Team = () =>
    <Layout>
        <Link to="/services/">Pour en savoir plus &rarr;</Link>
        <Insta />
    </Layout>;
export default Team