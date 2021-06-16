import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export class CardsPAy extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row my-3 ml-3">
          <div className="col-sm shadow-lg m-3 bg-white rounded">
            <Card style={{ width: "100%", border: "none" }}>
              <Card.Body>
                <Card.Title className="text-center">INTRO</Card.Title>
                <h3 className="text-center">
                  $<span style={{ fontSize: "45px" }}>3</span>/mo
                </h3>
                <Card.Text
                  className="text-center mb-1"
                  style={{ backgroundColor: "#F5F5F5" }}
                >
                  3 Users
                </Card.Text>
                <Card.Text className="text-center bg-white mb-1">
                  5 Projects
                </Card.Text>
                <Card.Text
                  className="text-center mb-1"
                  style={{ backgroundColor: "#F5F5F5" }}
                >
                  99% Uptime
                </Card.Text>
                <Card.Text className="text-center bg-white mb-1">
                  100 Bandwith
                </Card.Text>
                <Card.Text
                  className="text-center mb-1"
                  style={{ backgroundColor: "#F5F5F5" }}
                >
                  5GB Storage
                </Card.Text>
                <Card.Text className="text-center bg-white mb-1">
                  24/7 Support
                </Card.Text>
                <Button
                  variant="dark"
                  className="mt-5 bg-dark"
                  style={{ width: "100%" }}
                >
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-sm shadow-lg m-3 bg-white rounded">
            <Card style={{ width: "100%", border: "none" }}>
              <Card.Body>
                <Card.Title
                  className="text-center"
                  style={{
                    color: "#ff4e00",
                  }}
                >
                  STUDIO
                </Card.Title>
                <h3
                  className="text-center"
                  style={{
                    color: "#ff4e00",
                  }}
                >
                  $<span style={{ fontSize: "45px" }}>10</span>/mo
                </h3>
                <Card.Text
                  className="text-center mb-1"
                  style={{ backgroundColor: "#F5F5F5" }}
                >
                  3 Users
                </Card.Text>
                <Card.Text className="text-center bg-white mb-1">
                  5 Projects
                </Card.Text>
                <Card.Text
                  className="text-center mb-1"
                  style={{ backgroundColor: "#F5F5F5" }}
                >
                  99% Uptime
                </Card.Text>
                <Card.Text className="text-center bg-white mb-1">
                  100 Bandwith
                </Card.Text>
                <Card.Text
                  className="text-center mb-1"
                  style={{ backgroundColor: "#F5F5F5" }}
                >
                  5GB Storage
                </Card.Text>
                <Card.Text className="text-center bg-white mb-1">
                  24/7 Support
                </Card.Text>
                <Button
                  variant="dark"
                  className="mt-5 bg-dark"
                  style={{
                    width: "100%",
                    "background-image":
                      "linear-gradient(255deg,  #DC143C 0%,#ff4e00 100%)",
                    border: "#DC143C 1px solid",
                  }}
                >
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-sm shadow-lg m-3 bg-white rounded">
            <Card style={{ width: "100%", border: "none" }}>
              <Card.Body>
                <Card.Title className="text-center">AGENCY</Card.Title>
                <h3 className="text-center">
                  $<span style={{ fontSize: "45px" }}>20</span>/mo
                </h3>
                <Card.Text
                  className="text-center mb-1"
                  style={{ backgroundColor: "#F5F5F5" }}
                >
                  20 Users
                </Card.Text>
                <Card.Text className="text-center bg-white mb-1">
                  Unlimited Projects
                </Card.Text>
                <Card.Text
                  className="text-center mb-1"
                  style={{ backgroundColor: "#F5F5F5" }}
                >
                  99% Uptime
                </Card.Text>
                <Card.Text className="text-center bg-white mb-1">
                  1TB Bandwith
                </Card.Text>
                <Card.Text
                  className="text-center mb-1"
                  style={{ backgroundColor: "#F5F5F5" }}
                >
                  100GB Storage
                </Card.Text>
                <Card.Text className="text-center bg-white mb-1">
                  24/7 Support
                </Card.Text>
                <Button
                  variant="dark"
                  className="mt-5 bg-dark"
                  style={{ width: "100%" }}
                >
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default CardsPAy;
