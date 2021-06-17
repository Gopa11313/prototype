import React, { Component } from "react";
import photo from "../assest/photo.jpg";
import { Container, Button } from "react-bootstrap";
import tablet from "../assest/tablet.png";
export class CleanAndMordern extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${photo})`,
          }}
        >
          <Container>
            <div className="row" style={{ height: "100px" }}></div>
            <div
              className="row mt-5 pb-5"
              style={{
                width: "100%",
                height: "450px",
                backgroundcolor: "rgba(255, 255, 255, .4)",
              }}
            >
              <div className="col-7 text-light pt-2 mt-5">
                <p style={{ fontSize: "18px" }}>CLEAN AND MORDEN DESIGN</p>
                <div className="row">
                  <div className="col-3">
                    <hr className="bg-danger" style={{ height: "5px" }}></hr>
                  </div>
                </div>
                <p style={{ fontSize: "45px" }}>WHY YOU NEED A WEBSITE</p>
                <div className="mt-4">
                  <Button className="p-3 bg-dark " variant="dark">
                    CONTACT US
                  </Button>
                  <Button
                    className="p-3 ml-1"
                    style={{
                      "background-image":
                        "linear-gradient(255deg,  #DC143C 0%,#ff4e00 100%)",
                      border: "	#DC143C 1px solid",
                    }}
                  >
                    LEARN MORE
                  </Button>
                </div>
              </div>
              <div className="col-5 ">
                <img src={tablet} style={{ width: "100%", height: "100%" }} />
              </div>
            </div>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}
export default CleanAndMordern;
