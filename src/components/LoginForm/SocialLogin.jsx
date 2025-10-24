import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaApple, FaXTwitter } from 'react-icons/fa6';

const SocialLogin = () => {
  const socialButtons = [
    { name: 'Google', icon: 'GoogleSVG' },
    { name: 'Facebook', icon: 'FacebookSVG' },
    { name: 'Apple', icon: 'AppleSVG' },
    { name: 'X', icon: 'XSVG' },
  ];

  return (
    <div className="mt-6 grid grid-cols-2 gap-3">
      {socialButtons.map((social) => (
        <SocialButton key={social.name} social={social} />
      ))}
    </div>
  );
};

const SocialButton = ({ social }) => (
  <button
    type="button"
    className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
  >
    <SocialIcon name={social.name} />
    <span className="ml-2">{social.name}</span>
  </button>
);

const SocialIcon = ({ name }) => {
  const iconClass = "w-5 h-5";
  
  switch (name) {
    case 'Google':
      return <FcGoogle className={iconClass} />;
    case 'Facebook':
      return <FaFacebook className={iconClass} style={{ color: '#1877F2' }} />;
    case 'Apple':
      return <FaApple className={iconClass} />;
    case 'X':
      return <FaXTwitter className={iconClass} />;
    default:
      return null;
  }
};


export default SocialLogin;