import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import wohnung from '../assets/images/leuchtturm.jpg'
import nessmersiel from '../assets/images/nessmersiel.jpg'
import tourismus from '../assets/images/wattenmeer.jpg'

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        keywords: string[]
      }
    }
  }
}

const index: React.SFC<PageTemplateProps> = ({ data }): JSX.Element => (
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
        <article style={{ backgroundImage: `url(${wohnung})` }}>
          <header className="major">
            <h3>Die Wohnung</h3>
            <p>Gerade mal 200 Meter vom Deich entfernt im ruhigen und idyllischem Ferienort Nessmersiel.</p>
          </header>
          <Link to="/wohnung" className="link primary" />
        </article>
        <article style={{ backgroundImage: `url(${nessmersiel})` }}>
          <header className="major">
            <h3>Nessmersiel</h3>
            <p>Direkt an der Küste gelegen mit Fähre nach Baltrum</p>
          </header>
          <Link to="/nessmersiel" className="link primary" />
        </article>
        <article style={{ backgroundImage: `url(${tourismus})` }}>
          <header className="major">
            <h3>Tourismus</h3>
            <p>
              Die Nordseeküste ist bekannt dafür, dass sie jedes Jahr viele Touristen anlockt. Woran das liegt, können Sie hier erfahren.
            </p>
          </header>
          <Link to="/tourismus" className="link primary" />
        </article>
      </section>
      <section id="two">
        <div className="inner">
          <p>
            Die Wohnung ist noch nicht bezugsfertig, wird dies aber bald sein. Bilder folgen auch demnächst. Sie können uns auch ganz
            einfach telefonisch oder per E-Mail erreichen unter den unten aufgelisteten Kontaktdaten.
          </p>
        </div>
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
  }
`
