import React, { Component } from "react";
import Services from "../HomepageComponents/Services";
import Skills from "../HomepageComponents/Skills";
import OurServices from "../HomepageComponents/OurServices";
import CleanAndMordern from "../HomepageComponents/CleanAndMordern";
import { Container } from "react-bootstrap";
export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Services />
        </Container>
        <Skills />
        <Container>
          <OurServices />
        </Container>
        <CleanAndMordern />
      </React.Fragment>
    );
  }
}
export default Home;
