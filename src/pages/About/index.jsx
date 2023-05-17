import React from 'react'
import { Helmet } from 'react-helmet'
import style from "./index.module.css"

export default function About() {
  return (
    <>
    <Helmet>
      <title>About Page</title>
    </Helmet>
    <div className={style.about}>About</div>
    </>
  )
}
