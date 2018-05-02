import React, { Component } from 'react';
import { observable, configure, action } from 'mobx';
import DevTools from 'mobx-react-devtools'
import { observer }  from 'mobx-react';

configure({ enforceActions: true });

@observer
class App extends Component {
  @observable counter = 0;

  @action
  onIncrement = () => {
    this.counter++;
  }

  @action
  onDecrement = () => {
    this.counter--;
  }

  render() {
    return (
      <div>
        {this.counter}

        <button onClick={this.onIncrement} type="button">Increment</button>
        <button onClick={this.onDecrement} type="button">Decrement</button>
        <DevTools />
      </div>
    );
  }
}

export default App;