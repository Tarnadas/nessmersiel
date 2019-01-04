import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Wohnung = (props) => (
    <Layout>
        <Helmet>
            <title>Ferienwohnung Nessmersiel - Die Wohnung</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Die Ferienwohnung</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>Hier steht was über die Wohnung.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Wohnung