import { gql } from 'graphql-request';

export const GET_USERS = gql`
  {
    users {
      id
      username
      email
    }
  }
`;
