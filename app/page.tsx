export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track API Costs Per{" "}
          <span className="text-[#58a6ff]">Customer &amp; Feature</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Ingest API usage via webhooks or SDK, categorize costs with configurable rules, and get real-time breakdowns with threshold alerts — built for SaaS founders and PMs.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block px-7 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Access — $14/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-7 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#8b949e]">
          <li>✓ Per-customer cost breakdown</li>
          <li>✓ Per-feature &amp; endpoint tracking</li>
          <li>✓ Webhook &amp; SDK ingestion</li>
          <li>✓ Threshold alerts</li>
          <li>✓ Configurable rules</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Single Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$14</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited API events ingested",
              "Customer &amp; feature cost breakdown",
              "Configurable categorization rules",
              "Real-time dashboard",
              "Threshold alerts via email",
              "Webhook + SDK support",
              "CSV export"
            ].map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span dangerouslySetInnerHTML={{ __html: f }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Tracking Now
          </a>
          <p className="mt-4 text-xs text-[#8b949e]">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does API usage get ingested?</h3>
            <p className="text-[#8b949e] text-sm">You can send usage events via our webhook endpoint or integrate the lightweight SDK into your backend. Each event includes the customer ID, feature name, endpoint, and token/cost data.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I set custom cost rules per customer or feature?</h3>
            <p className="text-[#8b949e] text-sm">Yes. The configurable rules engine lets you map endpoints or metadata tags to specific customers or features, assign cost multipliers, and set per-customer or per-feature spending thresholds.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What happens when a threshold is exceeded?</h3>
            <p className="text-[#8b949e] text-sm">You receive an email alert the moment a customer or feature crosses its configured cost threshold. The dashboard also highlights breached thresholds in real time so you can act immediately.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} API Cost Breakdown Tracker. All rights reserved.
      </footer>
    </main>
  );
}
