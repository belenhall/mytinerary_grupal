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
   /* const { activities } = this.props;
    console.log(activities);*/
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
        /*activities={itinerary.activities.filter(activity =>
          itinerary.activities.includes(activity)
        )}*/
      />
    ));

    return (
      <Fragment>
        <h1>{this.props.city.replace(/[_]/, " ")}</h1>
        <div className="container">
          <div className="row">
            <img className="col-6" src={myImages.cities[this.props.city]}></img>
            <div className="col-6">
              <p>{myTexts.cities[this.props.city]}</p>
            </div>
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
