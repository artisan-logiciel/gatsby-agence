import {graphql, useStaticQuery} from 'gatsby';

const usePorfolio = () => useStaticQuery(graphql`
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
  `).allMdx.nodes
    .filter(realisation => {
        if (realisation.frontmatter.type.toString() === "realisation") return realisation
    }).map(realisation => ({
        title: realisation.frontmatter.title,
        author: realisation.frontmatter.author,
        slug: realisation.frontmatter.slug,
        date: realisation.frontmatter.date,
        image: realisation.frontmatter.image,
        excerpt: realisation.excerpt,
    }));

export default usePorfolio;