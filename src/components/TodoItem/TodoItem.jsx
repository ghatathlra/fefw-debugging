import PropTypes from 'prop-types';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import styles from './TodoItem.module.css';

function TodoItem(props) {
  const {todo, onDone, onRemove} = props;

  return (
    <ListGroup.Item>
      <div className="d-flex align-items-center justify-content-between">
        <span className={todo.done ? styles.tododone : ''}>{todo.work}</span>
        <div>
          {!todo.done ? (
            <Button
              variant="secondary"
              onClick={() => {
                onDone(todo);
              }}
            >
              Done
            </Button>
          ) : null}
          &nbsp;
          <Button
            variant="outline-danger"
            onClick={() => {
              onRemove(todo);
            }}
          >
            Remove
          </Button>
        </div>
      </div>
    </ListGroup.Item>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    work: PropTypes.string,
    done: PropTypes.bool,
  }),
  onDone: PropTypes.func,
  onRemove: PropTypes.func,
};

export default TodoItem;
