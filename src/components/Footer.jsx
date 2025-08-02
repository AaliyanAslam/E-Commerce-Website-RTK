import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = ({ style }) => {
  const navigate = useNavigate();

  return (
    <footer className={`!bg-gray-950 !text-white px-6 sm:px-10 md:px-20 py-12 ${style}`}>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-4">YourCompany</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            We provide the best digital solutions for modern businesses. Design, branding, marketing, and innovation.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition">Branding</a></li>
            <li><a href="#" className="hover:text-white transition">Design</a></li>
            <li><a href="#" className="hover:text-white transition">Marketing</a></li>
            <li><a href="#" className="hover:text-white transition">Advertisement</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><button onClick={() => navigate("/about")} className="hover:text-white transition">About Us</button></li>
            <li><button onClick={() => navigate("/contact")} className="hover:text-white transition">Contact</button></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Press Kit</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-white font-medium">YourCompany</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
