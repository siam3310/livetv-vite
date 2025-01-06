import React from "react";

const ChannelList = ({ channels, onChannelSelect }) => {
  return (
    <div className="row gy-3">
      {channels.map((channel) => (
        <div
          key={channel.id}
          className="col-12 col-md-6 col-lg-4"
          onClick={() => onChannelSelect(channel)}
        >
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">{channel.name}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChannelList;
