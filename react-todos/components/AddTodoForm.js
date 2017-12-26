import React, { Component } from 'react';

const randomId = () => Math.random().toString(36).substring(2);

export default class AddTodoForm extends Component {
  addTodo(todo) {
    const { todos, setTodos } = this.props;
    setTodos([{
      id: randomId(),
      title: todo,
      completed: false
    }, ...todos]);
  }

  handleSubmit = ({ target: { title } }) => {
    this.addTodo(title.value);
    title.value = '';
  }

  handleClick = (e) => {
    const { todos, setTodos } = this.props;
    const val = e.target.value;
    setTodos(todos.map(item => item.completed = val));
  }

  render() {
    return (
      <form action='javascript:' onSubmit={this.handleSubmit} >
        <input type='checkbox' onClick={this.handleClick} />
        <input type='text' name='title' placeholder='What needs to be done?' />
      </form>
    )
  }
}