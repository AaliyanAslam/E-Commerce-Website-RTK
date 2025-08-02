import React from 'react';

const About = () => {
  return (
    <section className="w-full bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/about.jpg"
            alt="About Us"
            className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">
            About <span className="text-purple-600">HyperCart</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            HyperCart is your one-stop solution for all your online shopping needs. We bring you
            an elegant, fast, and user-friendly e-commerce experience. Whether you're browsing on
            desktop, tablet, or mobile — HyperCart adapts to you beautifully.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our platform is built with modern technologies like React, Tailwind CSS, and Firebase
            to ensure speed, security, and scalability. We believe in simplicity, performance, and
            delivering joy with every click.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
              🔒 Secure Checkout
            </div>
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              🚀 Lightning Fast
            </div>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
              💡 Smart UI/UX
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
