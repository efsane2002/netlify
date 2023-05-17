import React from 'react'
import { Helmet } from 'react-helmet'
import style from "./index.module.css"

export default function Contact() {
  return (
    <>
    <Helmet>
        <title>Contact Page</title>
    </Helmet>
    <div className={style.contact}>Contact</div>
    </>
  )
}
