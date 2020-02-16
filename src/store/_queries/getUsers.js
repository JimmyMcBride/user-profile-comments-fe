import gql from "graphql-tag";

export const getUsersQuery = gql`
  {
    users {
      username
      email
      img_url
      posts {
        title
        body
        user {
          username
        }
      }
    }
  }
`;
