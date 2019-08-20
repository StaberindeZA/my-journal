import React from 'react';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// React Router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Components
import EntryContainer from './comp/EntryContainer';
import Dashboard from './comp/Dashboard';
import NoMatch from './comp/NoMatch';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => (
          <Redirect
            to='/dashboard'
          />
        )} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/entry' component={EntryContainer} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
    // <div>
    //   <EntryContainer />
    //   <Dashboard />
    // </div>
  );
}

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default WrappedApp;
