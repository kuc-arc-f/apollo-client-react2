import React, { useRef } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_TODO } from '../../graphql/todo';

function UpdateTodo() {
  let input;
  const [UpdateTodo, { data }] = useMutation(UPDATE_TODO);

  return (
    <div>
      <h3>Update</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          UpdateTodo({ variables: { id: 4,  title: input.value } });
console.log(input.value)
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">UpdateTodo</button>
      </form>
    </div>
  );
}
export default UpdateTodo;