import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerTourismus from '../components/BannerTourismus'

import sturmfrei from '../assets/images/pic08.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Ferienwohnung Nessmersiel - Der Küstenort Nessmersiel</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerTourismus />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Nessmersiel</h2>
                    </header>
                    <p>Hier steht was über Nessmersiek.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={sturmfrei} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sturmfrei</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/sturmfrei" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing