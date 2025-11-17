import ApolloClientProvider from '@/providers/ApolloClientProvider';
import SessionControllerProvider from '@/providers/SessionControllerProvider';

export default function DashboardLayout({ children }) {
  return (
    <SessionControllerProvider>
      <ApolloClientProvider>{children}</ApolloClientProvider>
    </SessionControllerProvider>
  );
}
