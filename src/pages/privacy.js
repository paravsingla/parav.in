import React from 'react'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import config from '../utils/config'

export default function Privacy() {
  return (
    <div>
      <Helmet title={config.siteTitle} />
      <SEO />
      <div className="container">
        <Hero title="Privacy Policy">
          <p className="hero-description">.</p>
        </Hero>
      </div>
    </div>
  )
}

Privacy.Layout = Layout
