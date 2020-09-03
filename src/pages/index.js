import React from "react"
import {Link} from "gatsby";

export default function Home() {
  return <>
  <h1>Welcome To Our Studio!</h1>
    <p>It's Nice To Meet You</p>
    <Link to="/about/">Learn about me &rarr;</Link>
  </>
}
