import React from 'react';
import {StaffMember} from '../data';
import Helmet from 'react-helmet';
export default class Staff extends React.Component{
    render(){
        return(
            <React.Fragment>                
                < Helmet title = {
                    "Staff - " + this.props.data.site.siteMetadata.title
                }
                />

            <div className="body">
                <h1>The Staff</h1>
                {this.props.data.allStaffJson.edges.map(({node: staffMember}) => (
                    <StaffMember staffMember={staffMember}/>
                ))}
            </div>
            </React.Fragment>

        );
    }
}

export const pageQuery = graphql`
    query StaffQuery{
        site {
            siteMetadata {
                title
                footer
            }
        }
        allStaffJson{
            edges{
                node{
                    name
                    text
                    image
                }
            }
        }
    }
`