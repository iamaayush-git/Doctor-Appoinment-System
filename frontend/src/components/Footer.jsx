const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 p-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">

        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">Doctor Appointment</h2>
          <p className="text-sm">Your trusted healthcare partner</p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-sm hover:text-orange-500">Home</a>
          <a href="#" className="text-sm hover:text-orange-500">Doctors</a>
          <a href="#" className="text-sm hover:text-orange-500">About</a>
          <a href="#" className="text-sm hover:text-orange-500">Contact</a>
        </div>

        {/* Right Section - Contact Info */}
        <div className="text-center md:text-right mt-4 md:mt-0">
          <p className="text-sm">📍 123 Health Street, City</p>
          <p className="text-sm">📞 +1 234 567 890</p>
          <p className="text-sm">✉ support@doctorapp.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-500 mt-4 border-t pt-2">
        © {new Date().getFullYear()} Doctor Appointment. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
