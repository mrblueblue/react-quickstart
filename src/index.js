import './styles/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from 'components/HelloWorld';

const App = () => <HelloWorld/>

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
