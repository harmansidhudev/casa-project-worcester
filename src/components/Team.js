import React from "react";

export default function Team() {
  return (
    <section id="team" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our dedicated team of professionals works tirelessly to support CASA volunteers and advocate for children in foster care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 h-48 flex items-center justify-center">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Sarah Johnson</h3>
              <p className="text-blue-600 font-semibold mb-2">Executive Director</p>
              <p className="text-gray-700 text-sm">
                Sarah has over 15 years of experience in child welfare and nonprofit management. She leads our organization with passion and dedication.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-br from-green-600 to-blue-600 h-48 flex items-center justify-center">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Michael Chen</h3>
              <p className="text-green-600 font-semibold mb-2">Volunteer Coordinator</p>
              <p className="text-gray-700 text-sm">
                Michael recruits, trains, and supports our CASA volunteers, ensuring they have the resources they need to advocate effectively.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 h-48 flex items-center justify-center">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Emily Rodriguez</h3>
              <p className="text-purple-600 font-semibold mb-2">Case Supervisor</p>
              <p className="text-gray-700 text-sm">
                Emily supervises CASA volunteers and ensures quality advocacy services for children in the foster care system.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-br from-orange-600 to-red-600 h-48 flex items-center justify-center">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">David Thompson</h3>
              <p className="text-orange-600 font-semibold mb-2">Development Director</p>
              <p className="text-gray-700 text-sm">
                David manages fundraising efforts and donor relationships to ensure sustainable funding for our programs.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-br from-teal-600 to-blue-600 h-48 flex items-center justify-center">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Lisa Park</h3>
              <p className="text-teal-600 font-semibold mb-2">Community Outreach</p>
              <p className="text-gray-700 text-sm">
                Lisa builds partnerships with community organizations and raises awareness about CASA's mission.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 h-48 flex items-center justify-center">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Robert Wilson</h3>
              <p className="text-indigo-600 font-semibold mb-2">Program Manager</p>
              <p className="text-gray-700 text-sm">
                Robert oversees program operations and ensures compliance with national CASA standards and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 