
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-screen-lg mx-auto px-6 text-center">
        <p className="text-xs text-gray-400 tracking-wider">
          &copy; {new Date().getFullYear()} Naveen Mahankali. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
