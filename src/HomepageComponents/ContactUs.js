import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
export class ContactUs extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="bg-dark">
          <Container>
            <div className="p-5">
              <h3 className="text-light">
                LET'S TALK ABOUT YOUR PROJECT TODAY
              </h3>
              <div className="row mt-3">
                <div className="col-8">
                  <p className="text-light" style={{ fontSize: "15px" }}>
                    Case read they must it of cold that. Speaking triffing an to
                    unpacked moderate debating learning. An particular
                    constrasted he excellence favorable on. Nay preference
                    dispatched difficulty countinuing joy me.
                  </p>
                  <Button variant="light" className="bg-dark text-light p-2">
                    Contact US Today
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}
export default ContactUs;
