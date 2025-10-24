import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import FeatureCard from '../components/Cards/FeatureCard';
import MatchCard from '../components/Cards/MatchCard';

const HomePage = () => {
  
  const handleFeatureClick = (feature) => {
    console.log(`Clicked on ${feature}`);
    // Add navigation logic here
    // Example: navigate(`/${feature.toLowerCase().replace(' ', '-')}`);
  };

  const features = [
    {
      title: "My Team",
      description: "Manage your squad, track player performance, and optimize your lineup for upcoming matches.",
      action: "View Team"
    },
    {
      title: "Transfers",
      description: "Browse available players, make strategic transfers, and strengthen your team for the season.",
      action: "Explore Transfers"
    },
    {
      title: "Leagues & Cups",
      description: "Compete in various leagues and cup competitions. Rise through the ranks and claim glory.",
      action: "Join Competition"
    }
  ];

  const liveMatches = [
    {
      teamA: "Manchester United",
      teamB: "Liverpool", 
      score: "2 - 1",
      time: "65'",
      league: "Premier League",
      isLive: true
    },
    {
      teamA: "Arsenal",
      teamB: "Chelsea",
      score: "0 - 0", 
      time: "45'",
      league: "Premier League",
      isLive: true
    },
    {
      teamA: "Manchester City",
      teamB: "Tottenham",
      score: "1 - 2",
      time: "FT",
      league: "Champions League", 
      isLive: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to 
            <span className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">
              {' '}Premier League
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the ultimate football management platform. Track your team, 
            manage transfers, and compete in leagues with millions of fans worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              action={feature.action}
              onClick={() => handleFeatureClick(feature.title)}
            />
          ))}
        </div>

        {/* Live Matches Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Live Matches</h2>
            <div className="flex items-center space-x-2 text-red-600">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">LIVE NOW</span>
            </div>
          </div>
          <div className="space-y-4">
            {liveMatches.map((match, index) => (
              <MatchCard
                key={index}
                teamA={match.teamA}
                teamB={match.teamB}
                score={match.score}
                time={match.time}
                league={match.league}
                isLive={match.isLive}
              />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-r from-red-600 to-green-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Play?</h2>
          <p className="mb-6 text-lg">Pick your team and start your Premier League journey today.</p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 duration-200">
            Pick Your Team Now
          </button>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Premier League. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;