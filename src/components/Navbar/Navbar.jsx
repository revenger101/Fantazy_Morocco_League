import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('HomePage');
  const navigate = useNavigate();

  const menuItems = [
    { name: 'HomePage', label: 'Home' },
    { name: 'Team', label: 'My Team' },
    { name: 'Transfer', label: 'Transfers' },
    { name: 'Leagues & cups', label: 'Leagues & Cups' },
    { name: 'pick team', label: 'Pick Team' },
    { name: 'signout', label: 'Sign Out', isDanger: true }
  ];

  const handleNavigation = (itemName) => {
    setActiveItem(itemName);
    
    if (itemName === 'signout') {
      handleSignOut();
    } else {
      // Handle other navigation items
      const route = itemName.toLowerCase().replace(' ', '-');
      navigate(`/${route}`);
    }
  };

  const handleSignOut = () => {
    // Clear user data from localStorage/sessionStorage
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    sessionStorage.removeItem('userToken');
    
    // Navigate to login page
    navigate('/login');
    
    // Optional: Show success message
    console.log('User signed out successfully');
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    setIsMobileMenuOpen(false);
    
    if (itemName === 'signout') {
      handleSignOut();
    } else {
      // Handle other navigation
      const route = itemName.toLowerCase().replace(' ', '-');
      navigate(`/${route}`);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-red-600 to-green-600 shadow-lg border-b border-white border-opacity-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => navigate('/')}
            >
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-sm font-bold text-red-600">PL</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">Premier League</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.name)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                    activeItem === item.name
                      ? 'text-white bg-white bg-opacity-20 shadow-sm'
                      : item.isDanger
                      ? 'text-white hover:bg-red-500 hover:bg-opacity-30 hover:shadow-md'
                      : 'text-white hover:bg-white hover:bg-opacity-15 hover:shadow-md'
                  }`}
                >
                  {item.label}
                  {/* Active indicator bar */}
                  {activeItem === item.name && !item.isDanger && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* User Profile (Desktop) */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-white text-sm font-medium">Bradrim Study</p>
                <p className="text-white text-opacity-80 text-xs">Premium Member</p>
              </div>
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center border border-white border-opacity-30 cursor-pointer hover:bg-opacity-30 transition-colors">
                <span className="text-white text-xs font-semibold">BS</span>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-red-700 to-green-700 border-t border-white border-opacity-10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleItemClick(item.name)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeItem === item.name
                    ? 'text-white bg-white bg-opacity-20'
                    : item.isDanger
                    ? 'text-white hover:bg-red-500 hover:bg-opacity-30'
                    : 'text-white hover:bg-white hover:bg-opacity-15'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile User Info */}
            <div className="px-3 py-4 border-t border-white border-opacity-20 mt-2">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center border border-white border-opacity-30">
                  <span className="text-white text-sm font-semibold">BS</span>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Bradrim Study</p>
                  <p className="text-white text-opacity-80 text-xs">Premium Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;