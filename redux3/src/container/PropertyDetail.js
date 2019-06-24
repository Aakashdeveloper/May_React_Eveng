import { connect } from 'react-redux';
import { fetchProperty } from '../actions';
import PropertyDetail from '../component/PropertyDetail';


export const mapStateToProps = (state) => {
    console.log('in details conatiner >>>', state);
    return {
        details: state.propertyReducer.details
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetails: (id) => {
            return dispatch(fetchProperty.getPropertyDetails(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyDetail);