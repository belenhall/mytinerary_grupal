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
import FaIconPack from "react-icons/lib/fa/arrow-circle-down";

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
        <div id="itineraryContainer" className="container rounded mt-1">

            <ProfilePicture username={username} userimage={userimage} />
            <h3 id={"itineraryTitle"} className="ml-1 col-4 pt-2 pl-3">
              {title}
            </h3>

            <div className="row ">
              <Likes className="col-4 mt-5" likes={likes} />

              <Duration className="col-4" duration={duration} />
              <span color="#fff" className="col-4 text-white">
                {priceRange}
              </span>
              <span className="comments text-white pl-4 mt-2">{hashtags}</span>

          </div>

          <Accordion>
            <Accordion.Toggle
              className="toggleDeco"
              onClick={() =>
                filteredActivities == "" ? requestActivities(title) : null
              }
              eventKey="0"
            >
              {" "}
              <FaIconPack className="toggleDeco mr-2 row" font-size="7vh" />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0" className="column">
              <div>
                <Activities
                  activities={
                    filteredActivities != "" && filteredActivities[0].activities
                  }
                />
                <Comments comments={comments} action={action} />
              </div>
            </Accordion.Collapse>
          </Accordion>
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
