import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div style={{ padding: '2rem', color: 'red', backgroundColor: 'black', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 99999, position: 'relative' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Application Error</h2>
          <pre style={{ fontSize: '1rem', maxWidth: '80%', whiteSpace: 'pre-wrap' }}>{this.state.error?.toString()}</pre>
          <button 
            onClick={() => window.location.reload()}
            style={{ marginTop: '2rem', padding: '1rem 2rem', background: 'white', color: 'black', border: 'none', cursor: 'pointer' }}
          >
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
