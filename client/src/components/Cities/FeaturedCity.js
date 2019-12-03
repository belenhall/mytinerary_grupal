import React, { Component, Fragment } from "react";
import myImages from "../../Assets/Resources/myImages";
import myTexts from "../../Assets/Resources/myTexts";
import UserItinerary from "../Itinerary/UserItinerary";
import { connect } from "react-redux";
import { reduxFetch } from "../../store/actions/reduxFetch";
import {
  requestItineraries,
  requestItinerariesSuccess,
  requestActivities,
  requestActivitiesSuccess
} from "../../store/actions/itineraryActions";

const mapStateToProps = state => {
  return {
    itineraries: state.itineraries.itineraries,
    activities: state.itineraries.activities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItineraries: navData =>
      dispatch(
        reduxFetch(
          `/api/itineraries/${navData}`,
          requestItineraries,
          requestItinerariesSuccess
        )
      ),
    getActivities: navData =>
      dispatch(
        reduxFetch(
          `/api/activities/${navData}`,
          requestActivities,
          requestActivitiesSuccess
        )
      )
  };
};

class FeaturedCity extends Component {
  componentDidMount() {
    const { getItineraries } = this.props;
    getItineraries(this.props.city);
   /* const { getActivities } = this.props;
    getActivities(this.props.city);*/
  }
  render() {
    const { itineraries } = this.props;
    console.log(
      `FEATURED ITINERARIES FOR ${this.props.city}: ${JSON.stringify(
        itineraries
      )}`
    );
    const itineraryList = itineraries.map((itinerary, index) => (
      <UserItinerary
        city={this.props.city}
        title={itinerary.title}
        duration={itinerary.duration}
        likes={itinerary.rating}
        priceRange={`$${itinerary.price}`}
        hashtags={itinerary.hashtags}
        userActivities={itinerary.activities}
        accordionKey={index}
      />
    ));

    return (
      <Fragment>
      <div className="singleCity" class="container col-md-12">
         <h1 className="featTitle">{this.props.city.replace(/[_]/, " ")}</h1>
      <div className="row col-md-12">
          <div className="col-md-3 col-sd-2">
            <img className="featPic" src={myImages.cities[this.props.city]}></img>    
          </div>
          <div className="col-md-9 col-sd-14">
              <h6 className="rounded cityDescript">{myTexts.cities[this.props.city]}</h6  >
          </div>
      </div> 
      <div>
          {itineraryList}
      </div>
    </div>
  </Fragment>
    );
  }
}

const ReduxFeaturedCity = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedCity);
export default ReduxFeaturedCity;
