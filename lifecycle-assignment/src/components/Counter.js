import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log('Contructor');
 
    this.state= {
      counter: 0,
    }
  }
  increment = () => {
    this.setState(prevState => ({
      ...prevState,
      counter: prevState.counter + 1
    }));
  }
  decrement = () => {
    this.setState(prevState => ({
      ...prevState,
      counter: prevState.counter - 1
    }))
  }
  componentDidMount() {
    console.log('Component Did Mount');
    console.log('---------------------')

  }
  componentDidUpdate(prevProp, prevState, snapshot) {
    console.log('Component Did Update');
    console.log('-----------------------')
  }
  render() {
    console.log('render');
    const { counter } = this.state
    return (
      <div className="counter">
        <h1>Counter: {counter}</h1>
        <button onClick={this.increment}>INCREMENT</button>
        <button onClick={this.decrement}>DECREMENT</button>
      </div>
    )
  }
}
export default Counter;