import {graphql, useStaticQuery} from 'gatsby';

const usePorfolio = () => {
    return useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            author
            slug
            date
            type
          }
          excerpt
        }
      }
    }
  `).allMdx.nodes
        .filter(post => {
            if (post.frontmatter.type.toString() === "realisation") return post
        }).map(post => ({
            title: post.frontmatter.title,
            author: post.frontmatter.author,
            slug: post.frontmatter.slug,
            excerpt: post.excerpt,
        }));
};

export default usePorfolio;