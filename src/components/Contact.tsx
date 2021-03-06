import React from 'react'

const Contact = (props): JSX.Element => (
  <section id="contact">
    <div className="inner">
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope" />
            <h3>Email</h3>
            <a href="mailto:harry.holschuh@web.de">harry.holschuh@web.de</a>
          </div>
          <div className="contact-method">
            <span className="icon alt fa-phone" />
            <h3>Telefon</h3>
            <span>+49(0)4933 8785644</span>
            <h3>Mobil</h3>
            <span>+49(0)151 2241 3319</span>
            <br />
            <span>Gerne auch WhatsApp</span>
          </div>
          <div className="contact-method">
            <span className="icon alt fa-home" />
            <h3>Adresse</h3>
            <span>
              Manuela Holschuh
              <br />
              Schwalbennest 5<br />
              26553 Nessmersiel
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
