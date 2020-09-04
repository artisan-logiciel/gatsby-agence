import React from "react";
import {Global, css} from "@emotion/core";
import Helmet from "react-helmet";
import Header from "./header";

function Layout({children}) {
    return <>
        <Global styles={css`
        * {
            box-sizing: border-box;
            margin: 0;            
        }
        
        * + * {
            margin-top: 1rem;
        }
        
        html,
        body {
            margin: 0;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
            font-size: 18px;
            line-height: 1.4;
            > div {
                margin-top: 0;
            }
            
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                color: #222;
                line-height: 1.1;
                
                + * {
                    margin-top: 0.5rem;
                }
            }
            
            strong {
                color: #222;
            }
            
            li {
                margin-top: 0.25rem;
            }
        }
        `}/>
        <Helmet>
            <html lang="en"/>
            <title>Hello Digital Agency</title>
            <meta name="description"
                  content="digital agency"/>
        </Helmet>
        <Header/>
        <main css={css`
                margin: 2rem auto;
                width: 1100px
            `}>{children}</main>
    </>;
}

export default Layout;