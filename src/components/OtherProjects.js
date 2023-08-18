import React from "react";
import { Typography } from "@mui/material";
import { projects1 } from "../data";
import Project from "./Project";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const OtherProjects = () => {
  return (
    <Grid
      container
      sx={{
        background: "var(--ifm-color-secondary)",
        marginTop: "-40px",
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
        {projects1.map((project) => {
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
export default OtherProjects;
