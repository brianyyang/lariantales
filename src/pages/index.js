import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { CssBaseline } from "@material-ui/core"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"

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
  &:hover {
    opacity: 0.6;
    transition: opacity 0.75s;
  }
`

const Prologue = styled(Chapter)`
  background-color: #211a22;
  color: #d8c9da;
`

const OddChapter = styled(Chapter)`
  background-color: #513967;
  color: #ac73b9;
`

const EvenChapter = styled(Chapter)`
  background-color: #312551;
  color: #b87396;
`

const GoodA = styled.a`
  color: inherit;
`

const GoodLink = styled(Link)`
  color: inherit;
`

function IndexPage(props) {
  return (
    <Container>
      <CssBaseline />
      <BackgroundImage fluid={props.data.prologue.childImageSharp.fluid}>
        <Prologue>
          <GoodA
            href="https://brianyyang.itch.io/larian-tales-prologue"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Prologue
          </GoodA>
          <GoodLink to="post-prologue" style={{ textDecoration: "none" }}>
            Post-Prologue
          </GoodLink>
        </Prologue>
      </BackgroundImage>
      <BackgroundImage fluid={props.data.orcs.childImageSharp.fluid}>
        <EvenChapter>
          <GoodA
            href="https://www.flipsnack.com/8885DC88B7A/xugor-tulestesh.html"
            target="_blank"
            color="inherit"
            style={{ textDecoration: "none" }}
          >
            Xugor
          </GoodA>
        </EvenChapter>
      </BackgroundImage>
      <BackgroundImage fluid={props.data.commonKnights.childImageSharp.fluid}>
        <OddChapter>
          <GoodLink
            to="common-knights-quest"
            style={{ textDecoration: "none" }}
          >
            The Common Knights
          </GoodLink>
        </OddChapter>
      </BackgroundImage>
      <BackgroundImage fluid={props.data.revolution.childImageSharp.fluid}>
        <EvenChapter>Revolution</EvenChapter>
      </BackgroundImage>
      <OddChapter>Chapter Three</OddChapter>
      <EvenChapter>Chapter Four</EvenChapter>
      <OddChapter>Chapter Five</OddChapter>
      <EvenChapter>Chapter Six</EvenChapter>
    </Container>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    commonKnights: file(relativePath: { eq: "commonknights.jpg" }) {
      ...bgImage
    }
    revolution: file(relativePath: { eq: "castle.jpg" }) {
      ...bgImage
    }
    prologue: file(relativePath: { eq: "rhen.jpg" }) {
      ...bgImage
    }
    orcs: file(relativePath: { eq: "orcthieves.png" }) {
      ...bgImage
    }
  }
`
export const bgImage = graphql`
  fragment bgImage on File {
    childImageSharp {
      fluid(maxWidth: 1800, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
