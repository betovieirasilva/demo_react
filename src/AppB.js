import React from 'react';
import ReactDOM from 'react-dom';

class AppB extends React.Component {

    constructor(){
        super();
        this.state = {
            val: 0
        }
        this.update = this.update.bind(this)
    }

    update () {
        this.setState({val: this.state.val + 1})
    }

    componentWillMount(){
        console.log('mount');
    }

    render() {
        console.log('render');
        return (
            <div>
                <button onClick={this.update}>{this.state.val}</button>
            </div>
        )
    }

    componentDidMount() {
        console.log('did mount');
    }
    componentWillUnmount() {
        console.log('unmount');
    }
}

class Wrapper extends React.Component {
    mount() {
        ReactDOM.render(<AppB />, document.getElementById('a'))
    }
    unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }
    render(){
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>UnMount</button>
                <div id="a"></div>
            </div>
        )
    }
}

export default Wrapper
