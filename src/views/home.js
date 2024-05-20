import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Violet Compassionate Locust</title>
        <meta property="og:title" content="Violet Compassionate Locust" />
      </Helmet>
    </div>
  )
}

export default Home
