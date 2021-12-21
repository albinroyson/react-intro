import React,{ Component } from "react";

class HelloWorld extends Component { 
    state ={
        counter:20,

    };   
    render() {
        return(
            <>
                <h1>{this.state.counter}</h1>
                <button onClick={() =>(this.setState({counter:this.state.counter +  10}))}>
                increement</button>
            </>
        ) 
    }
}
export default HelloWorld;