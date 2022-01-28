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
    this.seedGenerator = this.seedGenerator.bind(this);
    this.state = {
      isMount: true,
      ignoreProp: 0,
      seed: 40,
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
  seedGenerator() {
    this.setState(prevState => ({
      ...prevState,
      seed: Number.parseInt(Math.random() * 100)
    }))
  }
  render() {
    const { isMount, ignoreProp, seed } = this.state;

    return (
      <div>
        {isMount ? 
        <Counter
          ignoreProp={ignoreProp}
          seed={seed}
        /> 
        : null}
        <button disabled={isMount} onClick={this.mountCounter}>Mount</button>
        <button disabled={!isMount}onClick={this.unmountCounter}>Unmount</button>
        <button onClick={this.ignoreProp}>Ignore Prop</button>
        <button onClick={this.seedGenerator}>Seed Generator</button>
      </div>
    )
  }
}





export default App;
