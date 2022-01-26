import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    const { ignoreProp } = props;
    console.log(ignoreProp);
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
  componentWillUnmount() {
    console.log('Component Will Unmount');
    console.log('------------------------')
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp ) {
        console.log("Should Component Update - DO NOT RENDER");
        return false;
      } 
      console.log("Should Component Update - SHOULD RENDER");
      return true;
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