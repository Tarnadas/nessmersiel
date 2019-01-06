import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/wohnung">Die Wohnung</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/nessmersiel">Nessmersiel</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/tourismus">Tourismus</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a onClick={props.onToggleMenu} href="#contact" className="button special fit">Kontakt</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
