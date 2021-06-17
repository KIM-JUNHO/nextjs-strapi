import { gql } from 'graphql-request';

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
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

export const ME = gql`
  query Me {
    me {
      id
      username
      email
    }
  }
`;

export const CREATE_RULE_REQUEST = gql`
  mutation CreateRuleRequest($comment: String!) {
    createRuleRequest(input: { data: { comment: $comment } }) {
      ruleRequest {
        id
        comment
      }
    }
  }
`;

export const GET_RULE_REQUESTS = gql`
  query GetRuleRequests {
    ruleRequests {
      id
      comment
    }
  }
`;

export const GET_RULE_REQUEST = gql`
  query GetRuleRequest($id: ID!) {
    ruleRequest(id: $id) {
      id
      comment
    }
  }
`;
