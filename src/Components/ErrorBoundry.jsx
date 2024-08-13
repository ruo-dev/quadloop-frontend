import { Component } from "react";

class ErrorBoundary extends Component {
     state = {
          hasError: false,
     };

     // public static getDerivedStateFromError(err: Error): State {
     // 	// Update state so the next render will show the fallback UI.
     // 	return { hasError: true };
     // }

     static getDerivedStateFromError() {
          // Update state so the next render will show the fallback UI.
          return { hasError: true };
     }

     componentDidCatch(error, errorInfo) {
          console.error("Uncaught error:", error, errorInfo);
     }

     render() {
          if (this.state.hasError) {
               return <h1>Sorry.. there was an error</h1>;
          }

          return this.props.children;
     }
}

export default ErrorBoundary;
