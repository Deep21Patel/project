import React from "react";
import { Container } from "reactstrap";
import "../../Styles/commonSection.css";
function CommoSection({ title }) {
  return (
    <section className="Common_section">
      <Container className="text-center">
        <h1>{title}</h1>
      </Container>
    </section>
  );
}

export default CommoSection;
