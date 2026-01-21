import React, { useState } from 'react';
import './Videos.css';

function VideoCard({ title, description, videoId }) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="video-card hover-effect">
            <div className="video-thumbnail">
                {!isLoaded && (
                    <div className="thumbnail-placeholder">
                        <img 
                            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                            alt={`Thumbnail do vídeo: ${title}`}
                            className="thumbnail-image"
                        />
                        <div className="play-button-overlay">
                            <div className="play-button">
                                <i className="fas fa-play"></i>
                            </div>
                        </div>
                    </div>
                )}
                <iframe 
                    src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${window.location.origin}`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    frameBorder="0"
                    onLoad={() => setIsLoaded(true)}
                    className={isLoaded ? 'iframe-loaded' : 'iframe-loading'}
                />
            </div>
            <div className="video-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="video-hint">
                    <i className="fas fa-play-circle"></i>
                    Clique no vídeo para assistir
                </div>
            </div>
        </div>
    );
}

export default VideoCard;