import {useCallback} from 'react';
import PropTypes from 'prop-types';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function TodoForm(props) {
  const {value, onChange, onSubmit} = props;

  const changeValue = useCallback((e) => {
    onChange(e.targetvalue || '');
  }, [onChange]);

  const submitNoReload = useCallback((e) => {
    e.preventDefault();
    onSubmit(e);
  }, [onSubmit]);

  return (
    <Form onSubmit={submitNoReload}>
      <InputGroup className="mb-3">
        <FormControl value={value} onChange={changeValue} placeholder="Your work" />
        <InputGroup.Append>
          <Button type="submit" variant="primary">
            Add Todo
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
}

TodoForm.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default TodoForm;