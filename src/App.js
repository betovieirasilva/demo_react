import React from 'react';

class App extends React.Component {
  render(){
    return (
        <div>
            <h1>{this.props.txt}</h1>
        </div>
    )
  }
}

//OR
//const App = () => <h1>Hello World</h1>
export default App
