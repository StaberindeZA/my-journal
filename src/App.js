import React from 'react';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// Components
import EntryContainer from './comp/EntryContainer';



function App() {
  return (
    <EntryContainer />
  );
}

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default WrappedApp;
