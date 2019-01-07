import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import wohnung from '../assets/images/leuchtturm.jpg'
import nessmersiel from '../assets/images/nessmersiel.jpg'
import tourismus from '../assets/images/wattenmeer.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Ferienwohnung Nessmersiel"
                    meta={[
                        { name: 'description', content: 'Ferienwohnung Nessmersiel' },
                        { name: 'keywords', content: 'ferienwohnung, nessmersiel, dornum, nordsee, strand, urlaub' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${wohnung})`}}>
                            <header className="major">
                                <h3>Die Wohnung</h3>
                                <p>Hier steht was über die Wohnung</p>
                            </header>
                            <Link to="/wohnung" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${nessmersiel})`}}>
                            <header className="major">
                                <h3>Nessmersiel</h3>
                                <p>Direkt an der Küste gelegen mit Fähre nach Baltrum</p>
                            </header>
                            <Link to="/nessmersiel" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${tourismus})`}}>
                            <header className="major">
                                <h3>Tourismus</h3>
                                <p>feugiat amet tempus</p>
                            </header>
                            <Link to="/tourismus" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Massa libero</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex