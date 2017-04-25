import React, { Component } from 'react';
import Spinner from '../components/Spinner';

const withSpinner = propName => (TargetComponent) => {
  return class extends Component {
    isEmpty(prop) {
      return (prop instanceof Array && prop.length === 0)
        || (prop instanceof Object && Object.keys(prop).length === 0)
        || (prop === undefined || prop === null);
    }

    render() {
      return this.isEmpty(this.props[propName])
        ? <Spinner />
        : <TargetComponent {...this.props} />;
    }
  }
}

export default withSpinner;
