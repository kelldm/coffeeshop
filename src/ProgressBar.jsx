import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Progress = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 5px;
`;

const ProgressFill = styled.div`
  width: ${(props) => props.progress}%;
  background-color: ${(props) =>
    props.progress === 100 ? "#4caf50" : "#e27b36"};
  height: 20px;
  border-radius: 5px;
  transition: width 0.3s ease;
`;

const ProgressText = styled.p`
  text-align: center;
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => (props.progress === 100 ? "#4caf50" : "#333")};
`;

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 500); // Increment by 10% every 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Progress>
        <ProgressFill progress={progress} />
      </Progress>
      <ProgressText progress={progress}>
        {progress === 100 ? "Coffee!" : `${progress}%`}
      </ProgressText>
    </div>
  );
};
