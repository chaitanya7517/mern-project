import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b  py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-black sm:text-5xl">
          About Us
        </h2>
        <p className="mt-6 text-xl leading-relaxed text-black opacity-90 max-w-4xl mx-auto">
          Welcome to <strong className="text-yellow-300">Real Estate</strong>, your trusted platform for all your real estate needs. Whether you're looking to buy your dream home, sell your property, or rent a place that feels just right, we are here to make your experience smooth and hassle-free.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-black opacity-90 max-w-4xl mx-auto">
          At <strong className="text-yellow-300">Real Estate</strong>, you can discover a wide range of homes, from cozy apartments to luxury villas, across various locations. Our advanced search and filtering options make it easy to find a home that fits your preferences and budget. Additionally, we offer effortless property listing services, allowing sellers to reach thousands of potential buyers. For those looking to rent, we provide a variety of rental properties, including short-term stays and long-term options.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-black opacity-90 max-w-4xl mx-auto">
          Our mission is to simplify the real estate process by connecting buyers, sellers, and renters on a single platform, with a focus on transparency, security, and efficiency. Start exploring today, and let us help you find your next home!
        </p>

        <div className="mt-10">
          <a
            href="/"
            className="bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-lg hover:bg-yellow-500 hover:text-white transition duration-300"
          >
            Start Exploring
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
