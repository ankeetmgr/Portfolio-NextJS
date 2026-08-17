import './globals.css';

export const metadata = {
  title: 'Ankit Thapa | Full-Stack Developer',
  description: 'Portfolio of Ankit Thapa, Full-Stack Developer.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
