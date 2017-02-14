import React from 'react';

class App extends React.Component {
  render(){
    let txt = this.props.txt
    return (
        <div>
            <h1>{txt}</h1>
        </div>
    )
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
