'use strict';

var React = require('react'),
    ClassNames = require('../utils/ClassNames'),
    classSet = require('classnames');

module.exports = React.createClass({
    displayName: 'Icon',

    

    getInitialState: function() {
      return {
        classes: []
      };
    },

    renderChildren() {
      var self = this,
          classes = ClassNames([], self.props.classes);

      if (self.props.name) {
        classes["e-icon-"+self.props.name] = true;
      }

      if (self.props.name) {
        return (
            <i className={classSet(classes)} onClick={self.props.onClick} />
        );
      }

      return null;
    },

    render: function () {
      var self = this;
      return self.renderChildren();
    }
});
