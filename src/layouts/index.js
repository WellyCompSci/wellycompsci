import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'
import Sidebar from '../components/sidebar'
library.add(fab);
const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Welly Comp Sci is a student designed website for advertisement of the Computer Science department at Wellington College' },
        { name: 'keywords', content: 'wellington, college, computer, science, wellly, comp, sci, student, led, project, design, jonathon, hooper, paul, jennings, website' },
      ]}
    >
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/manifest.json"/>
<meta name="msapplication-TileColor" content="#333333"/>
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
<meta name="theme-color" content="#333333"/>
  </Helmet>
    <div className="wrapper">
    <Header siteTitle={data.site.siteMetadata.title} />
    <div className="container">
          < Sidebar />

      {children()}

    </div>
    <Footer siteFooter={data.site.siteMetadata.footer} />
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        footer
      }
    }
  }
`
