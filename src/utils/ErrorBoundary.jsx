import React from 'react';

/**
 * ErrorBoundary component for catching WebGL and Three.js errors
 * Provides a fallback UI that matches the app's aesthetic
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            width: '100%',
            height: '100vh',
            background: 'linear-gradient(180deg, #000108 0%, #070A20 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '24px',
            color: 'rgba(255,255,255,0.85)',
            fontFamily: 'system-ui, sans-serif',
            textAlign: 'center',
            padding: '20px',
          }}
        >
          <div
            style={{
              fontSize: '18px',
              fontWeight: '500',
              letterSpacing: '0.05em',
            }}
          >
            WebGL Rendering Error
          </div>
          <div
            style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '400px',
              lineHeight: '1.6',
            }}
          >
            The 3D graphics system encountered an issue. This may happen if WebGL is not
            supported or if there's a GPU problem.
          </div>
          <button
            onClick={this.handleReload}
            style={{
              padding: '12px 32px',
              fontSize: '14px',
              fontWeight: '500',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              background: 'rgba(255, 80, 200, 0.95)',
              color: '#fff',
              border: 'none',
              borderRadius: '999px',
              cursor: 'pointer',
              boxShadow: '0 0 18px rgba(255, 80, 200, 0.25)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 100, 210, 1)';
              e.target.style.boxShadow = '0 0 24px rgba(255, 80, 200, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 80, 200, 0.95)';
              e.target.style.boxShadow = '0 0 18px rgba(255, 80, 200, 0.25)';
            }}
          >
            Reload Page
          </button>
          {this.state.error && (
            <div
              style={{
                fontSize: '11px',
                color: 'rgba(255,255,255,0.4)',
                maxWidth: '500px',
                marginTop: '12px',
                fontFamily: 'monospace',
              }}
            >
              {this.state.error.toString()}
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
