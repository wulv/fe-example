import React, { Component } from 'react';

export default class Todo extends Component {
  componentWillMount() {
    this.setState({value: this.props.todo.title})
  }

  componentWillReceiveProps(next) {
    if (next.todo.title !== this.props.todo.title) {
      this.setState({ value: next.todo.title })
    }
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleCompleted = (e) => {
    e.preventDefault();
    const { setCompleted, todo } = this.props;
    setCompleted(todo.id);
  }

  render() {
    const { setTitle, remove, todo: { completed, title, id } } = this.props;
    return (
      <li>
      <input type='checkbox'
        checked={completed}
        onClick={this.handleCompleted} />
      <input type='text' value={this.state.value} onChange= {this.onChange} onBlur={(e) => setTitle(id, e.target.value)} />
      <button onClick={() => remove(id)} />
    </li>
    )
  }
}