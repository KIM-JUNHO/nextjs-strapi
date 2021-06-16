import { gql } from 'graphql-request';

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(input: { identifier: $username, password: $password }) {
      jwt
      user {
        id
        username
        email
      }
    }
  }
`;
