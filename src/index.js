import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  function(){
    let state
  }
  
  function changeCount(state = {count:0 }, action){
    switch (action.type){
      case 'INCREASE_COUNT':
        return { count: state.count + 1}

      default:
        return state;
    }
  }

  function dispatch(action){
    state = changeCount(state, action)
    render()
  }

  function render(){
    return `The current count is less than ${this.state.count + upToNext}`
  }

  render() {
    return (
      <div className="App">
        <Header count={this.state.}/>
        <Counter />
      </div>
    );
  }
}

class Header extends Component {

  renderDescription = () => {
    const remainder = this.state.count % 5;
    const upToNext = 5 - remainder;
    ;
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <h3>{this.renderDescription()}</h3>
      </header>
    );
  }
}

class Counter extends Component {


  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  renderDescription = () => {
    const remainder = this.state.count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.state.count + upToNext}`;
  };

  render() {
    return (
      <div className="Counter">
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
