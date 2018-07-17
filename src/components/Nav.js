import React, { PureComponent } from 'react'

import { Link } from 'react-router-dom'

class Nav extends PureComponent {
    render() {
        return (
            <nav>
                <div className="nav-wrapper cyan lighten-2">
                    <Link to="/" className="brand-logo center">reactStartPage<sup>3.2</sup></Link>
                    <ul className="left hide-on-med-and-down">
                        <li><Link to="/add-remove">Add/Remove</Link></li>
                        <li><Link to="/link-github">GitHub Settings</Link></li>
                    </ul>
                    <ul className="right hide-on-med-and-down">
                        { this.props.ghAuthStatus ? <li className="gh-connected"><Link to="/link-github"><img alt="It's you!" src="//avatars0.githubusercontent.com/u/6093927?v=4" width="30" height="30"/>Connected to GitHub</Link></li> : null }
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav
