import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Detail from '../pages/Detail';

export default function Routes() {
  return (
    <Switch>
      <BrowserRouter>
        <Route path="/" exact component={Dashboard} />
        <Route path="/detail/:id" component={Detail} />
      </BrowserRouter>
    </Switch>
  );
}
