import React from 'react';
import ReactDOM from 'react-dom';


module.exports = React.createClass({
  render: function() {
    return (
      <Second />
    )
  }
});

class Second extends React.Component {
  render() {
    return (<h1>hello second</h1>);
  }
}
