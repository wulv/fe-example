import React, { Component } from 'react';
import Todo from './Todo';

export default class Footer extends Component {
  remove = (id) => {
    const { todos, setTodos } = this.props;
    setTodos(todos.filter(todo => todo.id === id));
  }

  setCompleted = (id) => {
    const { todos, setTodos } = this.props;
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  }

  setTitle = (id, title) => {
    const { todos, setTodos } = this.props;
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, title };
      }
      return todo;
    }));
  }

  render() {
    const { todos, selectedFilter } = this.props;
    return (
      <ul className='todos'>
        {todos.filter(todo => {
          if (selectedFilter === 'active') {
            return todo.completed === false;
          } else if (selectedFilter === 'completed') {
            return todo.completed === true;
          } else {
            return true; 
          }
        }).map(todo => <Todo key={todo.id}
          todo={todo}
          setCompleted={this.setCompleted}
          setTitle={this.setTitle}
          remove={this.remove}
        />)}
      </ul>
    )
  }
}