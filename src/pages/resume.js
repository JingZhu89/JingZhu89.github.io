import React from "react";
import { jing } from "../data";
import { Container } from "@mui/system";

const Resume = () => {
  return (
    <Container>
      <embed
        src={jing.resume}
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </Container>
  );
};

export default Resume;
