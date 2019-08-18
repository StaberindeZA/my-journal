import React from 'react';

class LoginInput extends React.Component {
  state = {
    value: '',
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit pressed', this.state.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            User:
            <input type="text" value={this.state.value} onChange={this.onChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export { LoginInput };