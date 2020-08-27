import React from "react";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import { getParking } from "../../actions/parking";
import YelpSearch from "./YelpSearch";
import YelpCards from "./YelpCards";

export function YelpParking(props) {
  const { parking, getParking } = props;
  return (
    <Container>
      <YelpSearch getParking={getParking} />
      {props.isLoaded ? <YelpCards parking={parking} /> : ""}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  parking: state.Yelp.parking,
  isLoaded: state.Yelp.isLoaded,
});

export default connect(mapStateToProps, { getParking })(YelpParking);
