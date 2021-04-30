import React, { Component } from "react";
import Slider from "react-rangeslider";
import { connect } from "react-redux";
import actions from "../../actions";
import { Container, Row, Col } from "reactstrap";
import "../layout/App.css";
import "../../../node_modules/react-rangeslider/lib/index.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

class SliderIp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrcZero: require("../layout/all_after.png"),
      imgSrcOne: require("../layout/dog_run_icon_before@3x.png"),
      imgSrcTwo: require("../layout/animal_hospital_icon_before@3x.png"),
      imgSrcThree: require("../layout/pet_services_icon_before@3x.png"),
      imgSrcFour: require("../layout/pet_store_icon_before@3x.png"),
      imgText1: "imgText1after",
      imgText2: "imgText2before",
      imgText3: "imgText3before",
      imgText4: "imgText4before",
      imgText5: "imgText5before"
    };

    this.buttonZero = this.buttonZero.bind(this);
    this.buttonOne = this.buttonOne.bind(this);
    this.buttonTwo = this.buttonTwo.bind(this);
    this.buttonThree = this.buttonThree.bind(this);
    this.buttonFour = this.buttonFour.bind(this);
  }

  handleOnChange = value => {
    this.props.updateRadius(value);
  };

  buttonZero() {
    let categ =
      "4d954af4a243a5684765b473,4bf58dd8d48988d1e5941735,5032897c91d4c4b30a586d69,4bf58dd8d48988d100951735";
    this.props.updateCategory(categ);
    this.setState({
      imgSrcZero: require("../layout/all_after.png"),
      imgSrcOne: require("../layout/dog_run_icon_before@3x.png"),
      imgSrcTwo: require("../layout/animal_hospital_icon_before@3x.png"),
      imgSrcThree: require("../layout/pet_services_icon_before@3x.png"),
      imgSrcFour: require("../layout/pet_store_icon_before@3x.png"),

      imgText1: "imgText1after",
      imgText2: "imgText2before",
      imgText3: "imgText3before",
      imgText4: "imgText4before",
      imgText5: "imgText5before"
    });
  }

  buttonOne() {
    let categ = "4bf58dd8d48988d1e5941735";
    this.props.updateCategory(categ);
    this.setState({
      imgSrcZero: require("../layout/all_before.png"),
      imgSrcOne: require("../layout/dog_run_icon_after@3x.png"),
      imgSrcTwo: require("../layout/animal_hospital_icon_before@3x.png"),
      imgSrcThree: require("../layout/pet_services_icon_before@3x.png"),
      imgSrcFour: require("../layout/pet_store_icon_before@3x.png"),

      imgText1: "imgText1before",
      imgText2: "imgText2after",
      imgText3: "imgText3before",
      imgText4: "imgText4before",
      imgText5: "imgText5before"
    });
  }
  buttonTwo() {
    let categ = "4d954af4a243a5684765b473";
    this.props.updateCategory(categ);
    this.setState({
      imgSrcZero: require("../layout/all_before.png"),
      imgSrcOne: require("../layout/dog_run_icon_before@3x.png"),
      imgSrcTwo: require("../layout/animal_hospital_icon_after@3x.png"),
      imgSrcThree: require("../layout/pet_services_icon_before@3x.png"),
      imgSrcFour: require("../layout/pet_store_icon_before@3x.png"),

      imgText1: "imgText1before",
      imgText2: "imgText2before",
      imgText3: "imgText3after",
      imgText4: "imgText4before",
      imgText5: "imgText5before"
    });
  }
  buttonThree() {
    let categ = "5032897c91d4c4b30a586d69";
    this.props.updateCategory(categ);
    this.setState({
      imgSrcZero: require("../layout/all_before.png"),
      imgSrcOne: require("../layout/dog_run_icon_before@3x.png"),
      imgSrcTwo: require("../layout/animal_hospital_icon_before@3x.png"),
      imgSrcThree: require("../layout/pet_services_icon_after@3x.png"),
      imgSrcFour: require("../layout/pet_store_icon_before@3x.png"),

      imgText1: "imgText1before",
      imgText2: "imgText2before",
      imgText3: "imgText3before",
      imgText4: "imgText4after",
      imgText5: "imgText5before"
    });
  }
  buttonFour() {
    let categ = "4bf58dd8d48988d100951735";
    this.props.updateCategory(categ);
    this.setState({
      imgSrcZero: require("../layout/all_before.png"),
      imgSrcOne: require("../layout/dog_run_icon_before@3x.png"),
      imgSrcTwo: require("../layout/animal_hospital_icon_before@3x.png"),
      imgSrcThree: require("../layout/pet_services_icon_before@3x.png"),
      imgSrcFour: require("../layout/pet_store_icon_after@3x.png"),

      imgText1: "imgText1before",
      imgText2: "imgText2before",
      imgText3: "imgText3before",
      imgText4: "imgText4before",
      imgText5: "imgText5after"
    });
  }

  render() {
    return (
      <div>
        <Container className="imageButton">
          <Row>
            <Col>
              <a>
                <img
                  className="IconImage"
                  src={this.state.imgSrcZero}
                  alt=""
                  height={50}
                  width={50}
                  onClick={this.buttonZero}
                  onMouseOver={this.handleMouseOverZero}
                  onMouseOut={this.handleMouseOutZero}
                />
              <p  className={this.state.imgText1}                   
                  onClick={this.buttonZero}
                  onMouseOver={this.handleMouseOverZero}
                  onMouseOut={this.handleMouseOutZero}
                  style={{cursor:'pointer'}}
              > 
                All
              </p>
              </a>
            </Col>
            <Col>
              <a>
                <img
                  className="IconImage"
                  src={this.state.imgSrcTwo}
                  alt=""
                  height={50}
                  width={50}
                  onClick={this.buttonTwo}
                  onMouseOver={this.handleMouseOverTwo}
                  onMouseOut={this.handleMouseOutTwo}
                />
              </a>
              <p  className={this.state.imgText3}
                  onClick={this.buttonTwo}
                  onMouseOver={this.handleMouseOverTwo}
                  onMouseOut={this.handleMouseOutTwo}
                  style={{cursor:'pointer'}}
              >
                Clinics
              </p>
            </Col>
            <Col>
              <a>
                <img
                  className="IconImage"
                  src={this.state.imgSrcFour}
                  alt=""
                  height={50}
                  width={50}
                  onClick={this.buttonFour}
                  onMouseOver={this.handleMouseOverFour}
                  onMouseOut={this.handleMouseOutFour}
                />
              </a>
              <p className={this.state.imgText5}
                  onClick={this.buttonFour}
                  onMouseOver={this.handleMouseOverFour}
                  onMouseOut={this.handleMouseOutFour}
                  style={{cursor:'pointer'}}             
              >
                Stores
              </p>
            </Col>
            <Col>
              <a>
                <img
                  className="IconImage"
                  src={this.state.imgSrcThree}
                  alt=""
                  height={50}
                  width={50}
                  onClick={this.buttonThree}
                  onMouseOver={this.handleMouseOverThree}
                  onMouseOut={this.handleMouseOutThree}
                />
              </a>
              <p  className={this.state.imgText4}
                  onClick={this.buttonThree}
                  onMouseOver={this.handleMouseOverThree}
                  onMouseOut={this.handleMouseOutThree}
                  style={{cursor:'pointer'}}
              >
                Services
              </p>
            </Col>
            <Col>
              <a>
                <img
                  className="IconImage"
                  src={this.state.imgSrcOne}
                  alt=""
                  height={50}
                  width={50}
                  onClick={this.buttonOne}
                  onMouseOver={this.handleMouseOverOne}
                  onMouseOut={this.handleMouseOutOne}
                />
              </a>
              <p  className={this.state.imgText2}
                  onClick={this.buttonOne}
                  onMouseOver={this.handleMouseOverOne}
                  onMouseOut={this.handleMouseOutOne}
                  style={{cursor:'pointer'}}
              >
                Parks
              </p>
            </Col>
          </Row>
        </Container>
        <Slider
          value={this.props.radius}
          orientation="horizontal"
          onChange={this.handleOnChange}
          min={300}
          max={1000}
          step={50}
          labels={{ 300: "Nearest", 1000: "Furthest" }}
        />
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    radius: state.address.radius
  };
};

const dispatchToProps = dispatch => {
  return {
    updateRadius: radius => dispatch(actions.updateRadius(radius)),
    updateCategory: category => dispatch(actions.updateCategory(category))
  };
};

export default connect(stateToProps, dispatchToProps)(SliderIp);
