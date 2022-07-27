import PropTypes from 'prop-types';

import ListGroup from 'react-bootstrap/ListGroup';
import TodoItem from '../TodoItem/TodoItem';

function TodoList(props) {
  const {todos, onDone, onRemove} = props;

  return (
    <ListGroup variant="flush">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDone={onDone} onRemove={onRemove} />
      ))}
    </ListGroup>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      work: PropTypes.string,
      done: PropTypes.bool,
    }),
  ),
  onDone: PropTypes.func,
  onRemove: PropTypes.func,
};

export default TodoList;
