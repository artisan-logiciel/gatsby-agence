import {graphql, useStaticQuery} from "gatsby";

function useSiteMetadata() {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
    }`);
    return data.site.siteMetadata;
}

export default useSiteMetadata;