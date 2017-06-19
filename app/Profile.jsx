import React from 'react';

export default class profile extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="profile-component">
            <h1> My Name is {this.props.name}</h1>
            <h2>My age is {this.props.age} </h2>
            </div>
        )
    }
}
