import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Dashboard extends React.Component {

  render() {
    return (
      <div>This is the dashboard.
        <div>
          <Link to='/entry'>Entry</Link>
        </div>
      </div>
    );
  }

}

export default Dashboard;