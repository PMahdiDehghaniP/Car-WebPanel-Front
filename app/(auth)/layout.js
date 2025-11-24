import AuthProvider from './AuthProvider';

export default function AuthLayout({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
