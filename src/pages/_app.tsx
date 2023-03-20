import { AppThemeProvider } from '@/context/ThemeContext';
import { GlobalStyles } from '@/styles/golbal-styles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppThemeProvider>
            <Component {...pageProps} />
            <GlobalStyles />
        </AppThemeProvider>
    );
}
