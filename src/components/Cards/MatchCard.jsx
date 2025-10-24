import React from 'react';

const MatchCard = ({ 
  teamA, 
  teamB, 
  score, 
  time, 
  league = "Premier League",
  isLive = true 
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
      {/* Team A */}
      <div className="flex items-center space-x-3 flex-1">
        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
          {teamA.substring(0, 2)}
        </div>
        <span className="font-medium text-gray-900">{teamA}</span>
      </div>

      {/* Match Info */}
      <div className="text-center mx-4">
        <div className="flex items-center justify-center space-x-2 mb-1">
          {isLive && (
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          )}
          <div className="text-lg font-bold text-gray-900">{score}</div>
        </div>
        <div className="text-sm text-gray-500 flex items-center space-x-2">
          <span>{time}</span>
          {league && <span className="text-xs bg-gray-200 px-2 py-1 rounded">• {league}</span>}
        </div>
      </div>

      {/* Team B */}
      <div className="flex items-center space-x-3 flex-1 justify-end">
        <span className="font-medium text-gray-900">{teamB}</span>
        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
          {teamB.substring(0, 2)}
        </div>
      </div>
    </div>
  );
};

export default MatchCard;