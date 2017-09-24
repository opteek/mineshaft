/* --------------------------- Interface Globals ---------------------------- */
import 'theme/inject'
import 'theme/stylesheet/app.global.css'
/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
/* ------------------------- Internal Dependencies -------------------------- */
import Providers from 'providers'
import Routes from 'store/routes/EntryRoutes';
/* ---------------------------- Initialization ------------------------------ */
export default function Root({ store, history }) {
  return (
    <Providers store={store} history={history} >
      <Routes />
    </Providers>
  );
}
