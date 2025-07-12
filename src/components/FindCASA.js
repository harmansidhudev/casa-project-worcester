import React from "react";

export default function FindCASA() {
  return (
    <section id="find-casa" className="bg-gray-50 py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Find a CASA Project Near You</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            CASA programs exist across the country. Find a CASA program in your area to get involved in advocating for children in foster care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Search by Location</h3>
            <div className="bg-white rounded-lg shadow-md p-6">
              <form className="space-y-6">
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">State</label>
                  <select 
                    id="state" 
                    name="state" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City (Optional)</label>
                  <input 
                    id="city" 
                    name="city" 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter city name"
                  />
                </div>

                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-2">ZIP Code (Optional)</label>
                  <input 
                    id="zip" 
                    name="zip" 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter ZIP code"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Search CASA Programs
                </button>
              </form>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">National CASA Resources</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">National CASA/GAL Association</h4>
                <p className="text-gray-700 mb-4">The national organization that supports and promotes CASA/GAL programs across the country.</p>
                <a href="https://nationalcasagal.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">Visit Website →</a>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">CASA Program Directory</h4>
                <p className="text-gray-700 mb-4">Find CASA programs in all 50 states and territories through the national directory.</p>
                <a href="https://nationalcasagal.org/programs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">Browse Directory →</a>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Become a CASA Volunteer</h4>
                <p className="text-gray-700 mb-4">Learn about the requirements and process for becoming a CASA volunteer in your area.</p>
                <a href="https://nationalcasagal.org/volunteer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">Learn More →</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Massachusetts CASA Programs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">CASA Project Worcester County</h4>
              <p className="text-gray-700 mb-4">Serving children in foster care in Worcester County, Massachusetts.</p>
              <div className="text-sm text-gray-600">
                <p>Phone: 508-757-9877</p>
                <p>Email: info@thecasaproject.org</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">CASA of Middlesex County</h4>
              <p className="text-gray-700 mb-4">Advocating for children in foster care in Middlesex County.</p>
              <div className="text-sm text-gray-600">
                <p>Phone: (617) 679-9000</p>
                <p>Email: info@casaofmiddlesex.org</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">CASA of Suffolk County</h4>
              <p className="text-gray-700 mb-4">Supporting children in foster care in Suffolk County.</p>
              <div className="text-sm text-gray-600">
                <p>Phone: (617) 779-1111</p>
                <p>Email: info@casaofsuffolk.org</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Need Help Finding a Program?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            If you're having trouble finding a CASA program in your area or have questions about getting involved, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Contact Us
            </a>
            <a href="https://nationalcasagal.org" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
              Visit National CASA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 