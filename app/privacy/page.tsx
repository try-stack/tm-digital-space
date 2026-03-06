import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for TM Digital Space — how we collect, use and protect your information.',
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const updated = '4 March 2026';
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-gray-800 dark:text-gray-200">
      <div className="max-w-3xl mx-auto px-6 py-20">

        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#006eff] hover:underline mb-10">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-extrabold mb-2 text-gray-900 dark:text-white">Privacy Policy</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">Last updated: {updated}</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold mb-2">1. Who We Are</h2>
            <p>TM Digital Space (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a digital agency based in Cape Town, South Africa. We provide web design, branding, business email setup, and local SEO services. Our contact details: <a href="mailto:admin@tm-digital.co.za" className="text-[#006eff] hover:underline">admin@tm-digital.co.za</a> | <a href="tel:+2762529952" className="text-[#006eff] hover:underline">+27 62 529 952</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Contact form data:</strong> name, email address, phone number, service interest, and message.</li>
              <li><strong>Usage data:</strong> pages visited, time on site, browser/device type (via analytics, if enabled).</li>
              <li><strong>Cookies:</strong> theme preference (dark/light mode) stored in localStorage — no tracking cookies are set by default.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To respond to enquiries and deliver requested services.</li>
              <li>To send project-related communications.</li>
              <li>To improve our website and services (aggregate analytics only).</li>
              <li>We do <strong>not</strong> sell, rent, or share your personal data with third parties for marketing purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">4. Third-Party Services</h2>
            <p>We use <strong>EmailJS</strong> to process contact form submissions. Your form data is transmitted securely to EmailJS servers to deliver your message to us. Please review <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-[#006eff] hover:underline">EmailJS&rsquo;s Privacy Policy</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">5. Data Retention</h2>
            <p>Contact enquiries are retained for up to 24 months for business records, then securely deleted.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">6. Your Rights (POPIA)</h2>
            <p>Under the Protection of Personal Information Act (POPIA) you have the right to access, correct, or delete your personal information. Contact us at <a href="mailto:admin@tm-digital.co.za" className="text-[#006eff] hover:underline">admin@tm-digital.co.za</a> to exercise these rights.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">7. Security</h2>
            <p>We use HTTPS encryption and industry-standard practices to protect your data. No method of transmission over the internet is 100% secure; we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">8. Changes to This Policy</h2>
            <p>We may update this policy from time to time. The &ldquo;Last updated&rdquo; date will reflect any changes. Continued use of the site constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">9. Contact Us</h2>
            <p>Questions about this policy? Email <a href="mailto:admin@tm-digital.co.za" className="text-[#006eff] hover:underline">admin@tm-digital.co.za</a>.</p>
          </section>

        </div>
      </div>
    </main>
  );
}
