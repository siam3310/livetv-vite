import React, { useState } from "react";
import ChannelList from "./components/ChannelList";
import VideoPlayer from "./components/VideoPlayer";
import SearchBar from "./components/SearchBar";
import matches from "./data/matches.json"; // Match data
import channels from "./data/channels.json"; // Channels data

const App = () => {
  const [selectedSource, setSelectedSource] = useState(matches[0].url); // Default to first match
  const [searchResults, setSearchResults] = useState(channels);

  const handleMatchSelect = (match) => {
    setSelectedSource(match.url);
  };

  const handleChannelSelect = (channel) => {
    setSelectedSource(channel.url);
  };

  const handleSearch = (query) => {
    const filteredChannels = channels.filter((channel) =>
      channel.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredChannels);
  };

  return (
    <div className="container py-4">
      <header className="text-center mb-4">
        <h1 className="display-6 text-primary">Live TV & Sports Streaming</h1>
      </header>

      <VideoPlayer url={selectedSource} />

      {/* Live Matches Section */}
      <section className="mb-5">
        <h2 className="h5 text-secondary mb-3">Live Matches</h2>
        <div className="row gy-3">
          {matches.map((match) => (
            <div
              key={match.id}
              className="col-12 col-md-6 col-lg-4"
              onClick={() => handleMatchSelect(match)}
            >
              <div className="card shadow-sm h-100">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="card-title">{match.team1}</h6>
                    <p className="card-subtitle text-muted small">{match.info}</p>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-danger btn-sm">LIVE</button>
                  </div>
                  <div>
                    <h6 className="card-title">{match.team2}</h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Channels Section */}
      <section>
        <SearchBar onSearch={handleSearch} />
        <h2 className="h5 text-secondary mb-3">Channels</h2>
        <ChannelList
          channels={searchResults}
          onChannelSelect={handleChannelSelect}
        />
      </section>
    </div>
  );
};

export default App;
