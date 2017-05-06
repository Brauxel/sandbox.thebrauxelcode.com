import React from 'react';
import ReactDOM from 'react-dom';


module.exports = React.createClass({
  render: function() {
    return (
      <App />
    )
  }
});

class App extends React.Component {
  render() {
    return (<h1>hello2</h1>);
  }
}
