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

//OR
//const App = () => <h1>Hello World</h1>
export default App
