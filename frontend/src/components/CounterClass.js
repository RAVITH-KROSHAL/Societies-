import React from "react";

class CounterClass extends React.Component {
    constructor(){
        super();
        this.increment = this.increment.bind(this)
        this.state={
            Number:0
        }
    }

    increment(){
        this.setState({
            Number:++this.state.Number
            //++this.state.number
        })
    }

    render(){
        return(
            <dev>
                <h3>Classbase Component</h3>
              <h1>Counter = {this.state.Number}</h1>
              <button onClick={this.increment}>Increment</button>
              <hr></hr>
            </dev>
        )
    }
}

export default CounterClass;