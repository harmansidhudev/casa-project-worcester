import React from "react";

export default function Shop() {
  return (
    <section id="shop" className="bg-gray-50 py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">CASA Shop</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Show your support for CASA Project Worcester County with our merchandise. Every purchase helps fund our mission to advocate for children in foster care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 h-48 flex items-center justify-center">
              <div className="text-white text-center">
                <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h12V4H6z"/>
                  <path d="M8 6h8v2H8V6zm0 4h8v2H8v-2zm0 4h6v2H8v-2z"/>
                </svg>
                <p className="text-sm opacity-90">CASA T-Shirt</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">"Every Child Deserves a Voice" T-Shirt</h3>
              <p className="text-gray-600 mb-4">Comfortable cotton t-shirt with our mission statement. Available in multiple sizes.</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">$25.00</span>
                <a href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Add to Cart</a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-br from-green-600 to-blue-600 h-48 flex items-center justify-center">
              <div className="text-white text-center">
                <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <p className="text-sm opacity-90">CASA Hoodie</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">CASA Project Hoodie</h3>
              <p className="text-gray-600 mb-4">Warm, comfortable hoodie perfect for showing your support year-round.</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-600">$45.00</span>
                <a href="#contact" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Add to Cart</a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 h-48 flex items-center justify-center">
              <div className="text-white text-center">
                <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <p className="text-sm opacity-90">CASA Mug</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">CASA Coffee Mug</h3>
              <p className="text-gray-600 mb-4">Start your day with purpose. Ceramic mug with CASA logo and mission.</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-purple-600">$15.00</span>
                <a href="#contact" className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">Add to Cart</a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-br from-orange-600 to-red-600 h-48 flex items-center justify-center">
              <div className="text-white text-center">
                <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <p className="text-sm opacity-90">CASA Tote</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">CASA Canvas Tote Bag</h3>
              <p className="text-gray-600 mb-4">Eco-friendly canvas tote perfect for shopping, beach trips, or everyday use.</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-orange-600">$20.00</span>
                <a href="#contact" className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition">Add to Cart</a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-br from-teal-600 to-blue-600 h-48 flex items-center justify-center">
              <div className="text-white text-center">
                <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <p className="text-sm opacity-90">CASA Stickers</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">CASA Sticker Pack</h3>
              <p className="text-gray-600 mb-4">Set of 5 vinyl stickers featuring CASA logos and mission statements.</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-teal-600">$8.00</span>
                <a href="#contact" className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition">Add to Cart</a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 h-48 flex items-center justify-center">
              <div className="text-white text-center">
                <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <p className="text-sm opacity-90">CASA Pin</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">CASA Lapel Pin</h3>
              <p className="text-gray-600 mb-4">Show your support with this elegant enamel pin featuring the CASA logo.</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-indigo-600">$5.00</span>
                <a href="#contact" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">Add to Cart</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Bulk Orders & Fundraising</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Planning a fundraiser or need bulk orders for your organization? Contact us for special pricing and custom merchandise options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Contact for Bulk Orders
            </a>
            <a href="#donate" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
              Make a Donation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 