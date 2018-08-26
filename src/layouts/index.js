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
