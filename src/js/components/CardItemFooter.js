'use strict';

var React = require('react/addons'),
    ClassNames = require('../utils/ClassNames'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'CardItemFooter',

    mixins: [ClassNames],

    getInitialState: function() {
      return {
        classes: {
          'card-suplimentary-actions': true,
          'clearfix': true
        }
      };
    },

    componentDidMount: function () {
      var classes = this.state.classes || [];

      classes = ClassNames(classes, this.props.classes);

      this.setState({
        classes: classes
      });
    },

    render: function () {
      var self = this,
          classes = classSet(self.state.classes);

      return (
        <div className={classes}>
          {this.props.children}
        </div>
      );
    }
});
