import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Walter Milan</title>
        <meta
          name="description"
          content="WalterMilan &amp; Partners. Brand, Media, and Communications services coming soon."
        />
        <meta property="og:title" content="Walter Milan" />
        <meta
          property="og:description"
          content="WalterMilan &amp; Partners. Brand, Media, and Communications services coming soon."
        />
      </Helmet>
      <div className="home-container1">
        <span className="home-text">WalterMilan &amp; Partners</span>
        <div className="home-container2">
          <span className="home-text1 hover-cont">Coming Soon </span>
        </div>
      </div>
    </div>
  )
}

export default Home
