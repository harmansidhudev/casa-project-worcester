import React from "react";

export default function About() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">About CASA Project Worcester County</h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            We are a nonprofit organization dedicated to advocating for the best interest of children in foster care in Worcester County.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              Court Appointed Special Advocates (CASAs) are assigned to amplify the children's voices, advocate for their best interests, and support them on their path towards a safe and permanent home.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Appointed by judges to help on the most heart-breaking cases in the foster care system, CASAs help abused and neglected children navigate the Worcester County Juvenile Courts, one child or sibling group at a time.
            </p>
            <p className="text-lg text-gray-700">
              CASAs report the best interests of the children to the judge, who uses the reports in their evaluation and decision on each case.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Key Statistics</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold">2,000+</span>
                </div>
                <div>
                  <p className="font-semibold">Children in Foster Care</p>
                  <p className="text-blue-100">In Worcester County</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold">8,700</span>
                </div>
                <div>
                  <p className="font-semibold">Children Removed</p>
                  <p className="text-blue-100">From homes in Massachusetts</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold">50%</span>
                </div>
                <div>
                  <p className="font-semibold">Under 6 Years Old</p>
                  <p className="text-blue-100">Most children in foster care</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Investigate</h3>
            <p className="text-gray-700">
              Investigate and fact-find, helping a judge learn the nuances of each child's prospective caregiver situations.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Advocate</h3>
            <p className="text-gray-700">
              Advocate for any medical, mental health, and educational services that a child may need while in foster care.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Monitor</h3>
            <p className="text-gray-700">
              Monitor case progress and well-being of the child to aid in obtaining a safe and permanent home as quickly as possible.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">We Fill the Gap</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            Statistics show that children who experience trauma fare better if they have one reliable, consistent adult in their lives. This is where CASA Volunteers help fill the gap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/volunteer" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Become a Volunteer
            </a>
            <a href="/donate" className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
              Support Our Mission
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 