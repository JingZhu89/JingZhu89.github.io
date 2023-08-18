import React from "react";
import { Typography } from "@mui/material";
import { projects2 } from "../data";
import Project from "./Project";
import Grid from "@mui/material/Grid";

export const FunProjects = () => {
  return (
    <Grid
      container
      sx={{
        background: "var(--ifm-color-tertiary)",
        paddingTop: "50px",
        paddingBottom: "60px",
      }}
    >
      <Grid xs={12} item>
        <Typography
          variant="h4"
          sx={{
            color: "var(--ifm-color-fontColorWithBg)",
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <strong>Other Projects</strong>
        </Typography>
      </Grid>
      <Grid container sx={{ justifyContent: "center", alignItems: "center" }}>
        {projects2.map((project) => {
          return (
            <Grid
              xs={12}
              md={12}
              lg={4}
              item
              sx={{
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <Project
                imgSrc={project.imgSrc}
                title={project.title}
                description={project.description}
                tech={project.tech}
              />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default FunProjects;
