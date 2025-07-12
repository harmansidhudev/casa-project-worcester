import React from "react";

export default function Privacy() {
  return (
    <section id="privacy" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Privacy Policy</h2>
          <p className="text-lg text-gray-700">
            Last updated: January 15, 2024
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Introduction</h3>
            <p className="text-gray-700 mb-6">
              CASA Project Worcester County ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-4">Information We Collect</h3>
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Personal Information</h4>
                <p className="text-gray-700">
                  We may collect personal information that you voluntarily provide to us, such as:
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-4 mt-2">
                  <li>Name and contact information</li>
                  <li>Email address and phone number</li>
                  <li>Address and location information</li>
                  <li>Volunteer application information</li>
                  <li>Donation information</li>
                  <li>Event registration details</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Automatically Collected Information</h4>
                <p className="text-gray-700">
                  When you visit our website, we may automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-4 mt-2">
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website information</li>
                  <li>Device and operating system information</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-blue-900 mb-4">How We Use Your Information</h3>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 mb-6">
              <li>Provide and maintain our services</li>
              <li>Process volunteer applications and donations</li>
              <li>Send newsletters and updates</li>
              <li>Organize and manage events</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-4">Information Sharing and Disclosure</h3>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 mb-6">
              <li>With your explicit consent</li>
              <li>To comply with legal requirements</li>
              <li>To protect our rights and safety</li>
              <li>With trusted service providers who assist in our operations</li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-4">Data Security</h3>
            <p className="text-gray-700 mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-4">Cookies and Tracking Technologies</h3>
            <p className="text-gray-700 mb-6">
              We may use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-4">Your Rights and Choices</h3>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 mb-6">
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request information about how we process your data</li>
            </ul>

            <h3 className="text-xl font-bold text-blue-900 mb-4">Children's Privacy</h3>
            <p className="text-gray-700 mb-6">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-4">Changes to This Privacy Policy</h3>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h3 className="text-xl font-bold text-blue-900 mb-4">Contact Us</h3>
            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700">
                <strong>CASA Project Worcester County</strong><br />
                Email: info@thecasaproject.org<br />
                Phone: 508-757-9877<br />
                Address: [Your Address Here]
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">
            Contact Us with Privacy Questions →
          </a>
        </div>
      </div>
    </section>
  );
} 