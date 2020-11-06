import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import ReadLink from '../components/read-link';

const RealisationPreview = ({ realisation }) => (
    <article
        css={css`
      border-bottom: 1px solid #ddd;
      margin-top: 0.75rem;
      padding-bottom: 1rem;

      :first-of-type {
        margin-top: 1rem;
      }
    `}
    >
        <h3>
            <Link to={realisation.slug}>{realisation.title}</Link>
        </h3>
        <p>{realisation.excerpt}</p>
        <ReadLink to={realisation.slug}>see this realisation &rarr;</ReadLink>
    </article>
);

export default RealisationPreview;
