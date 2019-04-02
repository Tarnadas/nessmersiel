import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import BannerNessmersiel from '../components/BannerNessmersiel'
import BackButton from '../components/BackButton'
import { ImageQuery } from '../models/ImageQuery'

const Nessmersiel = (props: { data: ImageQuery }): JSX.Element => (
  <Layout>
    <Helmet>
      <title>Ferienwohnung Neßmersiel - Der Küstenort Neßmersiel</title>
      <meta name="description" content="Ferienwohnung Neßmersiel - der kleine idyllische Ferienort, direkt an der Küste gelegen." />
    </Helmet>

    <BannerNessmersiel />

    <div id="main">
      <section id="one">
        <div className="inner">
          <BackButton to="/" />
          <header className="major">
            <h2>Neßmersiel</h2>
          </header>
          <p>Herzlich Willkommen in Neßmersiel, dem kleinen sympathischen Küstenbadeort an der ostfriesischen Nordsee.</p>

          <p>
            Mit der Wahl Neßmersiel haben Sie absolut nichts falsch gemacht. Die Störtebeker Straße entlang der Küste führt direkt durch den
            Ort. Auf diesem Weg erreichen Sie auch bequem die anderen Siel-Orte.
          </p>

          <p>
            Der Sandstrand, mit separatem Hundestrand und dem einmaligem Blick auf die ostfriesischen Inseln Langeoog, Baltrum und Norderney
            läd zum Träumen und entspannen ein. Baltrum können Sie direkt vom Fähranleger im Hafen von Neßmersiel erreichen. Auch werden
            fast täglich geführte Wattwanderungen nach Baltrum und Norderney angeboten.
          </p>

          <p>
            Die Seehundstation in Norddeich, sowie die Städte Norden, Esens, Wittmund, Aurich und Emden befinden sich in der Nähe und laden
            zum ausgedehnten Bummeln ein.
          </p>

          <p>Also, ob mit dem Auto, dem Fahrrad oder zu Fuß, Neßmersiel bietet für jeden ein Fleckchen zum erholen an.</p>

          <p>
            Sowohl der Strand als auch der Ortskern sind in wenigen Gehminuten zu erreichen. Im Ort finden Sie Einkaufsmöglichkeiten,
            Bäcker, Restaurants und Cafès, eine Tankstelle, sowie den Indoor-Spielpark „Sturmfrei“ und nebenan die „Wellness Oase“, also für
            groß und klein ist alles dabei.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/sturmfrei" className="image">
            <Img fluid={props.data.allFile.edges.find(edge => edge.node.name === 'sturmfrei').node.childImageSharp.fluid} alt="Sturmfrei" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Sturmfrei</h3>
              </header>
              <p>Das Sturmfrei ist ein Indoor Spiel- & Erlebnispark für Jung und Alt.</p>
              <ul className="actions">
                <li>
                  <Link to="/sturmfrei" className="button">
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

export default Nessmersiel

export const query = graphql`
  query NessmersielQuery {
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
