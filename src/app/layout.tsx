import '@mantine/core/styles.css';
import { ColorSchemeScript } from '@mantine/core';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { GlobalNavigation } from '@/shared/components/features/GlobalNavigation';
import { AuthProvider } from '@/shared/components/hooks/auth';
import { AxiosProvider } from '@/shared/lib/axios';
import { ThemeProvider } from '@/shared/lib/mantine/ThemeProvider';
import { RecoilRoot } from '@/shared/lib/recoil/RecoilRoot';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GitHub Monster',
  description: "Let's battle with your GitHub account!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <RecoilRoot>
          <AxiosProvider>
            <AuthProvider>
              <ThemeProvider>
                <GlobalNavigation>{children}</GlobalNavigation>
              </ThemeProvider>
            </AuthProvider>
          </AxiosProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
