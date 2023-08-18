import React from "react";
import { Box } from "@mui/system";
const Wave = ({ color, bg }) => {
  return (
    <Box
      sx={{
        background: bg,
        overflow: "hidden",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 250"
        height="100%"
        style={{ minWidth: "1200px" }}
      >
        <path
          fill={color}
          fill-opacity="1"
          d="M0,32L30,37.3C60,43,120,53,180,53.3C240,53,300,43,360,58.7C420,75,480,117,540,133.3C600,149,660,139,720,122.7C780,107,840,85,900,85.3C960,85,1020,107,1080,128C1140,149,1200,171,1260,154.7C1320,139,1380,85,1410,58.7L1440,32L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
    </Box>
  );
};

export default Wave;
