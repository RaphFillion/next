import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{background: '#333', padding: '20px 0', display: 'flex', justifyContent: 'center'}}>
      <Link style={{textDecoration: 'none', color: 'white', marginRight: '10px'}} to='/' >Accueil</Link>
      <Link style={{textDecoration: 'none', color: 'white', marginRight: '10px'}} to='services' >Services</Link>
      <Link style={{textDecoration: 'none', color: 'white'}} to='contact' >Contact</Link>
    </nav>
  )
}
