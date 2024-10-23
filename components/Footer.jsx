import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a className="hover:underline">Help Center</a></li>
              <li><a className="hover:underline">Terms of Service</a></li>
              <li><a className="hover:underline">Privacy Policy</a></li>
              <li><a className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products & Services </h3>
            <ul className="space-y-2">
              <li><a className="hover:underline">Water Treatment Plant</a></li>
              <li><a className="hover:underline">Commercial Water Softener</a></li>
              <li><a className="hover:underline">Domestic Water Softener</a></li>
              <li><a className="hover:underline">Industrial RO Plant</a></li>
              <li><a className="hover:underline">Commercial RO Plant</a></li>
              <li><a className="hover:underline">Water ATM</a></li>
              <li><a className="hover:underline">Iron Remover</a></li>
              <li><a className="hover:underline">Fire Fighting System</a></li>

            </ul>
          </div>

          {/* Column 3 */}
          <div>

            <ul className="space-y-2 mt-12">
              <li><a className="hover:underline">Dosing System</a></li>
              <li><a className="hover:underline">Ultra Filtration System</a></li>
              <li><a className="hover:underline">Bottling Plant</a></li>
              <li><a className="hover:underline">DM Plant</a></li>
              <li><a className="hover:underline">Sewage Treatment Plant</a></li>
              <li><a className="hover:underline">Pressure Pump</a></li>
              <li><a className="hover:underline">Activated Carbon Filter</a></li>
              <li><a className="hover:underline">Sand Filter</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn size={20} /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} My Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
