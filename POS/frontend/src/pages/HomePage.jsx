import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <Header/>
      <div>
        <Link to={'/pos'}>Go to POS </Link>
      </div>
    </div>
  )
}

export default HomePage