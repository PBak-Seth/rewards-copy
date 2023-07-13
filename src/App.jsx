import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { Landing } from './pages/landing';

const App = () => {
  return (
    <main>
      <ErrorBoundary fallback={<h4 className="error-boundary">Something went wrong</h4>}>
        <QueryClientProvider client={queryClient}>
          <Landing />
        </QueryClientProvider>
      </ErrorBoundary>
    </main>
  );
};

export default App;
