import React from "react";
import Layout from "../components/layout";
import usePorfolio from "../hooks/use-porfolio";
import RealisationPreview from "../components/realisation-preview";

export default function Portfolio() {
    return <Layout>
        {usePorfolio().map(realisation =>
            <RealisationPreview key={realisation.slug} realisation={realisation}/>)}
    </Layout>
}