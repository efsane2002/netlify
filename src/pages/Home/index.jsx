import React from 'react'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <>
    <Helmet>
        <title>Home Page</title>
    </Helmet>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"500px", fontSize:"40px"}}>Home</div>
    </>
  )
}
