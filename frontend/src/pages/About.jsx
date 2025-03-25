import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* About Section */}
      <section className="container mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">About Us</h2>
        <p className="text-gray-700 leading-relaxed">
          Welcome to our <span className="font-semibold">Doctor Appointment System</span>, a platform designed to simplify
          the process of booking medical appointments. We provide a seamless, efficient, and user-friendly interface
          that allows patients to schedule appointments with their preferred doctors effortlessly.
        </p>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h3>
          <p className="text-gray-600">
            Our goal is to make healthcare more accessible by bridging the gap between patients and medical professionals.
            We believe in technology-driven solutions that enhance the healthcare experience for everyone.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose Us?</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Easy and quick appointment scheduling</li>
            <li>Secure and reliable platform</li>
            <li>Access to a wide range of healthcare professionals</li>
            <li>24/7 support for your convenience</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-10">
        &copy; 2025 Doctor Appointment System. All Rights Reserved.
      </footer>
    </div>
  );
};

export default About