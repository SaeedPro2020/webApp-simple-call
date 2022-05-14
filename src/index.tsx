import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { client } from './api/Apolorepo';
import { ApolloProvider } from "@apollo/client";
import GlobalStyles  from './Global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
