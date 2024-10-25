import React from "react";
import { data } from "./data";
import "./ArtDirections.css";

const ArtDirections = () => {
  return (
    <div className="artDirectionsContainer">
      <h1 className="titleArtDirections">ART DIRECTIONS</h1>
      {data.groups.map((group) => (
        <div key={group.id} className="groupContainer">
          <h2 className="groupTitle">{group.title}</h2>
          <div className="imagesContainer">
            {group.images.map((image, index) => {
              const isVideo = image.imgUrl.includes("youtube.com");
              return isVideo ? (
                <div key={index} className="iframeContainer">
                  <iframe
                    className="youtubeIframe"
                    src={image.imgUrl.replace("watch?v=", "embed/")}
                    title={`Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
                  <img className="groupImage" src={image.imgUrl} alt={`Art ${index + 1}`} />
                </a>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtDirections;
