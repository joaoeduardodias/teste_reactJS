import type { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
import Swal from 'sweetalert2';
import { queryClient } from '../services/queryClient';
import { GlobalStyle } from '../styles/globals';

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
  didOpen: toast => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

const MyApp = function ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
