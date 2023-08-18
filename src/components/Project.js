import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

const Project = ({ imgSrc, title, description, tech }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "400px",
        height: "600px",
        boxShadow: "0px 5px 10px var(--ifm-drop-shadow)",
        borderRadius: "30px",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          background: "var(--ifm-color-introBg)",
          width: "100%",
          height: "60%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
        }}
      >
        <img
          src={imgSrc}
          style={{
            width: "70%",
            borderRadius: "10px",
          }}
        />
      </Box>
      <Box
        sx={{
          background: "white",
          height: "40%",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          borderBottomLeftRadius: "30px",
          borderBottomRightRadius: "30px",
        }}
      >
        <Typography
          variant="h6"
          textAlign="center"
          sx={{
            color: "var(--ifm-color-primary-darkest)",
            margin: "20px",
          }}
        >
          <strong>{title}</strong>
        </Typography>
        <Divider variant="middle" />
        <Box
          sx={{
            height: "60%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "left",
          }}
        >
          <Typography
            textAlign="left"
            sx={{
              color: "var(--ifm-color-primary-darkest)",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
            {description}
          </Typography>
          <Typography
            textAlign="left"
            sx={{
              color: "var(--ifm-color-primary-darkest)",
              marginLeft: "20px",
              marginRight: "20px",
              marginTop: "auto",
            }}
          >
            {tech}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
