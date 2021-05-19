import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
    <div>
      <div><Link to="/">Space</Link> <Link to="/hello">Dolphin</Link> <Link to="/counter">Safe</Link></div>
    </div>
  )
  
  export default NavBar