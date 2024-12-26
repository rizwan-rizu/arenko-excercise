import { Box, Typography, Button } from "@mui/material";
import { Component, ReactNode, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: "",
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error Boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box height={"100vh"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Box p={3} textAlign={"center"}>
            <Typography variant="h5">Something went wrong.</Typography>
            <Typography py={1} variant="body2">{this.state.errorMessage}</Typography>
            <Button variant="contained" onClick={() => window.location.reload()}>Reload</Button>
          </Box>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
