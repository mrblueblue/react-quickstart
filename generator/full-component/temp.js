import React, {Component, PropTypes} from 'react';

export default class <%= upCaseName %> extends Component {

  static propTypes = {
    // initialCount: PropTypes.number.isRequired
  }

  state = {

  }

  componentWillMount(){
    console.log('<%= upCaseName %> will mount!');
  }

  componentDidMount(){
    console.log('<%= upCaseName %> has mounted');
  }

  render(){
    <div>
      <p> I am the <%= upCaseName %> Component</p>
    <div>
  }

  componentWillUnmount(){
    console.log('<%= upCaseName %> has unmounted');
  }
};
