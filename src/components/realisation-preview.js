import React from 'react';
import {css} from '@emotion/core';
import {Link} from 'gatsby';
import Image from 'gatsby-image';
import ReadLink from '../components/read-link';

const RealisationPreview = ({realisation}) => (
    <article
        css={css`
      border-bottom: 1px solid #ddd;
      display: flex;
      margin-top: 0;
      padding-bottom: 1rem;

      :first-of-type {
        margin-top: 1rem;
      }
    `}
    >
        <Link
            to={realisation.slug}
            css={css`
        margin: 1rem 1rem 0 0;
        width: 100px;`}>
            <Image
                css={css`* {margin-top: 0;}`}
                fluid={realisation.image.sharp.fluid}
                alt={realisation.title}/>
        </Link>

        <div>
            <h3>
                <Link to={realisation.slug}>{realisation.title}</Link>
            </h3>
            <p>{realisation.excerpt}</p>
            <ReadLink to={realisation.slug}>see this realisation &rarr;</ReadLink>
        </div>
    </article>
);

export default RealisationPreview;
