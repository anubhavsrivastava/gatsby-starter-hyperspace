import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div>
    <div>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
