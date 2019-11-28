import React, { Component } from "react";
import { connect } from "react-redux";
import ProfilePicture from "./ProfilePicture";
import Likes from "./Likes";
import Duration from "./Duration";
import Comments from "./Comments";
import Activities from "./Activities";
import { Fragment } from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionContainer from "./AccordionContainer";

import {
  requestItineraries,
  requestItinerariesSuccess,
  requestActivities,
  requestActivitiesSuccess,
  requestComments,
  requestCommentsSuccess
} from "../../store/actions/itineraryActions";
import { reduxFetch } from "../../store/actions/reduxFetch";

const mapStateToProps = state => {
  return {
    itineraries: state.itineraries.itineraries,
    myActivities: state.itineraries.activities,
    comments: state.itineraries.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestItineraries: () =>
      dispatch(
        reduxFetch(
          "/api/itineraries",
          requestItineraries,
          requestItinerariesSuccess
        )
      ),
    requestActivities: titleParameter =>
      dispatch(
        reduxFetch(
          `/api/itineraries/byTitle/${titleParameter}/activities`,
          requestActivities,
          requestActivitiesSuccess
        )
      ),
    requestComments: () =>
      dispatch(
        reduxFetch("/api/itineraries", requestComments, requestCommentsSuccess)
      )
  };
};

class UserItinerary extends Component {
  render() {
    const {
      username,
      userimage,
      title,
      likes,
      duration,
      priceRange,
      hashtags,
      comments,
      action,
      accordionKey
    } = this.props;

    const { requestActivities } = this.props;
    const { myActivities } = this.props;
    let filteredActivities = myActivities.filter(activities =>
      title.includes(activities.title)
    );
    let renderOnClick;

    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <ProfilePicture username={username} userimage={userimage} />
            <h1 className="col-4">{title}</h1>

            <Likes className="col-4" likes={likes} />
            <Duration className="col-4" duration={duration} />
            <span>{priceRange}</span>
            <span>{hashtags}</span>
          </div>
          <AccordionContainer title={title}></AccordionContainer>
        </div>
      </Fragment>
    );
  }
}

const ReduxUserItinerary = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserItinerary);

export default ReduxUserItinerary;
