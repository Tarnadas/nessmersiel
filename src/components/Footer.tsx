import React from 'react'

const Footer = (props): JSX.Element => (
  <footer id="footer">
    <div className="inner">
      <div />
      <ul className="icons">
        <li>
          <a href="https://github.com/Tarnadas/nessmersiel" target="_blank" className="icon alt fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Mario Reder</li>
        <li>
          Design:{' '}
          <a href="https://html5up.net" target="_blank">
            HTML5 UP
          </a>
        </li>
        <li>
          <span>
            <a href="http://www.strandurlaub-nordsee.com/town/nemersiel/">Ferienwohnung Neßmersiel</a> von privat und{' '}
            <a href="https://www.ostsee-strandurlaub.net">ostsee-strandurlaub.net</a>
          </span>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
