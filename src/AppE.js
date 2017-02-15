import React from 'react';

const HOC = (InnerComponent) => class extends React.Component {
    componentWillMount() {
        console.log('WILL mount InnerComponent')
    }

    render(){
        return (
            <InnerComponent
                {...this.props}
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

const Button = HOC((props) => <button>{props.children}</button>)

class Label extends React.Component {
    componentWillMount() {
        console.log('WILL mount Label')
    }

    render(){
        return (
            <label>{this.props.children}</label>
        )
    }
}

const LabelHOC = HOC(Label)

export default AppE
