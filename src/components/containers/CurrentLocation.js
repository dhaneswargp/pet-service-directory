import React from "react";
import { connect } from "react-redux";
import actions from "../../actions";

class CurrentLocation extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    let loading = 'true'
    this.props.updateLoading(loading);
 
    var getPosition = function(options) {
      return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
      });
    };

    getPosition()
      .then(position => {
        let lng = position.coords.longitude;
        let lat = position.coords.latitude;
        this.props.updateLng(lat, lng);

        let loading = 'false' 
        this.props.updateLoading(loading);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
        <a className="Geo-Locator-Link" href="#" onClick={this.handleClick}>
          &#160; Click to find my current location
        </a>
    );
  }
}

const stateToProps = state => {
  return {
    lat: state.address.lat,
    lng: state.address.lng
  };
};

const dispatchToProps = dispatch => {
  return {
    updateLng: (lat, lng) => dispatch(actions.updateLng(lat, lng)),
    updateLoading: (loading) => dispatch(actions.updateLoading(loading))
  };
};

export default connect(stateToProps, dispatchToProps)(CurrentLocation);
