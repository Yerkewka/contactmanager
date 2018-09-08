import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }
  /*
  componentWillMount() {
    console.log('Component will Mount');
  }

  componentDidUpdate() {
    console.log('Component did Update');
  }

  componentWillUpdate() {
    console.log('Component will Update');
  }

  componentWillReceiveProps(textProps, textState) {
    console.log('componentWillReceiveProps...');
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
  }
*/
  render() {
    const { title, body } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
