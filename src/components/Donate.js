import React from "react";

export default function Donate() {
  return (
    <section id="donate" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Support Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Your donation directly supports our ability to recruit, train, and support CASA volunteers who advocate for children in foster care. Every contribution makes a real difference in a child's life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">How Your Donation Helps</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">$50</span>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Training Materials</h4>
                  <p className="text-gray-700">Provides comprehensive training materials for one new CASA volunteer.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">$100</span>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Background Screening</h4>
                  <p className="text-gray-700">Covers the cost of background checks and screening for volunteer safety.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">$250</span>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Volunteer Support</h4>
                  <p className="text-gray-700">Provides ongoing support and supervision for a volunteer for one year.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold">$500</span>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Complete Training</h4>
                  <p className="text-gray-700">Fully funds the training and support for one new CASA volunteer.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Your Impact</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Last year, your donations helped serve 500+ children</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>100% of donations go directly to program services</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Every $1 invested returns $4 in social value</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span>Children with CASA volunteers are more likely to find permanent homes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">One-Time Gift</h3>
            <p className="text-gray-600 mb-4">Make a single donation to support our mission immediately.</p>
            <a href="#contact" className="inline-block px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Donate Now</a>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Monthly Support</h3>
            <p className="text-gray-600 mb-4">Become a monthly donor and provide consistent support for children.</p>
            <a href="#contact" className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Join Monthly</a>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-100">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Legacy Giving</h3>
            <p className="text-gray-600 mb-4">Include CASA in your estate planning to create lasting impact.</p>
            <a href="#contact" className="inline-block px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">Learn More</a>
          </div>
        </div>

        <div className="text-center">
          <a href="#contact" className="inline-block px-8 py-4 bg-green-600 text-white rounded-lg font-semibold shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all transform hover:scale-105">
            Make a Donation Today
          </a>
        </div>
      </div>
    </section>
  );
} 