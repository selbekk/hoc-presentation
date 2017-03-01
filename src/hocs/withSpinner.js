import React, { Component } from 'react';

import Spinner from '../components/Spinner';

const withSpinner = (TargetComponent, propName) => {
  return class extends Component {
    isEmpty() {
      const prop = this.props[propName];
      return (prop instanceof Array && prop.length === 0);
    }
    render() {
      if (this.isEmpty()) {
        console.log('spinner');
        return (
          <Spinner />
        );
      }
      return (
        <TargetComponent {...this.props} />
      );
    }
  }
}

export default withSpinner;
