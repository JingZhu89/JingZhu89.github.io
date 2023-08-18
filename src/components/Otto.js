import React from "react";
import { Container, Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import Link from "@docusaurus/Link";
import OttoLogo from "./OttoLogo";
const Otto = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "var(--ifm-color-introBg)",
        marginBottom: "-160px",
        marginTop: "-50px",
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "var(--ifm-color-fontColor)", textAlign: "center" }}
      >
        <strong>Otto</strong> an open source <strong>ETL</strong> workflow
        automation tool
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            background: "var(--ifm-color-primary)",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            paddingLeft: "140px",
            paddingRight: "140px",
            justifyContent: "center",
            marginLeft: "200px",
            marginTop: "40px",
            marginBottom: "0",
            marginRight: "40px",
            boxShadow: "0px 5px 10px var(--ifm-drop-shadow)",
          }}
        >
          <Typography sx={{ color: "var(--ifm-color-fontColorWithBg)" }}>
            Place hoder place holder Place hoder place holder Place hoder place
            holder Place hoder place holder Place hoder place holder Place hoder
            place holder Place hoder place holder Place hoder place holder Place
            hoder place holder Place hoder place holder Place hoder place holder
          </Typography>
        </Box>
        <img
          height="400px"
          src="img/workflow.png"
          style={{
            boxShadow: "0px 5px 10px var(--ifm-drop-shadow)",
            marginRight: "200px",
            marginTop: "40px",
          }}
        />
      </Box>
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <OttoLogo />
        <Button
          variant="contained"
          sx={{
            background: "var(--ifm-color-primary)",
            color: "var(--ifm-color-fontColorWithBg)",
            borderRadius: "100px",
            height: "150px",
            width: "150px",
          }}
        >
          <Link href="https://www.otto-etl.com/case_study/">
            Read Case Study
          </Link>
        </Button>
        <Button
          variant="contained"
          sx={{
            background: "var(--ifm-color-primary)",
            color: "var(--ifm-color-fontColorWithBg)",
            marginLeft: "20px",
            borderRadius: "100px",
            height: "150px",
            width: "150px",
          }}
        >
          <Link href="https://www.otto-etl.com/presentation">
            Watch Presentation
          </Link>
        </Button>
      </Box>
    </Container>
  );
};

export default Otto;
