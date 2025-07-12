import React from "react";
import { Link } from "react-router-dom";

export default function Volunteer() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Become a CASA Volunteer</h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Make a lasting difference in the life of a child in foster care. Join our community of dedicated volunteers who advocate for children's best interests.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">What is a CASA Volunteer?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Court Appointed Special Advocates (CASAs) are trained volunteers who are appointed by judges to advocate for children in foster care. They serve as the "eyes and ears" of the court, gathering information and making recommendations to help judges make informed decisions about children's futures.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              CASA volunteers work one-on-one with children, visiting them regularly, talking to everyone involved in their lives, and making recommendations to the court about what's in the child's best interest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/volunteer/application" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                Apply Now
              </Link>
              <Link to="/volunteer/resources" className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Volunteer Requirements</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Age 21 or older</p>
                  <p className="text-blue-100 text-sm">Must be at least 21 years old to volunteer</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">30 hours of training</p>
                  <p className="text-blue-100 text-sm">Complete comprehensive training program</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">1-2 year commitment</p>
                  <p className="text-blue-100 text-sm">Commit to serving for at least 1-2 years</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">10-15 hours per month</p>
                  <p className="text-blue-100 text-sm">Dedicate time to visit children and attend court</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Background check</p>
                  <p className="text-blue-100 text-sm">Pass criminal background and reference checks</p>
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
              Gather information about the child's situation by talking to everyone involved in their life.
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
              Speak up for the child's best interests in court and with service providers.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Facilitate</h3>
            <p className="text-gray-700">
              Help ensure the child receives needed services and moves toward a safe, permanent home.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            Join our community of dedicated volunteers who are making a lasting impact on children's lives. Every child deserves a voice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/volunteer/application" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Start Your Application
            </Link>
            <Link to="/contact" className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 