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
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
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
