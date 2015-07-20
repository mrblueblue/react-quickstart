import './styles/styles.scss';

import React from 'react';
import HelloWorld from './components/HelloWorld';

export class App extends React.Component {
  render(){
    return <HelloWorld/>;
  }
}

React.render(
  <App />,
  document.getElementById('app')
);
