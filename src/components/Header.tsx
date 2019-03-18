import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ onToggleMenu }): JSX.Element => (
  <header id="header" className="alt">
    <nav>
      <a className="menu-link" onClick={onToggleMenu} href="javascript:;">
        Menü
      </a>
    </nav>
  </header>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func
}

export default Header
