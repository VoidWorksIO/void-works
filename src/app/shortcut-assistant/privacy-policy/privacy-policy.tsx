import React from 'react'


function PrivacyPolicy(): React.ReactNode {
  return (
    <section id="privacy-policy" className="container sm:py-16">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Privacy Policy
      </h2>
      <div className="shadow-md rounded-lg px-4 sm:px-8 md:px-16 lg:px-32">
        <div>
          <div className="sqs-html-content">

            <p className="mb-4 font-bold">
              Privacy Policy for Shortcut Assistant
            </p>

            <h3 className="font-bold text-lg mb-2">
              Introduction
            </h3>
            <p className="mb-4">
              Welcome to the Privacy Policy for Shortcut Assistant, a Chrome extension designed to enhance your browsing experience. This policy outlines how we handle your personal information and your privacy rights. It covers our use of Google Analytics for anonymous usage statistics, a proxy service for AI features and authentication, Google sign-in, Sentry (or equivalent) for error and performance monitoring, and the optional use of your own OpenAI API key.
            </p>

            <h3 className="font-bold text-lg mb-2">
              Data Collection Summary
            </h3>
            <h4 className="font-semibold mb-2">Overview</h4>
            <p className="mb-4">
              Shortcut Assistant sends certain information to third-party services so we can provide AI features, authenticate users, understand how the extension is used, and maintain reliability. The sections below describe what is collected, why, and where it goes.
            </p>

            <h4 className="font-semibold text-lg mb-2">Google Analytics</h4>
            <p className="mb-4">
              We use <strong>Google Analytics 4</strong> (Measurement Protocol) to collect <strong>anonymous usage statistics</strong> about how the extension is used.
            </p>
            <p className="font-bold mb-2">What we collect</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>
                A randomly generated <strong>client identifier</strong> stored in your browser (Chrome synced storage), used to distinguish installations without identifying you by name.
              </li>
              <li>
                A <strong>session identifier</strong> stored for the current browser session (refreshed after periods of inactivity).
              </li>
              <li>The <strong>extension version</strong>.</li>
              <li>
                <strong>Event names</strong> when you use certain features, for example:
                <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                  <li>Opening the extension popup</li>
                  <li>Using keyboard shortcuts (e.g. changing story state, iteration, or estimate)</li>
                  <li>Using the omnibox shortcut (<code className="text-sm">sc</code>)</li>
                </ul>
              </li>
              <li>Optional event parameters (e.g. which keyboard shortcut was used).</li>
            </ul>
            <p className="font-bold mb-2">What we do not intend to collect via Analytics</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Story titles, descriptions, notes, or other Shortcut content</li>
              <li>Your name, email, or Shortcut account details</li>
            </ul>
            <p className="font-bold mb-2">Why we use it</p>
            <p className="mb-4">To understand which features are used and to improve the extension.</p>
            <p className="font-bold mb-2">Where it is sent</p>
            <p className="mb-4">
              To Google (<code className="text-sm">google-analytics.com</code>), subject to{' '}
              <a href="https://policies.google.com/privacy" className="text-blue-500 hover:underline" rel="noopener noreferrer" target="_blank">
                Google&apos;s privacy policy
              </a>
              .
            </p>
            <p className="font-bold mb-2">Legal basis / consent</p>
            <p className="mb-6">
              By installing and using Shortcut Assistant, you consent to this anonymous usage collection, or you may discontinue use of the extension if you do not agree.
            </p>

            <h4 className="font-semibold text-lg mb-2">Our proxy service</h4>
            <p className="mb-4">
              When you use AI features or sign in through the extension, data is sent to a <strong>proxy server operated by us</strong> (hosted at our configured backend URL).
            </p>
            <p className="font-bold mb-2">What we collect</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>
                <strong>AI requests:</strong> Story or prompt text you submit for analysis, an anonymous <strong>instance identifier</strong> (the same client identifier used for analytics), and the type of analysis requested.
              </li>
              <li>
                <strong>Account registration:</strong> Your <strong>Google authentication token</strong> and <strong>Shortcut API token</strong> when you connect your account, so we can authorize requests on your behalf.
              </li>
              <li>
                <strong>Label suggestions:</strong> The <strong>Shortcut story ID</strong> when you use label-related features.
              </li>
            </ul>
            <p className="font-bold mb-2">Why we use it</p>
            <p className="mb-4">
              To provide AI-powered story analysis and related features without requiring you to configure your own API keys, and to authenticate registered users. When you do not provide your own API key, story descriptions are forwarded from our proxy to OpenAI for processing.
            </p>
            <p className="font-bold mb-2">Retention</p>
            <p className="mb-4">
              We do <strong>not</strong> permanently store story content for AI processing. <strong>Request logs</strong> may be retained for up to <strong>7 days</strong> for abuse prevention, security, and operational monitoring.
            </p>
            <p className="font-bold mb-2">Optional API key</p>
            <p className="mb-4">
              If you provide your own OpenAI API key, it is stored <strong>only on your device</strong> and is not sent to our proxy for those requests (when that path is used).
            </p>
            <p className="font-bold mb-2">Data security</p>
            <p className="mb-6">
              We implement appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure, or destruction of data. This includes secure data handling by our proxy server.
            </p>

            <h4 className="font-semibold text-lg mb-2">Google sign-in (OAuth)</h4>
            <p className="mb-4">
              If you sign in with Google, the extension uses <strong>Chrome&apos;s identity API</strong> to obtain a Google authentication token (OpenID scope).
            </p>
            <p className="font-bold mb-2">What we collect</p>
            <ul className="list-disc list-inside mb-4">
              <li>A Google auth token obtained through Google&apos;s OAuth flow.</li>
            </ul>
            <p className="font-bold mb-2">Why we use it</p>
            <p className="mb-4">To register and authenticate your account with our proxy service.</p>
            <p className="font-bold mb-2">Where it is sent</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>To <strong>Google</strong> as part of the sign-in flow.</li>
              <li>To <strong>our proxy server</strong> when you complete registration (together with your Shortcut API token).</li>
            </ul>
            <p className="mb-6">
              Google&apos;s handling of your data is governed by{' '}
              <a href="https://policies.google.com/privacy" className="text-blue-500 hover:underline" rel="noopener noreferrer" target="_blank">
                Google&apos;s privacy policy
              </a>
              .
            </p>

            <h4 className="font-semibold text-lg mb-2">Error and performance monitoring (Sentry)</h4>
            <p className="mb-4">
              We use <strong>Sentry</strong> (or equivalent error monitoring on our backend) to collect <strong>anonymous error and performance data</strong> to diagnose crashes, failures, and stability issues. Error reporting may occur on our <strong>proxy or backend services</strong> rather than only inside the browser extension.
            </p>
            <p className="font-bold mb-2">What may be collected</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Error messages, stack traces, and technical metadata needed to debug issues.</li>
              <li>Performance-related signals where enabled.</li>
            </ul>
            <p className="font-bold mb-2">What we aim to avoid</p>
            <p className="mb-4">
              Intentionally collecting story content or personal identifiers in error reports; however, errors could theoretically include snippets of data present in memory at the time of a failure.
            </p>
            <p className="font-bold mb-2">Why we use it</p>
            <p className="mb-4">To identify and fix bugs and improve reliability.</p>
            <p className="font-bold mb-2">Where it is sent</p>
            <p className="mb-6">
              To <strong>Sentry</strong> (or our monitored backend), subject to{' '}
              <a href="https://sentry.io/privacy/" className="text-blue-500 hover:underline" rel="noopener noreferrer" target="_blank">
                Sentry&apos;s privacy policy
              </a>
              .
            </p>

            <h4 className="font-semibold text-lg mb-2">Summary table</h4>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-border text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-3 py-2 text-left font-bold">Service</th>
                    <th className="border border-border px-3 py-2 text-left font-bold">Data types</th>
                    <th className="border border-border px-3 py-2 text-left font-bold">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-3 py-2">Google Analytics</td>
                    <td className="border border-border px-3 py-2">Anonymous IDs, extension version, feature usage events</td>
                    <td className="border border-border px-3 py-2">Product analytics</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2">Our proxy</td>
                    <td className="border border-border px-3 py-2">Prompts/story text, instance ID, tokens, story IDs</td>
                    <td className="border border-border px-3 py-2">AI features, auth, labels</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2">Google OAuth</td>
                    <td className="border border-border px-3 py-2">Auth token</td>
                    <td className="border border-border px-3 py-2">Sign-in</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2">Sentry</td>
                    <td className="border border-border px-3 py-2">Errors / performance (anonymous)</td>
                    <td className="border border-border px-3 py-2">Reliability</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-bold text-lg mb-2">
              User Consent
            </h3>
            <p className="mb-4">
              By using Shortcut Assistant, you consent to: anonymous usage collection via Google Analytics; the optional provision of your own OpenAI API key stored locally on your device; forwarding of story descriptions and related data to our proxy server (when you use AI features or sign in without using your own API key for those requests); transmission of Google and Shortcut tokens when you register or authenticate; and anonymous error and performance data collection via Sentry or equivalent monitoring on our backend. If you do not agree, please discontinue use of the extension.
            </p>

            <h3 className="font-bold text-lg mb-2">
              Changes to This Privacy Policy
            </h3>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h3 className="font-bold text-lg mb-2">
              Contact Us
            </h3>
            <p className="mb-4">
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at{' '}
              <a href="mailto:privacy@jensastrup.io" className="text-blue-500 hover:underline">
                privacy@jensastrup.io
              </a>
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy
