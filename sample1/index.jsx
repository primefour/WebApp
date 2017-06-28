import React from 'react'
import ReactDom from 'react-dom'


class App extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="container">
            <h1>hello World !</h1>
            </div>)
    }
};

const app = document.createElement('div');

document.body.appendChild(app);

ReactDom.render(<App/>,app);
