import { QueryClient, QueryClientProvider } from 'react-query';
import { AppRouter } from './Router';
import { DashboardProvider } from './contexts/DashboardContext';
import { ModalProvider } from './contexts/ModalContext';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <DashboardProvider>
        <ModalProvider>
          <AppRouter />
        </ModalProvider>
      </DashboardProvider>
    </QueryClientProvider>
  );
}

export default App;
