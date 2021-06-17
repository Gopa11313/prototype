import React, { Component } from "react";
import Services from "../HomepageComponents/Services";
import Skills from "../HomepageComponents/Skills";
import OurServices from "../HomepageComponents/OurServices";
import CleanAndMordern from "../HomepageComponents/CleanAndMordern";
import { Container } from "react-bootstrap";
import Hosting from "../HomepageComponents/Hosting";
import CardsPAy from "../HomepageComponents/CardsPAy";
import ContactUs from "../HomepageComponents/ContactUs";
import Footer from "../HomepageComponents/Footer";
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
        <Container>
          <Hosting />
          <CardsPAy />
        </Container>
        <ContactUs />
        <Footer />
      </React.Fragment>
    );
  }
}
export default Home;
