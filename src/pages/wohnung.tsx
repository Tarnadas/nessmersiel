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
      <title>Ferienwohnung Nessmersiel - Die Wohnung</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <BannerWohnung />

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <BackButton to="/" />
          <ImageGallery
            showBullets={true}
            items={data.allFile.edges.map(edge => ({
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
          <p>Wohnzimmer + Küche, Schlafzimmer, Bad</p>
          <p>
            Falls Sie Interesse haben die Wohnung zu buchen, dann können Sie sich gerne entweder telefonisch oder per Mail bei uns melden.
          </p>
        </div>
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
