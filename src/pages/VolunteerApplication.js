import React from "react";

export default function VolunteerApplication() {
  return (
    <section id="volunteer-application" className="bg-blue-50 py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Volunteer Application</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ready to make a difference? Complete our volunteer application to begin your journey as a CASA advocate.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <input 
                  id="firstName" 
                  name="firstName" 
                  type="text" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <input 
                  id="lastName" 
                  name="lastName" 
                  type="text" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
              <input 
                id="address" 
                name="address" 
                type="text" 
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Street Address"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                <input 
                  id="city" 
                  name="city" 
                  type="text" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                <select 
                  id="state" 
                  name="state" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select State</option>
                  <option value="MA">Massachusetts</option>
                  <option value="CT">Connecticut</option>
                  <option value="RI">Rhode Island</option>
                  <option value="NH">New Hampshire</option>
                  <option value="VT">Vermont</option>
                  <option value="ME">Maine</option>
                </select>
              </div>
              <div>
                <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-2">ZIP Code *</label>
                <input 
                  id="zip" 
                  name="zip" 
                  type="text" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-2">Occupation</label>
                <input 
                  id="occupation" 
                  name="occupation" 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="employer" className="block text-sm font-medium text-gray-700 mb-2">Employer</label>
                <input 
                  id="employer" 
                  name="employer" 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">Highest Level of Education</label>
              <select 
                id="education" 
                name="education" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Education Level</option>
                <option value="high-school">High School</option>
                <option value="some-college">Some College</option>
                <option value="associates">Associate's Degree</option>
                <option value="bachelors">Bachelor's Degree</option>
                <option value="masters">Master's Degree</option>
                <option value="doctorate">Doctorate</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">How did you hear about CASA?</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="source" value="website" className="mr-2" />
                  <span>Website</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="source" value="social-media" className="mr-2" />
                  <span>Social Media</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="source" value="friend" className="mr-2" />
                  <span>Friend/Family</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="source" value="event" className="mr-2" />
                  <span>Community Event</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="source" value="other" className="mr-2" />
                  <span>Other</span>
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">Why do you want to become a CASA volunteer? *</label>
              <textarea 
                id="motivation" 
                name="motivation" 
                rows="4" 
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Please share your motivation for becoming a CASA volunteer..."
              ></textarea>
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">Relevant Experience</label>
              <textarea 
                id="experience" 
                name="experience" 
                rows="3" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Please describe any relevant experience with children, social work, or advocacy..."
              ></textarea>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Availability & Commitment</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Are you available for the 30-hour training program?</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="training-available" value="yes" className="mr-2" />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="training-available" value="no" className="mr-2" />
                      <span>No</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Can you commit to 1-2 years of service?</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="commitment" value="yes" className="mr-2" />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="commitment" value="no" className="mr-2" />
                      <span>No</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Are you available 10-15 hours per month?</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="time-available" value="yes" className="mr-2" />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="time-available" value="no" className="mr-2" />
                      <span>No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-start space-x-3">
                <input 
                  type="checkbox" 
                  id="agree" 
                  name="agree" 
                  required 
                  className="mt-1"
                />
                <label htmlFor="agree" className="text-sm text-gray-700">
                  I understand that this application is the first step in the volunteer screening process. I agree to undergo a background check and provide references as required. *
                </label>
              </div>
            </div>

            <div className="text-center">
              <button 
                type="submit" 
                className="px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all transform hover:scale-105"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
} 