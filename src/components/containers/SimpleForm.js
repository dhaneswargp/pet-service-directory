import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { connect } from "react-redux";
import actions from "../../actions";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../layout/App.css";
import "react-dropdown/style.css";

import CircularProgress from '@material-ui/core/CircularProgress';

class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      loading:'false'
    };
  }

  onChange = (address, lat, lng) => {
    this.setState({ address });
  };

  handlePlaceSelect = (address, placeId) => {

    let loading = 'true'
    this.props.updateLoading(loading);
    
    geocodeByAddress(address)
      .then(results => {
        getLatLng(results[0])
          .then(response => {
            let { lat, lng } = response;
            this.props.updateLat(lat, lng);
            this.setState({
              address
            });

            let loading = 'false'
            this.props.updateLoading(loading);
          })
          .catch(error => {
            console.error("Error", error);
          });
      })
      .catch(error => {
        console.error("Error", error);
      });
  };

  render() {

    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
      placeholder: "Type your location or address..."
    };

    const renderSuggestion = ({ formattedSuggestion }) => (
      <div>
        <img src={require("../layout/placeholder_suggestion.png")} width={18} alt="Place-marker"/> &#160;
        <strong>{ formattedSuggestion.mainText }</strong>{' '}
        <small>{ formattedSuggestion.secondaryText }</small>
      </div>
    )
  
if(this.state.loading === 'false'){
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <PlacesAutocomplete
            inputProps={inputProps}
            onSelect={(address, placeId) =>
              this.handlePlaceSelect(address, placeId)
            }
            renderSuggestion={renderSuggestion}
          />
        </form>
      </div>
    );
  }else
  return (
    <div>
      <form onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete
          inputProps={inputProps}
          onSelect={(address, placeId) =>
            this.handlePlaceSelect(address, placeId)
          }
          renderSuggestion={renderSuggestion}
        />
      </form>
      <CircularProgress color="secondary" /> 
    </div>
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
    updateLat: (lat, lng) => dispatch(actions.updateLat(lat, lng)),
    updateLoading: (loading) => dispatch(actions.updateLoading(loading))
  };
};

export default connect(stateToProps, dispatchToProps)(SimpleForm);
