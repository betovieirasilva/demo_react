import React from 'react';

const HOC = (InnerComponent) => class extends React.Component {
    constructor(){
        super();
        this.state = {count: 0}
    }

    update () {
        this.setState({count: this.state.count + 1})
    }

    componentWillMount() {
        console.log('WILL mount InnerComponent')
    }

    render(){
        return (
            <InnerComponent
                {...this.props}
                {...this.state}
                update={this.update.bind(this)}
            />
        )
    }
}

class AppE extends React.Component {

    render() {
        return (
            <div>
                <Button>button</Button>
                <hr />
                <LabelHOC>label</LabelHOC>
            </div>
        )
    }
}

const Button = HOC((props) =>
    <button onClick={props.update}>{props.children} - {props.count}</button>
)

class Label extends React.Component {
    componentWillMount() {
        console.log('WILL mount Label')
    }

    render(){
        return (
            <label onMouseMove={this.props.update}>{this.props.children} - {this.props.count}</label>
        )
    }
}

const LabelHOC = HOC(Label)

export default AppE
