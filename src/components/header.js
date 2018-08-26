import React from 'react'
import Link from 'gatsby-link'
import Sidebar from './sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Header extends React.Component{
    state = {
      toggle: false
    }
  render(){
    var { toggle } = this.state;
    var { siteTitle } = this.props;
    return (
      <React.Fragment>
      <div className="header-container"
    style={{
      background: '#333',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: 5,
        minHeight: 120,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
      }}
    >
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <div className={toggle ? "menu-logo change" : "menu-logo"} onClick={this.toggle}>
      <div className="strip-1"></div>
      <div className="strip-2"></div>
      <div className="strip-3"></div>
    </div>
    </div>
      <h1 className="header">
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div style={{padding: 5, textAlign: 'center'}}><a style={{margin: 5}} href="https://twitter.com/Welly_CompSci"><FontAwesomeIcon icon={["fab","twitter"]} size="lg"/></a>
        <a style={{margin: 5}} href="https://www.youtube.com/channel/UCq87CebySHha_v_Dka2Evlw"><FontAwesomeIcon icon={["fab", "youtube"]} size="lg"/></a></div>
      </div>
  </div>
  </React.Fragment>);
  }
};
