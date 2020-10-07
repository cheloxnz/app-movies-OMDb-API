import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Home from './pages/Home';
import Results from './pages/results/index';
import MovieDetail from './pages/MovieDetail/index';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/results' component={Results} />
        <Route exact path='/movie/:id' component={MovieDetail} />
      </div>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;

