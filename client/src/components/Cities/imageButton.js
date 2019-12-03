import React, { Fragment } from "react";
import { Component } from "react";
import { connect } from "react-redux";
import myImages from "../../Assets/Resources/myImages";
import { sendNavData } from "../../store/actions/navActions";
import { Link } from "react-router-dom";
const mapStateToProps = state => {
  console.log(state.nav.navData);
  return {
    navData: state.nav.navData
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    accion: () => dispatch(sendNavData(ownProps.ciudad))
  };
};

class ImageButton extends Component {
  render() {
    const { accion } = this.props;

    return (
      <Fragment> 
        <Link className={"dameroLink"} to={`/${this.props.ciudad}`} >
        
          <div className={"damero"}
            style={{ 
              backgroundImage: `url(${myImages.cities[this.props.ciudad]})`, 
              }}
            onClick={() => accion()}>
            {this.props.ciudad.replace(/[_]/, ' ')}
        </div>
        </Link>
      </Fragment>
    );
  }
}

const ReduxImageButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageButton);

export default ReduxImageButton;
