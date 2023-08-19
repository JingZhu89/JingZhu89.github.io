import React from "react";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Link from "@docusaurus/Link";
import Button from "@mui/material/Button";
import { jing } from "../data";
import Grid from "@mui/material/Grid";

const Intro = () => {
  return (
    <Grid
      container
      sx={{
        padding: "5% 10% 5% 10%",
        background: "var(--ifm-color-primary)",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "-30px",
      }}
    >
      <Grid xs={12} md={1} item>
        <Grid
          container
          sx={{ justifyContent: "center", alignItems: "center" }}
          spacing={1.5}
        >
          <Grid xs="auto" md={12} item>
            <a href={jing.resume} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ifm-color-fontColorWithBg)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-file-text"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" x2="8" y1="13" y2="13" />
                <line x1="16" x2="8" y1="17" y2="17" />
                <line x1="10" x2="8" y1="9" y2="9" />
              </svg>
            </a>
          </Grid>
          <Grid xs="auto" md={12} item>
            <a href={jing.github} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ifm-color-fontColorWithBg)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          </Grid>
          <Grid xs="auto" md={12} item>
            <a href={jing.linkedin} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ifm-color-fontColorWithBg)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </Grid>
          <Grid xs="auto" md={12} item>
            <a href={`mailto:${jing.email}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ifm-color-fontColorWithBg)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} md={4} item>
        <Box
          sx={{
            marginLeft: "10px",
            marginRight: "10px",
            justifyContent: "center",
          }}
        >
          <Avatar
            src={jing.image}
            alt={jing.name}
            sx={{
              width: "100%",
              height: "auto",
              // maxWidth: "350px",
            }}
          />
        </Box>
      </Grid>
      <Grid xs={12} md={7} item>
        <Box
          sx={{
            background: "var(--ifm-color-introBg)",
            width: "auto",
            marginLeft: "25px",
            marginRight: "25px",
            borderRadius: "30px",
            display: "flex",
            flexDirection: "column",
            padding: "30px",
            alignItem: "center",
            justifyContent: "center",
            maxWidth: "600px",
          }}
        >
          <Typography sx={{ color: "var(--ifm-color-fontColor)" }} variant="h4">
            <strong>Hello, I'm Jing Zhu</strong>
          </Typography>
          <Typography
            sx={{
              marginTop: "20px",
              color: "var(--ifm-color-fontColor)",
              fontSize: "20px",
            }}
          >
            I'm a software engineer in St.Louis, Missouri.
            <br />
            <br />
            Recently, I built Otto, an open-source, <strong>ETL</strong> (
            <strong> E</strong>
            xtract, <strong> T</strong>ransform and
            <strong> L</strong>oad) data pipeline workflow automation tool.
          </Typography>
          <Box sx={{ marginTop: "20px", alignItems: "left" }}>
            <Button
              variant="contained"
              sx={{
                background: "var(--ifm-color-primary)",
                color: "var(--ifm-color-fontColorWithBg)",
                marginRight: "20px",
                marginBottom: "5px",
              }}
            >
              <Link href="https://www.otto-etl.com/case_study/">
                Otto Case Study
              </Link>
            </Button>
            <Button
              variant="contained"
              sx={{
                background: "var(--ifm-color-primary)",
                color: "var(--ifm-color-fontColorWithBg)",
                marginBottom: "5px",
              }}
            >
              <Link href="">Resume</Link>
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Intro;
