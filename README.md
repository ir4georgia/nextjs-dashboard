## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

Basic Setup for Ad Fuel

In App layout.tsx

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

tro-event-listeners.js and uc_init.js are in public folder

Ad slots are defined in app/dashboard/page.tsx

Current using a script to queue the registry

<Script id="queue-registry" strategy="lazyOnload">{`
                    AdFuel.addPageLevelTarget('status', 'nba_nextgen')
                    console.log('MP-OPS: Queueing Registry at ' + new Date(Date.now()).toLocaleString());
                    AdFuel.queueRegistry('//i.cdn.turner.com/ads/nba3/nba_homepage.json', {});
                    `}

            </Script>