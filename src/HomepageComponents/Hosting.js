import React, { Component } from "react";
import ToggleSwitch from "react-toggle-switch";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
export class Hosting extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-6">
            <hr
              style={{
                borderLeft: "3px solid hsla(23, 95%, 52%,1)",
                height: "5vh",
                float: "left",
                width: "1px",
              }}
            />
            <h3 className="m-3">HOSTING PRICE TABLES</h3>
          </div>
          <p className="ml-3">
            Case read they must it of cold that. Speaking trifling an to
            unpacked moderated debating learning. An particular constrasted the
            excellence favorable on. Nay preference dispatched difficulty
            continuing joy one.{" "}
          </p>
        </div>
        <div className="text-center">
          <BootstrapSwitchButton checked={true} width={100} />
        </div>
      </React.Fragment>
    );
  }
}
export default Hosting;
