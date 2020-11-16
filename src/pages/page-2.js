import React from "react"
import { Link } from "gatsby"
import Intro from "../../assets/postprologue.mp4"
import styled from "@material-ui/core"

function SecondPage() {
  return (
    <div>
      <video controls>
        <source src={Intro} type="video/mp4" />
      </video>
    </div>
  )
}

export default SecondPage
