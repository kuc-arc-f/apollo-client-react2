import React, { useRef } from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_TODO } from '../../graphql/todo';

function RemoveTodo() {
//  let input;
  const [ RemoveTodo , { data }] = useMutation(DELETE_TODO);

  return (
    <div>
      <h3>Delete</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          RemoveTodo({ variables: { id: 10 } });
        }}
      >
        <button type="submit">DeleteTodo</button>
      </form>
    </div>
  );
}
export default RemoveTodo;
