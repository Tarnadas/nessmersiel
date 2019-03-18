import React from 'react'
import { Link } from 'gatsby'

const BackButton = ({ to }): JSX.Element => (
  <div style={{ marginTop: '-2em', marginBottom: '2em' }}>
    <Link className="button icon fa-backward" to={to}>
      Zurück
    </Link>
  </div>
)

export default BackButton
