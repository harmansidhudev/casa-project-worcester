import React from "react";

export default function Events() {
  return (
    <section id="events" className="bg-blue-50 py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Join us at our upcoming events to support our mission, connect with the community, and learn more about how you can make a difference in children's lives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Featured Event</span>
                <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">Registration Open</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Annual CASA Gala</h3>
              <p className="text-blue-100">Celebrating 40+ Years of Service</p>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>October 12, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>6:00 PM - 10:00 PM</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4 text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Worcester Marriott Hotel</span>
              </div>
              <p className="text-gray-700 mb-4">
                Join us for an evening of celebration, inspiration, and community as we honor our volunteers and raise funds to support children in foster care. Enjoy dinner, live entertainment, and silent auction.
              </p>
              <div className="flex gap-3">
                <a href="#contact" className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded hover:bg-blue-700 transition">RSVP Now</a>
                <a href="#contact" className="flex-1 border border-blue-600 text-blue-600 text-center py-2 px-4 rounded hover:bg-blue-50 transition">Sponsor Event</a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Training Event</span>
                <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">Limited Spots</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Volunteer Training Session</h3>
              <p className="text-green-100">New CASA Volunteer Orientation</p>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>November 5, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4 text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>CASA Office, Worcester</span>
              </div>
              <p className="text-gray-700 mb-4">
                Begin your journey as a CASA volunteer with our comprehensive training program. Learn about child welfare, court procedures, and advocacy techniques.
              </p>
              <div className="flex gap-3">
                <a href="#volunteer" className="flex-1 bg-green-600 text-white text-center py-2 px-4 rounded hover:bg-green-700 transition">Apply Now</a>
                <a href="#contact" className="flex-1 border border-green-600 text-green-600 text-center py-2 px-4 rounded hover:bg-green-50 transition">Learn More</a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-blue-900">Information Sessions</h3>
            </div>
            <p className="text-gray-600 mb-4">Monthly sessions to learn about CASA and how you can get involved.</p>
            <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">View Schedule →</a>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-blue-900">Community Outreach</h3>
            </div>
            <p className="text-gray-600 mb-4">Join us at local fairs, schools, and community events to spread awareness.</p>
            <a href="#contact" className="text-green-600 hover:text-green-700 font-medium">Get Involved →</a>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-blue-900">Volunteer Appreciation</h3>
            </div>
            <p className="text-gray-600 mb-4">Special events to recognize and celebrate our dedicated volunteers.</p>
            <a href="#contact" className="text-purple-600 hover:text-purple-700 font-medium">Learn More →</a>
          </div>
        </div>

        <div className="text-center">
          <a href="#contact" className="inline-block px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all transform hover:scale-105">
            Contact Us About Events
          </a>
        </div>
      </div>
    </section>
  );
} 