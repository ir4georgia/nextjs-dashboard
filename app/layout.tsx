import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Script from 'next/script'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acme Dashboard',
  description: 'Michael is learning NextJS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${inter.className} antialiased`}>{children}
      
      <Script
          src="tro-event-listeners.js"
          strategy="beforeInteractive"
          />
      <Script
          src="uc_init.js"
          strategy="beforeInteractive"
          />
      <Script
          src="https://www.turnerdigitalads.com/UserConsent/userconsent-iab-4.1.4.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://i.cdn.turner.com/ads/qa/adfuel/ais/3.0/nba3-ais.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://i.cdn.turner.com/ads/qa/adfuel/adfuel-3.0.47.js"
          strategy="beforeInteractive"
        />

      </body>
    </html>
  );
}
