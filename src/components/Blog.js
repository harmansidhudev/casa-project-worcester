import React from "react";

export default function Blog() {
  return (
    <section id="blog" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">CASA Blog</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Stories, insights, and updates from our community of advocates, volunteers, and supporters.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 h-48 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <p className="text-sm opacity-90">Featured Story</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>January 15, 2024</span>
                  <span className="mx-2">•</span>
                  <span>Volunteer Stories</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">A CASA Volunteer's Journey: From Training to Courtroom</h3>
                <p className="text-gray-700 mb-4">
                  Follow Sarah Johnson's inspiring journey as she completes her CASA training and advocates for her first child in the foster care system.
                </p>
                <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">Read More →</a>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-br from-green-600 to-blue-600 h-48 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <p className="text-sm opacity-90">Impact Story</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>January 8, 2024</span>
                  <span className="mx-2">•</span>
                  <span>Success Stories</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Reunification Success: A Family's Path to Healing</h3>
                <p className="text-gray-700 mb-4">
                  Learn how CASA advocacy helped reunite a family after months of hard work, therapy, and support services.
                </p>
                <a href="#contact" className="text-green-600 hover:text-green-700 font-medium">Read More →</a>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 h-48 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                  <p className="text-sm opacity-90">Education</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>January 1, 2024</span>
                  <span className="mx-2">•</span>
                  <span>Resources</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Understanding Trauma-Informed Care in Child Advocacy</h3>
                <p className="text-gray-700 mb-4">
                  Explore the principles of trauma-informed care and how CASA volunteers apply these practices in their advocacy work.
                </p>
                <a href="#contact" className="text-purple-600 hover:text-purple-700 font-medium">Read More →</a>
              </div>
            </article>
          </div>

          <div className="space-y-8">
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-br from-orange-600 to-red-600 h-48 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                  <p className="text-sm opacity-90">Community</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>December 25, 2023</span>
                  <span className="mx-2">•</span>
                  <span>Community</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Holiday Giving: How Our Community Supports CASA</h3>
                <p className="text-gray-700 mb-4">
                  Discover the incredible ways our community comes together during the holidays to support children in foster care.
                </p>
                <a href="#contact" className="text-orange-600 hover:text-orange-700 font-medium">Read More →</a>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-br from-teal-600 to-blue-600 h-48 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                  <p className="text-sm opacity-90">Volunteer Spotlight</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>December 18, 2023</span>
                  <span className="mx-2">•</span>
                  <span>Volunteer Spotlight</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Volunteer Spotlight: Michael Chen's 5-Year CASA Journey</h3>
                <p className="text-gray-700 mb-4">
                  Meet Michael Chen, a dedicated CASA volunteer who has been advocating for children for over five years.
                </p>
                <a href="#contact" className="text-teal-600 hover:text-teal-700 font-medium">Read More →</a>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 h-48 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                  <p className="text-sm opacity-90">Statistics</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>December 11, 2023</span>
                  <span className="mx-2">•</span>
                  <span>Impact Report</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">2023 Impact Report: CASA's Year in Review</h3>
                <p className="text-gray-700 mb-4">
                  A comprehensive look at CASA Project Worcester County's impact on children and families throughout 2023.
                </p>
                <a href="#contact" className="text-indigo-600 hover:text-indigo-700 font-medium">Read More →</a>
              </div>
            </article>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Stay Connected</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Subscribe to our blog to receive the latest stories, updates, and insights from our CASA community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 