/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTrail = /* GraphQL */ `subscription OnCreateTrail($filter: ModelSubscriptionTrailFilterInput) {
  onCreateTrail(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTrailSubscriptionVariables,
  APITypes.OnCreateTrailSubscription
>;
export const onUpdateTrail = /* GraphQL */ `subscription OnUpdateTrail($filter: ModelSubscriptionTrailFilterInput) {
  onUpdateTrail(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTrailSubscriptionVariables,
  APITypes.OnUpdateTrailSubscription
>;
export const onDeleteTrail = /* GraphQL */ `subscription OnDeleteTrail($filter: ModelSubscriptionTrailFilterInput) {
  onDeleteTrail(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTrailSubscriptionVariables,
  APITypes.OnDeleteTrailSubscription
>;
