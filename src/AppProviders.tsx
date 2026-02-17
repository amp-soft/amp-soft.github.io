import { ToastProvider } from '@/shared/contexts/ToastContext'
import { ThemeProvider } from '@/shared/contexts/ThemeProvider'
import ToastContainer from '@/shared/components/ui/ToastContainer'

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ThemeProvider>
      <ToastProvider>
        {children}
        <ToastContainer />
      </ToastProvider>
    </ThemeProvider>
  );
};