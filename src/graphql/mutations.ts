/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTrail = /* GraphQL */ `mutation CreateTrail(
  $input: CreateTrailInput!
  $condition: ModelTrailConditionInput
) {
  createTrail(input: $input, condition: $condition) {
    id
    name
    description
    difficulty
    distance
    latitude
    longitude
    distanceMiles
    elevationGain
    imageUrl
    location
    trailPath
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTrailMutationVariables,
  APITypes.CreateTrailMutation
>;
export const updateTrail = /* GraphQL */ `mutation UpdateTrail(
  $input: UpdateTrailInput!
  $condition: ModelTrailConditionInput
) {
  updateTrail(input: $input, condition: $condition) {
    id
    name
    description
    difficulty
    distance
    latitude
    longitude
    distanceMiles
    elevationGain
    imageUrl
    location
    trailPath
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTrailMutationVariables,
  APITypes.UpdateTrailMutation
>;
export const deleteTrail = /* GraphQL */ `mutation DeleteTrail(
  $input: DeleteTrailInput!
  $condition: ModelTrailConditionInput
) {
  deleteTrail(input: $input, condition: $condition) {
    id
    name
    description
    difficulty
    distance
    latitude
    longitude
    distanceMiles
    elevationGain
    imageUrl
    location
    trailPath
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTrailMutationVariables,
  APITypes.DeleteTrailMutation
>;
