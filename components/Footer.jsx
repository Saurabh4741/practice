import React from 'react';

const Footer = ({ email, phone, socialLinks }) => {
  return (
    <footer className="mt-20">
      <div className="text-center">
        <img src="/assets/logo.jpg" alt="Logo" className="w-36 mx-auto mb-2 dark:hidden" loading="lazy" />
        <img src="/assets/logo.jpg" alt="Dark Logo" className="w-36 mx-auto mb-2 hidden dark:block" loading="lazy" />

        <div className="w-max flex items-center gap-2 mx-auto">
          <img src="/assets/mail_icon.png" alt="Mail Icon" className="w-6 dark:hidden" loading="lazy" />
          <img src="/assets/mail_icon_dark.png" alt="Dark Mail Icon" className="w-6 hidden dark:block" loading="lazy" />
          <span>{email}</span>
          <span>{phone}</span>
        </div>
      </div>
      
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2024 Nikhil Bidhuri. All rights reserved.</p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a target='_blank' rel="noopener noreferrer" href={link.url} aria-label={link.name}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
