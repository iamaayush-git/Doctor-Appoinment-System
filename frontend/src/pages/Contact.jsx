import React from 'react'

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="container mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          Have any questions or need assistance? Feel free to reach out to us using the form below or through our contact details.
        </p>

        {/* Contact Details */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Contact Information</h3>
          <p className="text-gray-600"><strong>📍 Address:</strong> 123 Health Street, MedCity, USA</p>
          <p className="text-gray-600"><strong>📞 Phone:</strong> +1 234 567 890</p>
          <p className="text-gray-600"><strong>✉ Email:</strong> support@doctorappointment.com</p>
        </div>

        {/* Contact Form */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter your name" required />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full p-2 border rounded-md" placeholder="Enter your email" required />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea className="w-full p-2 border rounded-md" rows="4" placeholder="Write your message" required></textarea>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-10">
        &copy; 2025 Doctor Appointment System. All Rights Reserved.
      </footer>
    </div>
  );
};
export default Contact