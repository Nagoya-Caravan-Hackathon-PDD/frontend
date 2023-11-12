import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { AuthProvider } from '@/shared/components/hooks/auth/AuthContext';
import { theme } from '@/shared/lib/mantine/theme';
import { RecoilRoot } from '@/shared/lib/recoil/RecoilRoot';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GitHub Go',
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
          <AuthProvider>
            <MantineProvider theme={theme}>{children}</MantineProvider>
          </AuthProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
