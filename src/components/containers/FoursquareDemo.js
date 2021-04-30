import React, { Component } from "react";
import { connect } from "react-redux";
import "../layout/App.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import actions from "../../actions";
import CircularProgress from '@material-ui/core/CircularProgress';

import teal from '@material-ui/core/colors/teal';


var foursquare = require("react-foursquare")({

  // clientID: process.env.REACT_APP_FOURSQAURE_CLIENTID,
  // clientSecret: process.env.REACT_APP_FOURSQAURE_CLIENTSECRET
  clientID: 'VWE0CMIYX53YWDLZ05GH1XIOWAUSYGOTJEBZYV2VNZ1GXTBY',
  clientSecret: 'X1FMN5MPBZUZKARG2LG3KCMYT3MHQ3VPS2G3XFJDCYEVKRBS'

});

class FoursquareDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    let params = {
      ll: this.props.lat + ", " + this.props.lng,
      categoryId: this.props.category,
      radius: this.props.radius,
      limit: 50
    };
    this.fetchPlaces(params);
  }

  componentWillReceiveProps(nextProps) {
    let params = {
      ll: nextProps.lat + ", " + nextProps.lng,
      categoryId: nextProps.category,
      radius: nextProps.radius,
      limit: 50
    };
    this.fetchPlaces(params);
  }

  fetchPlaces = params => {
    foursquare.venues
      .getVenues(params)
      .then(res => {
        this.setState({ items: res.response.venues });
        console.log(this.state.items)
      })
      .catch(err => {
        console.log("err: ", err);
      });
  };

  render() {
    const CondRender = props => {
      const ivan = this.props.lng;
      if(this.props.loading === 'true'){
        return(
          <div><CircularProgress style={{ color: teal[500 ] }} variant='indeterminate' color='inherit'  size={60} /></div>
        );
      }else
      if (ivan === 1) {
        return (
          <div className="EmptyResults">
            <p></p>
          </div>
        );
      } else
      if (this.state.items.length === 0) {
        return (
          <div className="EmptyResults">
            <p>Sorry, no results matching your search criteria were found</p>
          </div>
        );      
      } else {
        return (
          <div className="ListBlock">
            {this.state.items.map(item => {
              if (
                item.categories[0].id === "4d954af4a243a5684765b473" ||
                item.categories[0].id === "4bf58dd8d48988d1e5941735" ||
                item.categories[0].id === "5032897c91d4c4b30a586d69" ||
                item.categories[0].id === "4bf58dd8d48988d100951735"
              )
                return (
                  <div
                    className={(() => {
                      switch (item.categories[0].id) {
                        case "4bf58dd8d48988d1e5941735":
                          return "ListItem";
                        case "4d954af4a243a5684765b473":
                          return "ListItem2";
                        case "5032897c91d4c4b30a586d69":
                          return "ListItem3";
                        case "4bf58dd8d48988d100951735":
                          return "ListItem4";
                        default:
                          return null;
                      }
                    })()}
                    key={item.id}
                  >
                    <div className="listIcon">
                      <img
                        className="listIconImg"
                        src={(() => {
                          switch (item.categories[0].id) {
                            case "4bf58dd8d48988d1e5941735":
                              return require("../layout/dog_run_icon_before_old@3x.png");
                            case "4d954af4a243a5684765b473":
                              return require("../layout/animal_hospital_icon_before_old@3x.png");
                            case "5032897c91d4c4b30a586d69":
                              return require("../layout/pet_services_icon_before_old@3x.png");
                            case "4bf58dd8d48988d100951735":
                              return require("../layout/pet_store_icon_before_old@3x.png");
                            default:
                              return null;
                          }
                        })()}
                        alt=""
                        height={50}
                      />
                    </div>
                    <div className="listDetails">
                      <h5 className="Head5">{item.name}</h5>
                      <h6 className="Head6">
                        {item.location.formattedAddress}
                        {/* {item.location.address}, {item.location.city}, {item.location.state} {item.location.postalCode}, {item.location.country} */}
                      </h6>
                      {/* <h6>{item.categories[0].id}</h6> */}
                      {/* <br /> */}
                      <a className="WebLink" href={item.url} target="_blank">
                        {item.url}
                      </a>
                      <br />
                    </div>
                    <div className="listButton">
                      <a
                        className="DirectionsText"
                        target="_blank"
                        href={
                          "https://www.google.com/maps/dir/?api=1&origin=" +
                          this.props.lat +
                          "," +
                          this.props.lng +
                          "&destination=" +
                          item.location.lat +
                          "," +
                          item.location.lng +
                          "&travelmode=walking"
                        }
                      >
                        <button
                          className={(() => {
                            switch (item.categories[0].id) {
                              case "4bf58dd8d48988d1e5941735":
                                return "ButtonColor";
                              case "4d954af4a243a5684765b473":
                                return "ButtonColor2";
                              case "5032897c91d4c4b30a586d69":
                                return "ButtonColor3";
                              case "4bf58dd8d48988d100951735":
                                return "ButtonColor4";
                              default:
                                return null;
                            }
                          })()}
                        >
                          Get directions
                        </button>
                      </a>
                      {item.location.distance}
                    </div>
                  </div>
                );
            })}
          </div>
        );
      }
    };
    return <div>{CondRender()}</div>;
  }
}

const stateToProps = state => {
  return {
    lat: state.address.lat,
    lng: state.address.lng,
    radius: state.address.radius,
    category: state.address.category,
    loading: state.address.loading
  };
};

const dispatchToProps = dispatch => {
  return {
    updateLoading: (loading) => dispatch(actions.updateLoading(loading))
  };
};

export default connect(stateToProps, dispatchToProps)(FoursquareDemo);
