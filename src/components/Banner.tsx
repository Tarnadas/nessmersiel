import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { ImageQuery } from '../models/ImageQuery'

const Banner = (): JSX.Element => (
  <StaticQuery
    query={graphql`
      query BannerQuery {
        allFile {
          edges {
            node {
              name
              childImageSharp {
                fluid(maxWidth: 1400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={(data: ImageQuery) => (
      <section
        id="banner"
        className="major"
        style={{
          backgroundImage: `url(${data.allFile.edges.find(edge => edge.node.name === 'banner').node.childImageSharp.fluid.src})`
        }}
      >
        <div className="inner">
          <header className="major">
            <h1>Unsere Ferienwohnung in Neßmersiel</h1>
          </header>
          <div className="content">
            <p>Herzlich willkommen zu unserer Ferienwohnung in dem Küstenort Neßmersiel.</p>
            <ul className="actions">
              <li>
                <a href="#contact" className="button next scrolly">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )}
  />
)

export default Banner
