import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerWattenmeer from '../components/BannerWattenmeer'
import BackButton from '../components/BackButton'

const Wattenmeer = (): JSX.Element => (
  <Layout>
    <Helmet>
      <title>Ferienwohnung Nessmersiel - Das Wattenmeer</title>
      <meta name="description" content="Ferienwohnung Nessmersiel - Das Wattenmeer." />
    </Helmet>

    <BannerWattenmeer />

    <div id="main">
      <section id="one">
        <div className="inner">
          <BackButton to="/tourismus" />
          <header className="major">
            <h2>Wattenmeer</h2>
          </header>
          <p>Hier steht noch nichts.</p>
        </div>
      </section>
      <section id="two" className="spotlights" />
    </div>
  </Layout>
)

export default Wattenmeer
