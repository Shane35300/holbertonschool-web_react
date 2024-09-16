import React, { Component } from 'react';

function WithLogging(WrappedComponent) {
  class WithLogging extends Component {
    componentDidMount() {
      const componentName = WrappedComponent.name || 'Component';
      console.log(`Component ${componentName} is mounted`);
    }

    componentWillUnmount() {
      const componentName = WrappedComponent.name || 'Component';
      console.log(`Component ${componentName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  // Définir un nom d'affichage personnalisé pour le HOC
  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithLogging.displayName = `WithLogging(${wrappedComponentName})`;

  return WithLogging;
}

export default WithLogging;
