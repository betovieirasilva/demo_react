import React, {Component } from 'react';
import './Button.css';//Tell the Webpack that Button.js user these styles

class Button extends Component {
    render() {
        return <div className="Button" />
    }
}

export default Button;