import { CSSProperties, FC, useState, useEffect } from 'react'
import Script from 'next/script'


export default function Page() {

    return (
        <>
            {/* <div className="md:container md:mx-auto border-solid border-2 border-black"> */}
                <h2 className="text-2xl font-bold">NBA Home Page</h2>
                <div id="AdFuelVersion" className='text-sm mx-auto text-center'></div>
                <div id="UCVersion" className='text-sm mx-auto text-center'></div>
                <div className='inline-block grid-rows-1'>
                    <div id="ad_bnr_atf_01" className='m-auto pt-1 content-center'></div>
                </div>
                <div className="md:container md:mx-auto space-y-1.5 border-solid border-2">
                    <div className="min-w-10 h-24 border-solid border-2 border-black">Content</div>
                    <div id="ad_nat_atf_01"></div>
                    <div id="ad_nfs_btf_01"></div>
                    <div id="ad_bnr_btf_01"></div>
                    <div id="ad_nat_atf_02"></div>
                    <div id="ad_bnr_atf_02"></div>
                </div>
                
            {/* </div> */}
            <Script id="queue-registry" strategy="lazyOnload">{`
                    AdFuel.addPageLevelTarget('status', 'nba_nextgen')
                    console.log('MP-OPS: Queueing Registry at ' + new Date(Date.now()).toLocaleString());
                    AdFuel.queueRegistry('//i.cdn.turner.com/ads/nba3/nba_homepage.json', {});
                    `}

            </Script>
        </>
    );
}