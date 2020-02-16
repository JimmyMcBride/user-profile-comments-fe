import React from "react";

import { Wrapper, Button, Col, Box, Card } from "bushido-strap";

import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../store/actions/auth";

import { useQuery } from "@apollo/react-hooks";
import { getUsersQuery } from "../../store/_queries/getUsers";

export default function Dashboard() {
  const { data, loading } = useQuery(getUsersQuery);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(logout());
  }

  const { displayName, photoURL } = useSelector(state => state.firebase.auth);

  return (
    <Wrapper>
      <Col>
        <h1>Hello, {displayName}!</h1>
        <Box sqr="10.284rem" circle>
          <img src={photoURL} alt="user profile" />
        </Box>
        <Box h="2rem" />
      </Col>
      <Button h="100%" onClick={handleSignOut}>
        Sign Out
      </Button>
      <Card invert max_w="50vw">
        {loading ? (
          <Card invert>
            <h6>Loading...</h6>
          </Card>
        ) : (
          data?.users?.map(item => (
            <Card stretch key={item.username}>
              <h3>{item.username}</h3>
              <Box w="20rem">
                <img src={item.img_url} alt="user profile" />
              </Box>
              {item?.posts?.map(item => (
                <Card invert stretch key={item.title}>
                  <h6>{item.title}</h6>
                  <p>{item.body}</p>
                </Card>
              ))}
            </Card>
          ))
        )}
      </Card>
    </Wrapper>
  );
}
