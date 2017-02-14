import React from 'react';

class App extends React.Component {

  constructor(){
      super();
      this.state = {
          txt: 'this is the state txt',
          cat : 0
      }
  }

  update ( e ) {
      this.setState({txt: e.target.value})
  }

  render(){
    //  verificar a chamada do <App em index,js
    let txt = this.props.txt
    return (
        <div>
            <h1>{txt}</h1>
            <br />
            <Widget update={this.update.bind(this)} />
            <h1>{this.state.txt} - {this.state.cat}</h1>
            <br />
            <br />
            <Button2>I <Heart /> Reatc</Button2>
        </div>
    )
  }
}

const Widget = (props) =>
    <input type="text" onChange={props.update} />

const Button2 = (props) =>
    <button>{props.children}</button>

class Heart extends React.Component {
    render(){
        return <span>&hearts;</span>
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt : "this is the default txt"
}

//OR
//const App = () => <h1>Hello World</h1>
export default App
