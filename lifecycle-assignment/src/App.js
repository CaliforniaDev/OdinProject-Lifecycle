import React from "react";
import Counter from "./components/Counter";
// LIFECYCLE METHODS //
// MOUNTING, UPDATING, ERROR BOUNDARIES, UNMOUNTING///
class App extends React.Component {
  constructor(props) {
    super(props);
    this.mountCounter = this.mountCounter.bind(this);
    this.unmountCounter = this.unmountCounter.bind(this);
    this.ignoreProp = this.ignoreProp.bind(this);
    this.state = {
      isMount: true,
      ignoreProp: 0
    }
  }
  mountCounter() {
    this.setState(prevState => ({
      ...prevState,
      isMount: true
    }))
  }
  unmountCounter() {
    this.setState(prevState => ({
      ...prevState,
      isMount: false
    }))
  }

  ignoreProp() {
    this.setState(prevState => ({
      ...prevState,
      ignoreProp: Math.random()
    }))
  }
  componentDidUpdate() {
    console.log(this.state)
  }
  render() {
    const { isMount, ignoreProp } = this.state;

    return (
      <div>
        {isMount ? 
        <Counter
          ignoreProp={ignoreProp}
        /> 
        : null}
        <button disabled={isMount} onClick={this.mountCounter}>Mount</button>
        <button disabled={!isMount}onClick={this.unmountCounter}>Unmount</button>
        <button onClick={this.ignoreProp}>Ignore Prop</button>
      </div>
    )
  }
}





export default App;
