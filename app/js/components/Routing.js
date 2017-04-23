import React from 'react';
import { Route, IndexRoute, withRouter, Link } from 'react-router'

import App from '../containers/AppContainer'
import Sql from '../containers/Sql'
import NotFound from '../components/NotFound'

export default (
  <Route path="/" component={withRouter(App)}>
    <Route path="/sql" component={withRouter(Sql)} />
    <Route path="*" component={NotFound} />
  </Route>
)
