import ReactDom from 'react-dom'
import React from 'react'
import Profile from './Profile.jsx';

const props = {
    name:'viking',
    age:20
};

const app = document.createElement('div');

document.body.appendChild(app);

ReactDom.render(<Profile name="lihaihui" />,app)
