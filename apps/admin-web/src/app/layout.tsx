import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Madagasik Hanina - Admin',
  description: 'Admin dashboard for Madagasik Hanina',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
