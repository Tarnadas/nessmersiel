import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import BannerTourismus from '../components/BannerTourismus'
import BackButton from '../components/BackButton'
import { ImageQuery } from '../models/ImageQuery'

const Tourismus = (props: { data: ImageQuery }): JSX.Element => (
  <Layout>
    <Helmet>
      <title>Ferienwohnung Nessmersiel - Tourismus</title>
      <meta name="description" content="Ferienwohnung Nessmersiel - Tourismus rund um Nessmersiel und an der Nordsee." />
    </Helmet>

    <BannerTourismus />

    <div id="main">
      <section id="one">
        <div className="inner">
          <BackButton to="/" />
          <header className="major">
            <h2>Tourismus</h2>
          </header>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/baltrum" className="image">
            <Img fluid={props.data.allFile.edges.find(edge => edge.node.name === 'baltrum').node.childImageSharp.fluid} alt="Baltrum" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Baltrum</h3>
              </header>
              <p />
              <ul className="actions">
                <li>
                  <Link to="/baltrum" className="button">
                    Entdecken
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/wattenmeer" className="image">
            <Img
              fluid={props.data.allFile.edges.find(edge => edge.node.name === 'wattenmeer').node.childImageSharp.fluid}
              alt="Wattenmeer"
            />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Das Wattenmeer</h3>
              </header>
              <p>
                Das Weltnaturerbe Wattenmeer lockt jedes Jahr zahlreiche Leute an. Eine Wattwanderung sollte man sich nicht entgehen lassen.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/wattenmeer" className="button">
                    Entdecken
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/seehund" className="image">
            <Img
              fluid={props.data.allFile.edges.find(edge => edge.node.name === 'seehundstation0').node.childImageSharp.fluid}
              alt="Seehundstation"
            />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Seehundstation Norddeich</h3>
              </header>
              <p>Die Seehundstation sorgt für die Rehabilitation und Aufzucht verwaister Jungtiere.</p>
              <ul className="actions">
                <li>
                  <Link to="/seehund" className="button">
                    Entdecken
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Tourismus

export const query = graphql`
  query TourismusQuery {
    allFile {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
