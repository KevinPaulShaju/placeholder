import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../../places/components/PlaceList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";
import UserProfile from "../components/UserProfile";
import { Container } from "react-bootstrap";

const Profile = React.memo(() => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const [user, setUser] = useState(null);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const userId = useParams().userId;
  //   const [error, setError] = useState(false);
  //   const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    console.log(process.env.REACT_APP_BACKEND_URL);
    const fetchUserProfile = async () => {
      try {
        const response = await sendRequest(
          process.env.REACT_APP_BACKEND_URL+`/users/${userId}/profile`
        );
        setLoadedPlaces(response.places);
        setUser(response.user);
      } catch (err) {}
    };

    fetchUserProfile();
  }, [userId, sendRequest]);

  const placeDeletedHandler = (deletedPlaceId) => {
    setLoadedPlaces((prevPlaces) =>
      prevPlaces.filter((place) => place.id !== deletedPlaceId)
    );
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner></LoadingSpinner>
        </div>
      )}
      {!isLoading && user && (
        <UserProfile
          name={user.name}
          image={user.image}
          email={user.email}
        ></UserProfile>
      )}
      {!isLoading && loadedPlaces && (
        <Fragment>
          <Container className="d-block  mt-5" style={{ textAlign: "center" }}>
            <h1>Your Places</h1>
            <PlaceList
              items={loadedPlaces}
              onDeletePlace={placeDeletedHandler}
            />
          </Container>
        </Fragment>
      )}
    </React.Fragment>
  );
});

export default Profile;
