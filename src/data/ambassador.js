import React from 'react';
import {Toggle} from 'react-powerplug';
export default class Ambassador extends React.Component{
    render(){
        var {key, ambassador} = this.props;
        return (
            <Toggle>
                {({on, toggle}) => (
                    <React.Fragment>
                    <div className="ambassador" key={key}>
                        <img src={require(ambassador.profilePic)} onClick={toggle} style={{width: '100%'}} />
                        <div>
                            <h2>{ambassador.name}</h2>
                            <p className="titles">{ambassador.titles}</p>
                            <p>{ambassador.house}</p>
                            <p>{ambassador.startingYear} - {ambassador.endingYear}</p>
                            {ambassador.endingYear > new Date().getYear() && <a href={"mailto:" + ambassador.email}>Contact</a>}
                        </div>    
                    </div>
                    <div className="ambassador-modal" style={{display: on ? 'block' : 'none'}}>
                        <span className="close" onClick={toggle}>&times;</span>
                        <img className="modal-content" src={require(ambassador.profilePic)}/>
                        <div className="caption">
                            <h2>Name:{ambassador.name}</h2>
                            <h3>Alais: {ambassador.titles}</h3>
                            <p>House: {ambassador.house}</p>
                            <p>Time at Wellington: {ambassador.startingYear} - {ambassador.endingYear}</p>
                            <p>Subjects Taken: {ambassador.subjectsTaken}</p>
                            <p>Languages Proficient: {ambassador.languages}</p>
                            <p>About Me: {ambassador.about}</p>
                        </div>
                    </div>
                    </React.Fragment>
                )}
        </Toggle>
        );
    }
}