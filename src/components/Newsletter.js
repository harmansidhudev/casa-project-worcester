import React from "react";

export default function Newsletter() {
  return (
    <section id="newsletter" className="bg-blue-50 py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">CASA Newsletter</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Stay informed about our latest news, volunteer stories, events, and ways to support children in foster care.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-700 mb-6">
              Receive monthly updates about our mission, volunteer opportunities, upcoming events, and success stories.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="newsletterFirstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <input 
                  id="newsletterFirstName" 
                  name="firstName" 
                  type="text" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="newsletterLastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <input 
                  id="newsletterLastName" 
                  name="lastName" 
                  type="text" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="newsletterEmail" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input 
                id="newsletterEmail" 
                name="email" 
                type="email" 
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Newsletter Preferences</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" name="preferences" value="volunteer-opportunities" className="mr-2" defaultChecked />
                  <span>Volunteer Opportunities</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" name="preferences" value="events" className="mr-2" defaultChecked />
                  <span>Upcoming Events</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" name="preferences" value="success-stories" className="mr-2" defaultChecked />
                  <span>Success Stories</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" name="preferences" value="fundraising" className="mr-2" />
                  <span>Fundraising Campaigns</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" name="preferences" value="resources" className="mr-2" />
                  <span>Resources & Training</span>
                </label>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input 
                type="checkbox" 
                id="newsletterAgree" 
                name="agree" 
                required 
                className="mt-1"
              />
              <label htmlFor="newsletterAgree" className="text-sm text-gray-700">
                I agree to receive email communications from CASA Project Worcester County. I understand I can unsubscribe at any time. *
              </label>
            </div>

            <div className="text-center">
              <button 
                type="submit" 
                className="px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all transform hover:scale-105"
              >
                Subscribe to Newsletter
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Recent Newsletters</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>January 2024</span>
                <span className="mx-2">•</span>
                <span>Monthly</span>
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">January Newsletter</h4>
              <p className="text-gray-700 mb-4">New year, new opportunities to make a difference in children's lives.</p>
              <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">Read Newsletter →</a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>December 2023</span>
                <span className="mx-2">•</span>
                <span>Monthly</span>
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">December Newsletter</h4>
              <p className="text-gray-700 mb-4">Holiday giving and year-end impact stories from our community.</p>
              <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">Read Newsletter →</a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>November 2023</span>
                <span className="mx-2">•</span>
                <span>Monthly</span>
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">November Newsletter</h4>
              <p className="text-gray-700 mb-4">Giving thanks for our volunteers and celebrating family reunifications.</p>
              <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">Read Newsletter →</a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">
            View All Newsletter Archives →
          </a>
        </div>
      </div>
    </section>
  );
} 