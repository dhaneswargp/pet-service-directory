import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import SimpleForm from "../containers/SimpleForm";
import SliderIp from "../containers/SliderIp";
import FoursquareDemo from "../containers/FoursquareDemo";
import CurrentLocation from "../containers/CurrentLocation";
import "./App.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="App">
              <div className="Head">
                  <div className="Header0">
                    <a href="https://www.healthcareforpets.com/"><img className="headerLogo" alt="" src={require("./hcfp_small_logo@3x.png")} height={70}/></a>
                  </div>
                  <div className="Header1">
                    Welcome to our FREE pet services global directory
                    <p className="headerLine2">
                    Indicate your location and let us find a service for your pet near you!
                    </p>
                  </div>
              </div>
              <div className="sponsorBannerContainerStyle">
                <a href="https://www.healthcareforpets.com/" className="sponsorBannerStyle" style={{ textDecoration: 'none' }}>Sponsored by www.healthcareforpets.com</a>
              </div>
              <div className="Text-inp">
                  <SimpleForm />
                  <div className="Geo-Locator">
                    <p>or</p>
                    <div className="locationWrapper">
                    <div className="locationLink">
                    <img src={require("./locationfinder.png")} alt="" height={20}/>
                      <CurrentLocation />
                    </div>
                    </div>
                  </div>
              </div>
              <div className="Slider-inp">
                <SliderIp />
              </div>
              <div className="Data-disp">
                  <FoursquareDemo />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>
    );
  }
}

export default App;
