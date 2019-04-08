import React from 'react'
import { Link, graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Banner from '../components/Banner'

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        keywords: string[]
      }
    }
    wohnzimmer0: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
    nessmersiel: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
    wattenmeer: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}

const index: React.SFC<PageTemplateProps> = ({ data }: PageTemplateProps): JSX.Element => (
  <Layout>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords.join(', ') }
      ]}
    />

    <Banner />

    <div id="main">
      <section id="one" className="tiles">
        <article
          style={{
            backgroundImage: `url(${data.wohnzimmer0.childImageSharp.fluid.src})`
          }}
        >
          <header className="major">
            <h3>Die Wohnung</h3>
            <p>Gerade mal 200 Meter vom Deich entfernt im ruhigen und idyllischem Ferienort Nessmersiel.</p>
          </header>
          <Link to="/wohnung" className="link primary" />
        </article>
        <article
          style={{
            backgroundImage: `url(${data.nessmersiel.childImageSharp.fluid.src})`
          }}
        >
          <header className="major">
            <h3>Neßmersiel</h3>
            <p>Direkt an der Küste gelegen mit Fähre nach Baltrum</p>
          </header>
          <Link to="/nessmersiel" className="link primary" />
        </article>
        <article
          style={{
            backgroundImage: `url(${data.wattenmeer.childImageSharp.fluid.src})`
          }}
        >
          <header className="major">
            <h3>Tourismus</h3>
            <p>
              Die Nordseeküste ist bekannt dafür, dass sie jedes Jahr viele Touristen anlockt. Woran das liegt, können Sie hier erfahren.
            </p>
          </header>
          <Link to="/tourismus" className="link primary" />
        </article>
      </section>
    </div>
  </Layout>
)

export default index

export const query = graphql`
  query PageTemplateQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    wohnzimmer0: file(name: { eq: "00_wohnzimmer0" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    nessmersiel: file(name: { eq: "nessmersiel" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    wattenmeer: file(name: { eq: "wattenmeer" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
