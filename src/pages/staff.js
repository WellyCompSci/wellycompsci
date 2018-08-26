import React from 'react';

export default class Staff extends React.Component{
    render(){
        return(
            <div className="body">
                <h1>The Staff</h1>
                {this.props.data.allStaffJson.edges.map(({node: staffMember}) => (
                    <div className="staff">
                        <div>
                            <h2>{staffMember.name}</h2>
                            <p dangerouslySetInnerHTML={{__html: staffMember.text}}/>
                        </div>
                        <div><img src={require(staffMember.image)} style={{width: '100%', height: 'auto'}} alt={staffMember.name}/></div>
                    </div>
                ))}
            </div>
        );
    }
}

export const pageQuery = graphql`
    query StaffQuery{
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