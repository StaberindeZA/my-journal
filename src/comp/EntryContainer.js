import React from 'react';
import { connect } from 'react-redux';
import { modifyEntry } from '../redux/actions';

const Entry = (props) => (
  <div>This is the Entry
    <form onSubmit={props.submit}>
      <label>
        Subject:
        <input type="text" name="subject" onChange={props.subjectChange} />
      </label>
      <label>
        Journal Entry:
        <textarea onChange={props.entryChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
);

class EntryContainer extends React.Component {
  state = {
    subject: '',
    entry: '',
  }

  onSubjectChange = (event) => {
    this.setState({subject: event.target.value});
    console.log(this.state.subject);
  }

  onEntryChange = (event) => {
    this.setState({entry: event.target.value});
    console.log(this.state.entry);
  }

  onSubmit = (event) => {
    console.log("Submit got pressed");
    this.props.modifyEntry('4321', 'Sample', 'Sample entry here');
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Entry 
          subjectChange={this.onSubjectChange} 
          entryChange={this.onEntryChange}
          submit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToEntryProps = (state) => {
  console.log("Store: ", state);
  return {
    id: state.id
  }
};

export default connect(
  mapStateToEntryProps,
  { modifyEntry }
)(EntryContainer);