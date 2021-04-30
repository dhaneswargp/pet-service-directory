import constants from '../constants';

var initialState = {
    radius: 1000,
    lat:1,
    lng:1,
    category:"4d954af4a243a5684765b473,4bf58dd8d48988d1e5941735,5032897c91d4c4b30a586d69,4bf58dd8d48988d100951735",
    loading:'false'
}

export default(state= initialState, action) => {
    let newState = Object.assign({}, state)

    switch(action.type){
        
        case constants.UPDATE_RADIUS:
            newState['radius'] =  action.radius;
            return newState;

        case constants.UPDATE_LAT:
            newState['lat'] =  action.lat;
            newState['lng'] =  action.lng;
            return newState;

        case constants.UPDATE_CATEGORY:
            newState['category'] =  action.category;
            return newState;

        case constants.UPDATE_LNG:
            newState["lat"] = action.lat;
            newState["lng"] = action.lng;
            return newState;

        case constants.UPDATE_LOADING:
            newState["loading"] = action.loading;
            return newState;
        

        default:
            return state;

    }

}
