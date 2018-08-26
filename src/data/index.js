import React from 'react';
export const StaffMember = ({staffMember}) => (
    <div className="staff">
        <div>
            <h2>{staffMember.name}</h2>
            <p dangerouslySetInnerHTML={{__html: staffMember.text}}/>
        </div>
        <div><img src={require(staffMember.image)} style={{width: '100%', height: 'auto'}} alt={staffMember.name}/></div>
    </div>
);