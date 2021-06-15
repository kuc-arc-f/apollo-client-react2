import React, { useRef } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TODO } from '../../graphql/todo';

function AddTodo() {
  let input;
  const [AddTodo, { data }] = useMutation(ADD_TODO);

  return (
    <div>
      <h3>Add</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          AddTodo({ variables: { title: input.value } });
console.log(input.value)
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
export default AddTodo;