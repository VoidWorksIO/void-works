import Script from 'next/script'
import React from 'react'


function Widget(): React.ReactNode {
  return (
    <>
      <Script id="productlane-inline">
        {`;((w)=>{const P=(w.Productlane={queue:{}});["set","open","close","toggle","on","off","init"].forEach(m=>{P[m]=(n=>function(){P.queue[n]={args:arguments}})(m)})})(window);

      Productlane.init({
      widgetKey: "${process.env.NEXT_PUBLIC_PRODUCTLANE_KEY}"
    })`}
      </Script>
      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://widget.productlane.com/latest.productlane-widget.min.js"
      />
    </>
  )
}

export { Widget }
