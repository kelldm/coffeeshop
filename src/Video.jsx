import React, { useState } from "react";
import styled from "styled-components";

// Dados dos vídeos do YouTube (URLs dos vídeos)
const videoData = [
  "https://www.youtube.com/watch?v=j9pobAwZW7Y&pp=ygUScGxheWxpc3QgZGUgY2Fmw6lz",
  "https://www.youtube.com/watch?v=ICAmVDO8O6c&pp=ygUScGxheWxpc3QgZGUgY2Fmw6lz",
  "https://www.youtube.com/watch?v=-qzIuvflNAU&pp=ygUScGxheWxpc3QgZGUgY2Fmw6lz",
  "https://www.youtube.com/watch?v=ygedg03NpUQ&pp=ygUScGxheWxpc3QgZGUgY2Fmw6lz",
  "https://www.youtube.com/watch?v=fTb6yJ7AlT8&pp=ygUScGxheWxpc3QgZGUgY2Fmw6lz",
  "https://www.youtube.com/watch?v=X59TpY0qtHE&pp=ygUScGxheWxpc3QgZGUgY2Fmw6lz",
];

// Função para gerar a URL da miniatura do vídeo
const getThumbnailUrl = (url) => {
  const videoId = url.split("v=")[1].split("&")[0];
  return `https://img.youtube.com/vi/${videoId}/0.jpg`;
};

// Styled Components
const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  padding: 2rem;
  box-sizing: border-box;

  @media (min-width: 768px) and (max-width: 999px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const VideoCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const VideoThumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const IframeContainer = styled.div`
  position: relative;
  padding-top: 56.25%;
  height: 0;
  overflow: hidden;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const VideoList = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleVideoClick = (videoUrl) => {
    setActiveVideo(videoUrl);
  };

  return (
    <VideoContainer>
      {videoData.map((videoUrl, index) => (
        <VideoCard key={index}>
          {activeVideo === videoUrl ? (
            <IframeContainer>
              <Iframe
                src={`https://www.youtube.com/embed/${
                  videoUrl.split("v=")[1].split("&")[0]
                }`}
                allowFullScreen
                title={`Video ${index + 1}`}
              />
            </IframeContainer>
          ) : (
            <div onClick={() => handleVideoClick(videoUrl)}>
              <VideoThumbnail
                src={getThumbnailUrl(videoUrl)}
                alt={`Vídeo ${index + 1}`}
              />
            </div>
          )}
        </VideoCard>
      ))}
    </VideoContainer>
  );
};

export default VideoList;
