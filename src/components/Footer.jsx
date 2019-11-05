import React from "react";
import { Container } from "reactstrap";

function Footer(props) {
  return (
    <footer
      className="footer"
      style={{
        background:
          "radial-gradient(ellipse at bottom, #171941 30%, #10112d 80%)"
      }}
    >
      <Container>
        <h1 className="title">
          {" "}
          Whatever you do, do it with love and passion.{" "}
        </h1>
      </Container>
    </footer>
  );
}

export default Footer;
