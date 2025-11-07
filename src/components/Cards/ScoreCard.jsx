import React from 'react';

const ScoreCardPremium = ({ 
  userName = "Ibrahim Gaha",
  currentPoints = 51,
  averagePoints = 46,
  highestPoints = 124,
  gameweek = 9,
  countryCode = "ma"
}) => {
  return (
    <div className="bg-gradient-to-br from-red-100 to-green-100 rounded-2xl shadow-lg border border-red-200 p-6 max-w-sm mx-auto">
      
      {/* Header with Flag */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-3 mb-2">
          <h1 className="text-2xl font-bold text-gray-900">zlebya</h1>
          <img 
            src={`https://flagcdn.com/w40/${countryCode}.png`}
            srcSet={`https://flagcdn.com/w80/${countryCode}.png 2x`}
            width="40"
            height="20"
            alt={`${countryCode.toUpperCase()} flag`}
            className="w-6 h-4 rounded shadow-sm"
          />
        </div>
        <p className="text-gray-700 text-lg font-medium">{userName}</p>
      </div>

      {/* Gameweek */}
      <div className="text-center mb-6">
        <p className="text-gray-900 font-semibold text-sm tracking-wide">
          Gameweek <sup className="text-base">{gameweek}</sup>
        </p>
      </div>

      {/* Separator */}
      <div className="flex items-center justify-center mb-6">
        <div className="w-16 h-0.5 bg-gradient-to-r from-red-200 to-green-200 rounded-full"></div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900 mb-1">{averagePoints}</p>
          <p className="text-gray-500 text-xs font-medium">Average</p>
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900 mb-1">{currentPoints}</p>
          <p className="text-gray-500 text-xs font-medium">Points →</p>
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900 mb-1">{highestPoints}</p>
          <p className="text-gray-500 text-xs font-medium">Highest →</p>
        </div>
      </div>

      {/* Ultra Premium Buttons */}
      <div className="grid grid-cols-2 gap-4">
        
        {/* Pick Team - Animated Gradient Button */}
        <button className="group relative bg-gradient-to-br from-red-500 via-red-600 to-green-600 text-white py-3.5 rounded-xl font-bold text-sm transition-all duration-500 shadow-2xl hover:shadow-3xl hover:scale-105 overflow-hidden">
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-green-500 to-red-400 bg-[length:200%_100%] animate-shimmer"></div>
          
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/5"></div>
          
          {/* Button content */}
          <div className="relative flex items-center justify-center space-x-2">
            <svg className="w-4 h-4 text-white group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
            <span className="drop-shadow-sm">Pick Team</span>
          </div>
        </button>

        {/* Transfers - 3D Glass Button */}
        <button className="group relative bg-gradient-to-br from-white to-gray-50 text-gray-800 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 border border-gray-200/80 hover:border-green-300/50 overflow-hidden">
          
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          
          {/* Hover color overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-red-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Button content */}
          <div className="relative flex items-center justify-center space-x-2">
            <svg className="w-4 h-4 text-gray-700 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h8a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 4H6a2 2 0 00-2 2v2a2 2 0 002 2h10a2 2 0 002-2v-2a2 2 0 00-2-2z" />
            </svg>
            <span className="drop-shadow-sm">Transfers</span>
          </div>
        </button>
      </div>

    </div>
  );
};



export default ScoreCardPremium;