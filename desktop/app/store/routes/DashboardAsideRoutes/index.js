/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch, Route } from 'react-router';
/* ------------------------- External Dependencies -------------------------- */
import { fromAside } from 'workshop/zones'

export default () => (
  <div>
    <Route path="/" component={fromAside.All} />
  </div>);
