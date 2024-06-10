import { Component } from "react";

type Props = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

type State = {
  isError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  state = {
    isError: false,
  };

  static getDerivedStateFromError() {
    return { isError: true };
  }

  //   componentDidCatch(_error: Error, _errorInfo: ErrorInfo): void {

  //   }

  render() {
    if (this.state.isError) {
      return this.props.fallback ? (
        this.props.fallback
      ) : (
        <p className="dark:text-slate-300">Oh no! Error</p>
      );
    }

    return this.props.children;
  }
}
