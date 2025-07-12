import React from "react";

export default function About() {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">About CASA Project Worcester County</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a nonprofit organization dedicated to advocating for children in foster care through trained community volunteers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              CASA (Court Appointed Special Advocates) volunteers are ordinary citizens who are specially trained and appointed by judges to advocate for the best interests of children who have been removed from their homes due to abuse or neglect. Our volunteers work tirelessly to ensure every child's voice is heard and their needs are met.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Since our founding in 1981, we have served thousands of children in Worcester County, providing them with a consistent, caring adult presence during one of the most difficult times in their lives.
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <h4 className="text-xl font-semibold text-blue-900 mb-4">Key Facts</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Founded in 1981, serving Worcester County and surrounding areas</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Over 500 children served annually</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Committed to diversity, equity, and inclusion</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>100% volunteer-driven organization</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Volunteer Training</h3>
            <p className="text-gray-600">Comprehensive 30-hour training program prepares volunteers to advocate effectively for children.</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Court Advocacy</h3>
            <p className="text-gray-600">Volunteers provide detailed reports to judges to help make informed decisions about children's futures.</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Child-Centered</h3>
            <p className="text-gray-600">Every decision and recommendation is made with the child's best interests as the primary consideration.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 