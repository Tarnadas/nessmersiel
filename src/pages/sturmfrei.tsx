import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import BannerSturmfrei from '../components/BannerSturmfrei'
import BackButton from '../components/BackButton'
import { ImageQuery } from '../models/ImageQuery'

const Sturmfrei = (props: { data: ImageQuery }): JSX.Element => (
  <Layout>
    <Helmet>
      <title>Ferienwohnung Nessmersiel - Sturmfrei</title>
      <meta name="description" content="Ferienwohnung Nessmersiel - Sturmfrei Indoor Erlebnispark." />
    </Helmet>

    <BannerSturmfrei />

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <BackButton to="/nessmersiel" />
          <header className="major">
            <h1>Sturmfrei</h1>
          </header>
          <span className="image main">
            <Img fluid={props.data.allFile.edges.find(edge => edge.node.name === 'sturmfrei').node.childImageSharp.fluid} alt="Sturmfrei" />
          </span>
          <p>
            <a href="//www.sturmfrei-nessmersiel.de" target="_blank">
              Hier geht es zur offiziellen Webseite.
            </a>
          </p>
          <p>
            <span className="image left full">
              <Img
                fluid={props.data.allFile.edges.find(edge => edge.node.name === 'sturmfrei_indoor').node.childImageSharp.fluid}
                alt="Sturmfrei Indoor"
              />
            </span>
            Ohne-Sonne-Wetter an der Nordsee? Kein Problem, im Indoor-Spielpark Sturmfrei ist immer etwas los. Der über 3.000 qm große
            Indoorspielplatz in Neßmersiel lässt keine Kinderwünsche offen. Rutschen, klettern, hüpfen - hier ist Action pur angesagt, das
            ganze Jahr.
            <div style={{ clear: 'both' }} />
          </p>
          <p>
            <div className="grid-wrapper">
              <div className="col-6">
                <h3>Attraktionen in Halle 1:</h3>
                <ul>
                  <li>Großes Fußballfeld</li>
                  <li>Trampoline</li>
                  <li>Airhockey und Kicker</li>
                  <li>Lounge mit großem Schachspiel</li>
                  <li>Massagestühle</li>
                  <li>Eventbühne</li>
                </ul>
              </div>

              <div className="col-6">
                <h3>Attraktionen in Halle 2:</h3>
                <ul>
                  <li>Boulderwand</li>
                  <li>T-Wall, die interaktive Reaktionswand</li>
                  <li>Kletterburg über 3 Etagen</li>
                  <li>Minibowlingbahn</li>
                  <li>Poolball</li>
                  <li>Tischtennis</li>
                  <li>Kino</li>
                  <li>Xbox Kinect, Wii, Singstar</li>
                  <li>Billard, Dart</li>
                </ul>
              </div>

              <p className="col-12">
                Im ganzen Spielpark ist freies WLAN. Im Eingangsbereich des Sturmfrei ist die Touristinformation und die Freilenzer-Lounge
                mit bequemen Sesseln zum Entspannen und vielen Infos über unsere schöne Urlaubsregion.
              </p>
            </div>
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Sturmfrei

export const query = graphql`
  query SturmfreiQuery {
    allFile {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
