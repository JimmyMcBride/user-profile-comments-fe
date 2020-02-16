import gql from "graphql-tag";

export const registerUserMutation = gql`
  mutation Register($email: String!, $username: String!, $password: String!) {
    register(
      creds: { email: $email, username: $username, password: $password }
    ) {
      Users {
        id
        username
        firstLetterOfUserName
      }
    }
  }
`;
