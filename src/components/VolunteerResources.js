import React from "react";

export default function VolunteerResources() {
  return (
    <section id="volunteer-resources" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Resources for Volunteers</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Access tools, training materials, and resources to support your advocacy work and professional development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Training & Development</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Continuing Education</h4>
                <p className="text-gray-700 mb-4">Access ongoing training modules and workshops to enhance your advocacy skills.</p>
                <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">View Training Calendar →</a>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Mentorship Program</h4>
                <p className="text-gray-700 mb-4">Connect with experienced CASA volunteers for guidance and support.</p>
                <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">Request a Mentor →</a>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Specialized Training</h4>
                <p className="text-gray-700 mb-4">Advanced courses in trauma-informed care, cultural competency, and legal advocacy.</p>
                <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">Browse Courses →</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Tools & Templates</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Report Templates</h4>
                <p className="text-gray-700 mb-4">Download court report templates and documentation forms.</p>
                <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">Download Templates →</a>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Resource Directory</h4>
                <p className="text-gray-700 mb-4">Access community resources, service providers, and support organizations.</p>
                <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">Browse Directory →</a>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Case Management Tools</h4>
                <p className="text-gray-700 mb-4">Digital tools for tracking case progress and managing documentation.</p>
                <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">Access Tools →</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Support & Community</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Peer Support Groups</h4>
              <p className="text-gray-700 mb-4">Connect with fellow volunteers for support and shared experiences.</p>
              <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">Join Groups →</a>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Discussion Forums</h4>
              <p className="text-gray-700 mb-4">Online forums for discussing cases, sharing insights, and asking questions.</p>
              <a href="#contact" className="text-green-600 hover:text-green-700 font-medium">Access Forums →</a>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Library & Research</h4>
              <p className="text-gray-700 mb-4">Access research articles, best practices, and advocacy literature.</p>
              <a href="#contact" className="text-purple-600 hover:text-purple-700 font-medium">Browse Library →</a>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Need Help?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our staff is here to support you. Contact us for assistance with cases, training, or any questions about your volunteer role.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Contact Staff
            </a>
            <a href="#volunteer" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 