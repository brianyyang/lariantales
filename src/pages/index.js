import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { CssBaseline } from "@material-ui/core"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 10vw;
  @media (max-width: 459px) {
    font-size: 8vw;
  }
`

const Chapter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 33.33vh;
  font-size: 0.6em;
  align-items: center;
  justify-content: center;
  font-family: Luminari;
  @media (max-width: 459px) {
    height: 50vh;
  }
`

const Prologue = styled(Chapter)`
  background-color: #211a22;
  color: #d8c9da;
`

const OddChapter = styled(Chapter)`
  background-color: #312551;
  color: #b87396;
`

const EvenChapter = styled(Chapter)`
  background-color: #513967;
  color: #ac73b9;
`

function IndexPage() {
  return (
    <Container>
      <CssBaseline />
      <Prologue>
        <a
          href="https://brianyyang.itch.io/larian-tales-prologue"
          target="_blank"
        >
          Prologue
        </a>
        <Link to="page-2">Post-prologue video</Link>
      </Prologue>
      <OddChapter>Chapter One</OddChapter>
      <EvenChapter>Chapter Two</EvenChapter>
      <OddChapter>Chapter Three</OddChapter>
      <EvenChapter>Chapter Four</EvenChapter>
      <OddChapter>Chapter Five</OddChapter>
      <EvenChapter>Chapter Six</EvenChapter>
    </Container>
  )
}

export default IndexPage
