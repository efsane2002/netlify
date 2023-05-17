import React from 'react'
import { Helmet } from 'react-helmet'

export default function NotFound() {
  return (
    <>
    <Helmet>
        <title>NotFound</title>
    </Helmet>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"500px", fontSize:"40px", color: "red"}}>NotFound</div>
    </>
  )
}
