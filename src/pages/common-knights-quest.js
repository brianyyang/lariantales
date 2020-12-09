import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Video from "../components/video"
import { Button } from "@material-ui/core"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #211a22;
  font-size: 4vh;
  color: white !important;
`
function CommonKnightsQuest() {
  return (
    <Container>
      <Button variant="contained" color="primary" href="../">
        Back to home
      </Button>
      <Video
        videoSrcURL="https://www.youtube.com/embed/lHYZ8XZVimc"
        videoTitle="Common Knights Quest"
      ></Video>
    </Container>
  )
}

export default CommonKnightsQuest
