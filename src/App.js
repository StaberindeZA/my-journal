import React from 'react';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// React Router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Components
import EntryContainer from './comp/EntryContainer';
import Dashboard from './comp/Dashboard';



function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Dashboard} />
        <Route path='/entry' component={EntryContainer} />
      </div>
    </Router>
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
