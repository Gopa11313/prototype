import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Play } from "react-bootstrap-icons"
import info from '../assest/info.jpg'
export class Services extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="text-center my-3" style={{ fontSize: '50px', fontWeight: 'bold' }}>SERVICES</h1>
                <div className="row my-5">
                    <div className="col-7">
                        <p style={{ fontSize: "40px" }}>INTUTIVE DESIGN IS HOW WE GIVE THE USER NEW SUPERPOWER</p>
                        <hr className="bg-danger"></hr>
                        <p>You only get one chnace to make a first impression with your prospective clients. In the most cases, that first
                            impression is a visit to your website.
                        </p>
                        <p>The websites we produce provide a clean look that showcases your business. All of your websites are a unique
                            design with full responsiveness that is mobile ready. The ensures your websites is an assest to your visitors,
                            not a drivesion to your business.</p>
                        <Button className="p-3" style={{"background-image": "linear-gradient(255deg,  #DC143C 0%,#ff4e00 100%)","border": "	#DC143C 1px solid"}}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-play" viewBox="0 0 18 18">
                            <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                        </svg> SEE HOW WE WORK</Button>

                    </div>
                    <div className="col-5">
                        <img src={info}
                        style={{height:"100%",width:"100%"}}
                        />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Services;