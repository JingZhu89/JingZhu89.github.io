import React from "react";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { projects1 } from "../data";
import { Stack } from "@mui/system";
import Project from "./Project";

const OtherProjects = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        background: "var(--ifm-color-secondary)",
        marginTop: "-100px",
        paddingBottom: "50px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "var(--ifm-color-fontColorWithBg)",
          textAlign: "center",
          marginTop: "60px",
          marginBottom: "60px",
        }}
      >
        <strong>Other Projects</strong>
      </Typography>
      <Stack
        direction="row"
        spacing={10}
        maxWidth="auto"
        alignItems="top"
        justifyContent="top"
        sx={{ marginBottom: "50px" }}
      >
        {projects1.map((project) => (
          <Project
            imgSrc={project.imgSrc}
            title={project.title}
            description={project.description}
            tech={project.tech}
          />
        ))}
      </Stack>
    </Container>
  );
};
export default OtherProjects;
