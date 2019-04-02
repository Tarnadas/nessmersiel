import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import BannerSeehund from '../components/BannerSeehund'
import BackButton from '../components/BackButton'
import { ImageQuery } from '../models/ImageQuery'

const Seehund = (props: { data: ImageQuery }): JSX.Element => (
  <Layout>
    <Helmet>
      <title>Ferienwohnung Nessmersiel - Sturmfrei</title>
      <meta name="description" content="Ferienwohnung Nessmersiel - Seehundstation Norddeich." />
    </Helmet>

    <BannerSeehund />

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <BackButton to="/tourismus" />
          <header className="major">
            <h1>Seehundstation Norddeich</h1>
          </header>
          <span className="image main contain">
            <Img
              fluid={props.data.allFile.edges.find(edge => edge.node.name === 'seehundstation0').node.childImageSharp.fluid}
              style={{
                maxHeight: '600px'
              }}
              alt="Seehundstation"
            />
          </span>
          <p>
            <a href="//www.seehundstation-norddeich.de" target="_blank">
              Hier geht es zur offiziellen Webseite.
            </a>
          </p>
          <p>
            <span className="image left full">
              <Img fluid={props.data.allFile.edges.find(edge => edge.node.name === 'seehund').node.childImageSharp.fluid} alt="Seehund" />
            </span>
            Wo Seehunde groß und stark werden Die Seehundstation Nationalpark-Haus ist eine leistungsfähige anerkannte Betreuungsstation für
            Meeressäuger. Zwischen 80 und 150 verwaiste Seehunde und vereinzelt auch Kegelrobben werden jährlich aufgezogen und in die
            Nordsee zurückgebracht. Die Station ist zuständig für das gesamte Niedersächsische Wattenmeer, das als Nationalpark,
            Biosphärenreservat und Weltnaturerbe besonderen Schutz genießt.
            <div style={{ clear: 'both' }} />
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Seehund

export const query = graphql`
  query SeehundQuery {
    allFile {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 600) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
            }
          }
        }
      }
    }
  }
`
