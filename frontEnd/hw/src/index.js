import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Imported from reacted trouter dom
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './reducers/store'


ReactDOM.render(
  <React.StrictMode>
  {/* Browser router wrapps around the entire react app to allow any element from react router dom to work regardless of the location */}
  <Provider store={store}>
      <BrowserRouter>
            <App />
      </BrowserRouter>
      </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
