import React from 'react';


class Counter extends React.Component {
  constructor(props) {
    super(props);
    const { ignoreProp } = props;
    console.log(ignoreProp);
    console.log('Contructor');
    this.state = {
      counter: 0,
      seed: 0,
      initializing: true
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

  isThereAnError = () => {
    if(this.props.showErrorComponent && this.state.error) return true;
    return false;
  }

  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed)
      return {
        seed: props.seed,
        counter: props.seed
      }
    return null;
  }
  componentDidMount() {
    console.log('Component Did Mount');
    setTimeout(() => {
      this.setState({initializing: false})
    }, 500);
    console.log('---------------------');
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp) {
      console.log("Should Component Update - DO NOT RENDER");
      console.log('-----------------------')
      return false;
    }

    console.log("Should Component Update - SHOULD RENDER");
    console.log('-----------------------')
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Get Snapshot Before Update');
    return null;
  }

  render() {
    const { counter } = this.state;
    if (this.state.initializing) return <div><h1>Initializing</h1></div>
    if (this.isThereAnError()) return <ErrorMessage error={this.state.error} />

    return (
      <div>
        <button onClick={this.increment}>INCREMENT</button>
        <button onClick={this.decrement}>DECREMENT</button>
        <div className="counter">
          <h1>Counter: {counter}</h1>
        </div>
        {this.props.showErrorComponent ? <ErrorComponent /> : null}
      </div>
    )
  }
  componentDidUpdate(prevProp, prevState, snapshot) {
    console.log('Component Did Update');
    console.log('-----------------------')
  }
  componentWillUnmount() {
    console.log('Component Will Unmount');
    console.log('------------------------')
  }
  componentDidCatch(error, info) {
    console.log("Component Did Catch");
    console.log("----------------------")
    this.setState({ error, info });
  
  }
}

const ErrorComponent = () => <div>{props.ignore}</div>

const ErrorMessage = ({ error }) => {
  return (
    <div>
      <h2>We have encountered an error! {error.message} </h2>
    </div>
  )
}
export default Counter;