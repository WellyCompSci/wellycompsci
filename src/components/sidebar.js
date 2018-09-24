import React from 'react';
import Link from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Sidebar extends React.Component{
        state = {
            toggle: false
        }
        toggle = () => this.setState(state => ({
            toggle: !state.toggle
        }));
    render(){
    var { toggle } = this.state;
        const items = [
                    {to: '/', text: "Home"},
                    {to: '/staff', text: "Staff"},
                    {to: '/ambassadors', text: "Ambassadors"},
                    {to: '/tutorials', text: "Tutorials"},
                    {to: '/jobs', text: "Jobs"},
                    {to: '/projects', text: "Projects"}

        ]
        return(
                <div className="sidebar">
                <div className="sidebar-small">
                    <div className="sidebar-top">
                        <a style={{margin: 5}} href="https://twitter.com/Welly_CompSci"><FontAwesomeIcon icon={["fab","twitter"]} size="2x"/></a>
                         <div className={toggle ? "menu-logo change" : "menu-logo"} onClick={this.toggle}>
                            <div className="strip-1"></div>
                            <div className="strip-2"></div>
                            <div className="strip-3"></div>
                            </div>
                        <a style={{margin: 5}} href="https://www.youtube.com/channel/UCq87CebySHha_v_Dka2Evlw"><FontAwesomeIcon icon={["fab", "youtube"]} size="2x"/></a>
                    </div>
                        <div style={{display: toggle ? 'block' : 'none'}}>
                            {items.map(item => <Link to={item.to}>{item.text}</Link>)}
                        </div>
                </div>
                <div className="sidebar-large">
                        <div>
                            {items.map(item => <Link to={item.to}>{item.text}</Link>)}
                        </div>
                        </div>
             </div>
        );
    }
}
