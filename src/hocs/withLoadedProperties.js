import React, { Component } from 'react';

const withLoadedProperties = config => (TargetComponent) => {
  return class WithLoadedProperties extends Component {
    componentDidMount() {
      Object.keys(config)
        .filter(propertyName => this.props[propertyName].length === 0)
        .map(propertyName => config[propertyName])
        .forEach(dispatcherName => this.props[dispatcherName]());
    }
    
    render() {
      return <TargetComponent {...this.props} />;
    }
  }
};

export default withLoadedProperties;
