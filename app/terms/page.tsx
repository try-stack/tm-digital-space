import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for TM Digital Space — the rules and conditions for using our website and services.',
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  const updated = '4 March 2026';
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-gray-800 dark:text-gray-200">
      <div className="max-w-3xl mx-auto px-6 py-20">

        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#006eff] hover:underline mb-10">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-extrabold mb-2 text-gray-900 dark:text-white">Terms of Service</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">Last updated: {updated}</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold mb-2">1. Acceptance of Terms</h2>
            <p>By accessing or using the TM Digital Space website (&ldquo;Site&rdquo;) or engaging our services, you agree to be bound by these Terms. If you do not agree, please do not use our Site or services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">2. Services</h2>
            <p>TM Digital Space provides web design, branding, business email setup, local SEO, and related digital services to South African businesses. Specific project terms are outlined in individual proposals and agreements.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">3. Payment & Project Terms</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>A 50% deposit is required before project commencement.</li>
              <li>The remaining balance is due upon project completion before final delivery.</li>
              <li>Invoices not paid within 14 days may result in work being paused.</li>
              <li>All prices are quoted in South African Rand (ZAR) unless stated otherwise.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">4. Client Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide all required content (text, images, logos) in a timely manner.</li>
              <li>Review and approve work within agreed timeframes.</li>
              <li>Ensure all content provided does not infringe third-party intellectual property rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">5. Intellectual Property</h2>
            <p>Upon full payment, the client receives full ownership of the final deliverables. TM Digital Space retains the right to display completed work in our portfolio unless otherwise agreed in writing.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">6. Revisions</h2>
            <p>Each project includes a reasonable number of revision rounds as specified in the proposal. Additional revisions beyond the agreed scope will be quoted separately.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">7. Disclaimer of Warranties</h2>
            <p>The Site and services are provided &ldquo;as is&rdquo;. We make no warranties regarding uninterrupted operation, error-free content, or specific business results from digital marketing efforts.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">8. Limitation of Liability</h2>
            <p>TM Digital Space shall not be liable for any indirect, incidental, or consequential damages arising from use of our services. Our total liability shall not exceed the amount paid for the specific project in dispute.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">9. Governing Law</h2>
            <p>These Terms are governed by the laws of the Republic of South Africa. Disputes shall be resolved in the courts of the Western Cape.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">10. Contact</h2>
            <p>Questions? Email <a href="mailto:admin@tm-digital.co.za" className="text-[#006eff] hover:underline">admin@tm-digital.co.za</a>.</p>
          </section>

        </div>
      </div>
    </main>
  );
}
