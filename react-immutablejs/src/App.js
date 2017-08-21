import React, { Component } from 'react';
import { fromJS, Map } from 'immutable';
import './App.css';
import Perf from 'react-addons-perf';
import { datasets, dataGenerate } from './data';
import Table from './components/Table';

window.Perf = Perf;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fromJS(datasets)
    }
  }

  add = () => {
    const  { data } = this.state;
    this.setState({
      data: data.push(Map(dataGenerate()))
    })
  }

  dalete = () => {
    const  { data } = this.state;
    this.setState({
      data: data.pop()
    })
  }

  onChange = (item_id, sold_num) => {
    const  { data } = this.state;
    this.setState({
      data: data.map(i => {
        if(i.get('item_id') === item_id) {
          return i.set('sold_num', sold_num * 2);
        }
        return i;
      })
    })
  }
  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <Table onChange={this.onChange} data={data} />
        <button onClick={this.add}>add</button>
        <button onClick={this.delete}>delete</button>
      </div>
    );
  }
}

export default App;
