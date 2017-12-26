import React, { Component } from 'react';
import Head from 'next/head';
import Todos from '../components/Todos';
import AddTodoForm from '../components/AddTodoForm';
import Footer from '../components/Footer';

class App extends Component {
  state = {
    todos: [],
    selectedFilter: 'all'
  }

  setTodos = (todos) => {
    this.setState({
      todos
    });
  }
  
  setFilter = (selectedFilter) => {
    this.setState({
      selectedFilter
    });
  }

  render() {
    const { todos, selectedFilter } = this.state;
    return <div>
      <section className='todoapp'>
        <Head>
          <title>Todos</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel='stylesheet' href='/static/styles.css' />
        </Head>
        <h1>todos</h1>
        <AddTodoForm todos={todos} setTodos={this.setTodos} />
        <Todos todos={todos} selectedFilter={selectedFilter} setTodos={this.setTodos} />
        <Footer todos={todos} selectedFilter={selectedFilter} setTodos={this.setTodos} setFilter={this.setFilter} />
      </section>
    </div>
  }
}

export default App;
