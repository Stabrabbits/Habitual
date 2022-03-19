import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';

import FeedContainer from './containers/FeedContainer.jsx';
import LoginContainer from './containers/LoginContainer.jsx';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <LoginContainer/> } />
        <Route exact path='/feed' element={ <FeedContainer/> } />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <Provider store = { store }>
    <App/>
  </Provider>, 
  document.getElementById('root')
);
