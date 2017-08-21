import React, { Component } from 'react';

import './App.css';
import Perf from 'react-addons-perf';
import { datasets, dataGenerate } from './data';
import Table from './components/Table';

window.Perf = Perf;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: datasets
    }
  }

  add = () => {
    const  { data } = this.state;
    data.push(dataGenerate())
    this.setState({
      data
    })
  }

  delete = () => {
    const  { data } = this.state;
    data.pop()
    this.setState({
      data
    })
  }

  onChange = (item_id, sold_num) => {
    const  { data } = this.state;
    this.setState({
      data: data.map(i => {
        if(i.item_id === item_id) {
          i.sold_num = sold_num * 2;
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
