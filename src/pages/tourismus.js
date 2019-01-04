import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerTourismus from '../components/BannerTourismus'

import baltrum from '../assets/images/pic10.jpg'
import wattenmeer from '../assets/images/wattenmeer.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Ferienwohnung Nessmersiel - Tourismus</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerTourismus />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Tourismus</h2>
                    </header>
                    <p>Hier steht was über Tourismus.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={baltrum} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Baltrum</h3>
                            </header>
                            <p>Hier steht was über Baltrum.</p>
                            <ul className="actions">
                                <li><Link to="/baltrum" className="button">Entdecken</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={wattenmeer} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Das Wattenmeer</h3>
                            </header>
                            <p>Hier steht was über das Wattenmeer.</p>
                            <ul className="actions">
                                <li><Link to="/wattenmeer" className="button">Entdecken</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing