import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerBaltrum from '../components/BannerBaltrum'
import BackButton from '../components/BackButton'

const Baltrum = (): JSX.Element => (
  <Layout>
    <Helmet>
      <title>Ferienwohnung Nessmersiel - Insel Baltrum</title>
      <meta name="description" content="Ferienwohnung Nessmersiel - Insel Baltrum." />
    </Helmet>

    <BannerBaltrum />

    <div id="main">
      <section id="one">
        <div className="inner">
          <BackButton to="/tourismus" />
          <header className="major">
            <h2>Baltrum</h2>
          </header>
          <p>Hier steht noch nichts.</p>
        </div>
      </section>
      <section id="two" className="spotlights" />
    </div>
  </Layout>
)

export default Baltrum
