import {graphql, useStaticQuery} from 'gatsby';

const usePosts = () => {
    const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            author
            slug
            date
            type
            image {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 100
                  maxHeight: 100
                  duotone: { shadow: "#663399", highlight: "#ddbbff" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);

    return data.allMdx.nodes.filter(post => {
        if (post.frontmatter.type.toString() === "post") return post
    }).map(post => ({
        title: post.frontmatter.title,
        author: post.frontmatter.author,
        slug: post.frontmatter.slug,
        excerpt: post.excerpt,
    }));
};

export default usePosts;