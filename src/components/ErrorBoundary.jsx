import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };  // Update state to indicate an error has occurred
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // Customize the fallback UI
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details>
            <summary>Click for more info</summary>
            {this.state.error && <p>{this.state.error.toString()}</p>}
            {this.state.errorInfo && <pre>{this.state.errorInfo.componentStack}</pre>}
          </details>
        </div>
      );
    }

    return this.props.children;  // Render children if no error
  }
}

export default ErrorBoundary;
