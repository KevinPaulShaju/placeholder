import React, { Fragment, useContext } from "react";

import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
// import Button from "../../shared/components/FormElements/Button";
import "./PlaceList.css";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import { Button } from "react-bootstrap";

const PlaceList = (props) => {
  const auth = useContext(AuthContext);
  const userId = useParams().userId;

  let message;
  if (auth.userId === userId) {
    message = (
      <Fragment>
        <h2>No places found. Maybe create one?</h2>
        <Button as={Link} to="/places/new">
          Share Place
        </Button>
      </Fragment>
    );
  }
  if (auth.userId !== userId) {
    message = <h2>This user has no places.</h2>;
  }

  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>{message}</Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
          onDelete={props.onDeletePlace}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
