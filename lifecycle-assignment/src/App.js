import React from "react";
import Counter from "./components/Counter";
// LIFECYCLE METHODS //
// MOUNTING, UPDATING, ERROR BOUNDARIES, UNMOUNTING///
class App extends React.Component {
  constructor(props) {
    super(props);
    this.mountCounter = this.mountCounter.bind(this);
    this.unmountCounter = this.unmountCounter.bind(this);
    this.state = {
      isMount: true
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
  componentDidUpdate() {
    console.log(this.state)
  }
  render() {
    const { isMount } = this.state;

    return (
      <div>
        {isMount ? <Counter /> : null}
        <button disabled={isMount} onClick={this.mountCounter}>Mount</button>
        <button disabled={!isMount}onClick={this.unmountCounter}>Unmount</button>
      </div>
    )
  }
}





export default App;
