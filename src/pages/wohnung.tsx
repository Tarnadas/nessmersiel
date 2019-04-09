import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import ImageGallery from 'react-image-gallery'

import Layout from '../components/layout'
import BannerWohnung from '../components/BannerWohnung'
import BackButton from '../components/BackButton'
import { ImageQuery } from '../models/ImageQuery'

const Wohnung = ({ data }: { data: ImageQuery }): JSX.Element => (
  <Layout>
    <Helmet>
      <title>Ferienwohnung Nessmersiel - Haus Freia</title>
      <meta
        name="description"
        content="Ferienwohnung Nessmersiel - Gemütliche Nichtraucherwohnung für 2 Personen mit Baby oder Kleinkind im 1. OG, 40 Quadratmeter."
      />
    </Helmet>

    <BannerWohnung />

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <BackButton to="/" />
          <p>Gemütliche Nichtraucherwohnung für 2 Personen mit Baby. Die Wohnung befindet sich im 1. OG und ist 40qm groß.</p>
          <p>
            Das Wohn-/Esszimmer ist mit Fernseher, einer gemütlichen Couch, Relaxsessel, rundem Tisch und Sitzgelegenheiten ausgestattet. In
            der Küchenzeile befinden sich ein E-Herd, Ceranfeld und Backofen, Mikrowelle, Kühlschrank mit Gefrierfach und genügend
            Kleingeräte. Im Schlafzimmer ist ein großes 2x2 Meter Bett und ausreichend Platz für ein Kinderreisebett, welches wir kostenlos
            zur Verfügung stellen. Ein Kinderhochstuhl ist auch vorhanden. Auch ist ein großer Südbalkon vorhanden, wo sie Ihre Pläne für
            den nächsten Tag planen können. Ein Waschraum mit Waschmaschine und Trockner ist kostenpflichtig und ein abschließbarer Raum für
            Ihre Fahrräder ist vorhanden.
          </p>
          <p>Haustiere sind nicht erlaubt. WLAN können wir leider auch nicht anbieten.</p>
          <ImageGallery
            showBullets={true}
            items={data.allFile.edges
              .sort((a, b) => a.node.name.localeCompare(b.node.name))
              .map(edge => ({
                original: edge.node.childImageSharp.fluid,
                thumbnail: edge.node.childImageSharp.fixed
              }))}
            renderItem={item => (
              <div className="image-gallery-image">
                <Img fluid={item.original} />
                {item.description && <span className="image-gallery-description">{item.description}</span>}
              </div>
            )}
            renderThumbInner={item => (
              <div className="image-gallery-thumbnail-inner">
                <Img fixed={item.thumbnail} alt={item.thumbnailAlt} title={item.thumbnailTitle} />
                {item.thumbnailLabel && <div className="image-gallery-thumbnail-label">{item.thumbnailLabel}</div>}
              </div>
            )}
          />
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Ferienwohnung Neßmersiel Haus Freia</h3>
              </header>
              <p>
                Unsere gemütliche Nichtraucherwohnung liegt in einer beliebten Ferienhaussiedlung im Küstenbadeort Neßmersiel. Bis zum Ort
                Dornum sind es ca. 6km. Dort befinden sich mehrere Supermärkte. Bis zum Deich sind es ca. 200 Meter, bis zum Strand etwa
                1,5km. Dort befindet sich auch der Fährhafen, von dem aus die Insel Baltrum angefahren wird. Ein kleiner Edeka befindet sich
                in fußläufiger Entfernung von der Wohnung hin zur Ortsmitte. Im Ort selbst befinden sich zahlreiche Cafés und Restaurants.
                Auch der Indoor Spielpark Sturmfrei und die neu renovierte Wellness Oase sind nur ca. 300-400 Meter entfernt. Neßmersiel ist
                auch der Ausgangspunkt für geführte Wattwanderungen durch das Weltnaturerbe Wattenmeer zur Insel Norderney und Baltrum.
              </p>
              <p>
                Falls Sie Interesse haben die Wohnung zu buchen, dann können Sie sich gerne entweder telefonisch oder per Mail bei uns
                melden.
              </p>
              <header className="major">
                <h3>Preise</h3>
              </header>
              <ul>
                <li>47€ pro Übernachtung vom 01.04. - 30.09.2019, restliche Zeit auf Anfrage.</li>
                <li>30€ Endreinigung</li>
                <li>Kurtaxe 2,60€ pro Person muss gesondert abgerechnet werden.</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Wohnung

export const query = graphql`
  query WohnungQuery {
    allFile(filter: { sourceInstanceName: { eq: "wohnung" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 92, height: 92) {
              ...GatsbyImageSharpFixed
            }
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
