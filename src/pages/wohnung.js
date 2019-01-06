import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerWohnung from '../components/BannerWohnung'

import pic11 from '../assets/images/pic11.jpg'

const Wohnung = (props) => (
    <Layout>
        <Helmet>
            <title>Ferienwohnung Nessmersiel - Die Wohnung</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <BannerWohnung />

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>Hier steht was über die Wohnung.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Wohnung