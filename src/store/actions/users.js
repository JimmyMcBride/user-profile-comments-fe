import { getUsersQuery } from "../_queries/getUsers";

import { useQuery } from "@apollo/react-hooks";

export const GET_USER = "GET_USER";

export const getUser = () => dispatch => {
  const { loading, data, error } = useQuery(getUsersQuery);
  dispatch({
    type: GET_USER,
    payload: data,
    status: loading,
    error: error
  });
};
