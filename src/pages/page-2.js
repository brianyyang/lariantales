import React from "react"
import { Link } from "gatsby"
import Intro from "../media/postprologue.mp4"
import styled from "styled-components"
import Video from "../components/video"

function SecondPage() {
  return (
    <div>
      <Video
        videoSrcURL="https://www.youtube.com/embed/Rqsvs7xFWCU"
        videoTitle="Post Prologue Larian Tales"
      >
        <source src={Intro} type="video/mp4" />
      </Video>
    </div>
  )
}

export default SecondPage
