import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import Link from "@docusaurus/Link";
import OttoLogo from "./OttoLogo";
import Grid from "@mui/material/Grid";
import { ottoDesc } from "../data";

const Otto = () => {
  return (
    <Grid
      container
      sx={{
        alignItems: "center",
        background: "var(--ifm-color-introBg)",
        marginBottom: "-160px",
        marginTop: "-50px",
      }}
    >
      <Grid xs={12} item>
        <Typography
          variant="h4"
          sx={{ color: "var(--ifm-color-fontColor)", textAlign: "center" }}
        >
          <strong>Otto</strong> an open source <strong>ETL</strong> workflow
          automation tool
        </Typography>
      </Grid>
      <Grid xs={12} item>
        <Grid
          container
          sx={{
            alignItems: "top",
            justifyContent: "center",
            marginTop: "20px",
          }}
          spacing={4}
        >
          <Grid md={12} lg={5} item>
            <Box
              sx={{
                background: "var(--ifm-color-primary)",
                display: "flex",
                flexDirection: "column",
                padding: "40px",
                justifyContent: "center",
                boxShadow: "0px 5px 10px var(--ifm-drop-shadow)",
                margin: "10px",
                minHeight: "371.17px",
              }}
            >
              <Typography
                sx={{
                  color: "var(--ifm-color-fontColorWithBg)",
                  fontSize: "25px",
                }}
              >
                {ottoDesc}
              </Typography>
            </Box>
          </Grid>
          <Grid md={12} lg={5} item sx={{ margin: "10px" }}>
            <img
              src="img/homepage_workflow.gif"
              style={{
                boxShadow: "0px 5px 10px var(--ifm-drop-shadow)",
                maxHeight: "371.17px",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} item>
        <Grid container sx={{ alignItems: "center", justifyContent: "center" }}>
          <Grid xs={12} md={2} item>
            <OttoLogo />
          </Grid>
          <Grid xs={12} md={2} item sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              sx={{
                background: "var(--ifm-color-primary)",
                color: "var(--ifm-color-fontColorWithBg)",
                borderRadius: "100px",
                marginTop: "5px",
                height: "150px",
                width: "150px",
              }}
            >
              <Link href="https://www.otto-etl.com/case_study/">
                Read Case Study
              </Link>
            </Button>
          </Grid>
          <Grid xs={12} md={2} item sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              sx={{
                background: "var(--ifm-color-primary)",
                color: "var(--ifm-color-fontColorWithBg)",
                borderRadius: "100px",
                marginTop: "5px",
                height: "150px",
                width: "150px",
              }}
            >
              <Link href="https://www.otto-etl.com/presentation">
                Watch Presentation
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Otto;
