'use strict';

import React from 'react';

class App extends React.Component {
  render(){
    return (
       <div>
        <p>Hello World</p>
      </div>,
    );
  }
}

React.render(
  <App />
  document.getElementById('app')
);
