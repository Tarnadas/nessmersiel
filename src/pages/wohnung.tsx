import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerWohnung from '../components/BannerWohnung'
import BackButton from '../components/BackButton'

const Wohnung = (): JSX.Element => (
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
          <span className="image main">{/* <img src={pic11} alt="" /> */}</span>
          <p>Die Wohnung ist noch nicht bezugsfertig. Wir informieren Sie, wenn dies soweit ist.</p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Wohnung
