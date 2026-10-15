import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="double-bezel-outer max-w-md w-full">
            <div className="double-bezel-inner p-8 bg-neutral-900">
              <h2 className="font-heading text-xl font-bold text-amber-400 mb-2">
                Syndicate Terminal Interrupted
              </h2>
              <p className="text-xs text-neutral-400 font-mono mb-4">
                {this.state.error?.message || 'An unexpected glitch occurred.'}
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2.5 rounded-full bg-amber-400 text-black font-semibold text-xs tracking-wider"
              >
                Reload Syndicate Terminal
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
