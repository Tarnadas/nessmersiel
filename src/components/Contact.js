import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="mailto:harry.holschuh@web.de">harry.holschuh@web.de</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Telefon</h3>
                        <span>+49(0)151 22413319</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Adresse</h3>
                        <span>Nessmersiel</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
