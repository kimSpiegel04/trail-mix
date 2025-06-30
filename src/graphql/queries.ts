/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTrail = /* GraphQL */ `query GetTrail($id: ID!) {
  getTrail(id: $id) {
    id
    name
    description
    difficulty
    distance
    elevationGain
    image
    location
    trailPath
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTrailQueryVariables, APITypes.GetTrailQuery>;
export const listTrails = /* GraphQL */ `query ListTrails(
  $filter: ModelTrailFilterInput
  $limit: Int
  $nextToken: String
) {
  listTrails(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      difficulty
      distance
      elevationGain
      image
      location
      trailPath
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTrailsQueryVariables,
  APITypes.ListTrailsQuery
>;
