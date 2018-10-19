import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Greeting from './components/greeting';
import Assessment from './components/assessment';
import Review from './components/review';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Greeting} />
    <Route path="participate/:id" component={Assessment} />
    <Route path="participation/:id" component={Review} />
  </Route>
);
