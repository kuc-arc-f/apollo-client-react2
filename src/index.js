import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
//import App from './App';
import ShowTodo from './component/todos/ShowTodo';
import AddTodo from './component/todos/AddTodo';
import UpdateTodo from './component/todos/UpdateTodo';
import DeleteTodo from './component/todos/DeleteTodo';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useMutation, 
  gql
} from "@apollo/client";
//
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});
const GET_TODOS = gql`
  query {
    todos {
      id
      title
    }
  }
`;

function GetTodos() {
  const { loading, error, data } = useQuery(GET_TODOS)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data.todos.map((item ,index) => (
    <div key={index}>
      <p>ID :  {item.id} , title = {item.title}
      </p>
    </div>
  ));
}

function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <GetTodos />
      <hr />
      <AddTodo />
      <hr />
      <UpdateTodo />
      <hr />
      <DeleteTodo />
      <hr /><br /><br />
    </div>
  );
}

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
/*
client.query({
  query: gql`
  query {
    todos {
      id
      title
    }
  }
  `
}).then(result => console.log(result));
*/
