import { fetcher } from '../lib/fetcher';
import * as gql from './gql';

export async function createRuleRequest({ comment }) {
  const data = await fetcher(gql.CREATE_RULE_REQUEST, { variables: { comment } });
  return data.createRuleRequest.ruleRequest;
}

export async function getRuleRequests() {
  const data = await fetcher(gql.GET_RULE_REQUESTS);
  return data.ruleRequests;
}

export async function getRuleRequest({ id }) {
  const data = await fetcher(gql.GET_RULE_REQUEST, { variables: { id } });
  return data.ruleRequest;
}
