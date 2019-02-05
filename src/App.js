import React, { Component } from 'react';
import './App.css';
import GraphiQL from 'graphiql';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GraphiQL fetcher = {graphQLFetcher}/>
      </div>
    );
  }
}

export default App;

function graphQLFetcher(graphQLParams) {
    return fetch("https://zd9mdqlr7d.execute-api.us-east-1.amazonaws.com/stage/graphql", {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(graphQLParams),
    }).then(response => response.json());
  }

