import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerNessmersiel from '../components/BannerNessmersiel'
import BackButton from '../components/BackButton'

import sturmfrei from '../assets/images/sturmfrei.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Ferienwohnung Nessmersiel - Der Küstenort Nessmersiel</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerNessmersiel />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <BackButton to="/" />
                    <header className="major">
                        <h2>Nessmersiel</h2>
                    </header>
                    <p>Hier steht was über Nessmersiek.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/sturmfrei" className="image">
                        <img src={sturmfrei} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sturmfrei</h3>
                            </header>
                            <p>Das Sturmfrei ist ein Indoor Spiel- & Erlebnispark für Jung und Alt.</p>
                            <ul className="actions">
                                <li><Link to="/sturmfrei" className="button">Entdecken</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing