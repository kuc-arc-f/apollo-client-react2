import React, { useRef } from 'react';
import { useQuery } from '@apollo/client';
import { GET_TODO } from '../../graphql/todo';

function ShowTodo() {
  const id = 1;
  const { loading, error, data } = useQuery(GET_TODO ,
    { variables: {id} }
  );
  if (loading) return null;
  if (error) return `Error! ${error}`;  
//console.log(data.todo)
  return (
    <div>
      <h3>Show</h3>
      title: {data.todo.title}
    </div>
  );
}
export default ShowTodo;
