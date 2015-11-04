'use strict';

var React = require('react'),
    ClassNames = require('../utils/ClassNames'),
    classSet = require('classnames');

module.exports = React.createClass({
    displayName: 'DatePickerHeaderDay',

    

    getInitialState: function() {
      return {
        classes: {
          'e-picker-header-day-text': true
        },
        day: null
      };
    },

    componentDidMount: function () {
      var classes = this.state.classes;

      classes = ClassNames(classes, this.props.classes);

      this.setState({
        classes: classSet(classes),
        day: this.props.day
      });
    },

    render: function () {
      var self = this;
      return (
        <div className={self.state.classes}>
          {self.state.day}
        </div>
      );
    }
});
