import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-muted">
          <div className="mx-auto max-w-md text-center">
            <h1 className="text-3xl font-bold text-foreground">Something went wrong</h1>
            <p className="mt-4 text-muted-foreground">
              An unexpected error occurred. Please try refreshing the page.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => this.setState({ hasError: false })}
                className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:brightness-110"
              >
                Try again
              </button>
              <Link
                to="/"
                onClick={() => this.setState({ hasError: false })}
                className="text-sm font-medium text-accent underline underline-offset-4 hover:text-accent/80"
              >
                Return home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
