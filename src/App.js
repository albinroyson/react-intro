import React, { Component } from "react";
import HelloWorld from "./components/screens/HelloWorld";

class App extends Component {
  render(){
    return( 
    <>
      <HelloWorld 
      a={10}
      b={20} />
    </>
    )
  }
}

export default App;
