import React, { Component } from 'react';

export default class Footer extends Component {
  clearCompleted = () => {
    const { todos, setTodos } = this.props;
    setTodos(todos.filter(todo => todo.completed === false));
  }

  render() {
    const { selectedFilter, todos, setFilter } = this.props;
    const actives = todos.filter(todo => todo.completed === false).length;
    return (
      <footer>
        <span>
          {actives === 0 ? 'no items ' : null}
          {actives === 1 ? '1 item ' : null}
          {actives > 1 ? actives + ' items ' : null}
          left
        </span>
        <ul className='filters'>
          {['all', 'active', 'completed'].map(filter =>
            <li key={filter}
              className={selectedFilter === filter ? 'selected' : undefined}
              onClick={() => setFilter(filter)}>
              {filter}
            </li>
          )}
        </ul>
        <a href='#' onClick={this.clearCompleted}>Clear completed</a>
      </footer>
    )
  }
}