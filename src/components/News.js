import React from "react";

export default function News() {
  return (
    <section id="news" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Latest News & Stories</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Stay up to date with the latest news, volunteer spotlights, and inspiring stories from CASA Project Worcester County.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Featured Story</span>
                <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">Volunteer Spotlight</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Meet Jane: A Decade of Dedication</h3>
              <p className="text-blue-100">Celebrating 10 Years of Service</p>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>September 15, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                  <span>By Sarah Johnson</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Jane has advocated for 12 children over 5 years, helping them find permanent homes and brighter futures. Her dedication and compassion have made an immeasurable impact on the lives of vulnerable children in our community.
              </p>
              <div className="flex gap-3">
                <a href="#contact" className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded hover:bg-blue-700 transition">Read Full Story</a>
                <a href="#volunteer" className="flex-1 border border-blue-600 text-blue-600 text-center py-2 px-4 rounded hover:bg-blue-50 transition">Become a Volunteer</a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Breaking News</span>
                <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">Grant Awarded</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Major Grant Expands Training Programs</h3>
              <p className="text-green-100">$50,000 Grant from Community Foundation</p>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>August 28, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                  <span>By CASA Staff</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                The Worcester Community Foundation has awarded CASA Project Worcester County a $50,000 grant to expand our volunteer training programs and increase our capacity to serve more children in foster care.
              </p>
              <div className="flex gap-3">
                <a href="#contact" className="flex-1 bg-green-600 text-white text-center py-2 px-4 rounded hover:bg-green-700 transition">Read More</a>
                <a href="#donate" className="flex-1 border border-green-600 text-green-600 text-center py-2 px-4 rounded hover:bg-green-50 transition">Support Us</a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-blue-900">Success Stories</h3>
            </div>
            <p className="text-gray-600 mb-4">Read about the positive outcomes and permanent homes found for children with CASA volunteers.</p>
            <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">View Stories →</a>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-blue-900">Program Updates</h3>
            </div>
            <p className="text-gray-600 mb-4">Stay informed about new initiatives, training programs, and organizational developments.</p>
            <a href="#contact" className="text-green-600 hover:text-green-700 font-medium">Latest Updates →</a>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-blue-900">Community Impact</h3>
            </div>
            <p className="text-gray-600 mb-4">Learn about our impact on the community and how we're making a difference in children's lives.</p>
            <a href="#contact" className="text-purple-600 hover:text-purple-700 font-medium">Learn More →</a>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Stay Connected</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news, volunteer spotlights, and updates about our mission to serve children in foster care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 