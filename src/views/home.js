import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Future Mobility Orchestrator</title>
        <meta property="og:title" content="Future Mobility Orchestrator" />
      </Helmet>
    </div>
  )
}

export default Home
