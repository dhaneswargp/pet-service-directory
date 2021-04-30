import constants from '../constants';

export default{
    
    updateRadius: (radius) =>{
        return{
            type:constants.UPDATE_RADIUS,
            radius: radius
        }
    },

    updateLat: (lat, lng) => {
        return{
            type:constants.UPDATE_LAT,
            lat: lat,
            lng: lng,
        }

    },

    updateCategory: (category) => {
        return{
            type:constants.UPDATE_CATEGORY,
            category: category
        }

    },

    updateLng: (lat, lng) => {
        return {
          type: constants.UPDATE_LNG,
          lat: lat,
          lng: lng
        };
    },

    updateLoading: (loading) => {
        return{
            type: constants.UPDATE_LOADING,
            loading:loading
        }
    }
    
}