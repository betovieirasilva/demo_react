import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor(){
      super();
      this.state = {
          txt: 'this is the state txt',
          cat : 0,
          currentEvent: '---------',
          a: ''
      }
      this.updateEvent = this.updateEvent.bind(this)
  }

  updateEvent( e ) {
      this.setState({currentEvent: e.type})
  }

  update ( e ) {
      this.setState({txt: e.target.value})
  }

  updateValue( e ) {
      this.setState({
          a: ReactDOM.findDOMNode(this.a).value, /*trabalhando com componente "this.refs.b.value" não funcionaria */
          b: this.b.value
      })
  }

  render(){
    //  verificar a chamada do <App em index,js
    let txt = this.props.txt
    return (
        <div>
            <Title text="Titulo maior que 5"/>
            <br />
            <h1>{txt}</h1>
            <br />
            <Widget update={this.update.bind(this)} />
            <h1>{this.state.txt} - {this.state.cat}</h1>
            <br />
            <br />
            <Button2>I <Heart /> Reatc</Button2>
            <br />
            <br />
            <textarea
                onKeyPress={this.updateEvent}
                onCopy={this.updateEvent}
                onCut={this.updateEvent}
                onFocus={this.updateEvent}
                onBlur={this.updateEvent}
                onDoubleClick={this.updateEvent}
                onTouchStart={this.updateEvent}
                cols="30"
                rows="10"
            />
            <h1>{this.state.currentEvent}</h1>
            <br />
            <br />
            <Input ref={ component => this.a = component } updateValue={this.updateValue.bind(this)} /> <span>{this.state.a}</span>
            <br /><br />
            <input ref={ node => this.b = node } type="text" onChange={this.updateValue.bind(this)} /> <span>{this.state.b}</span>
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

class Input extends React.Component {
    render() {
        return <input type="text" onChange={this.props.updateValue} />
    }
}

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
    text(props, propName, component) {
        if (!(propName in props)){
            return new Error(`missing ${propName}`)
        }
        if (props[propName].length < 6) {
            return new Error(`${propName} was too short`)
        }
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
