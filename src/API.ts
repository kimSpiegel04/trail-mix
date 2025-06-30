/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTrailInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  difficulty?: string | null,
  distance?: number | null,
  elevationGain?: number | null,
  image?: string | null,
  location?: string | null,
  trailPath?: string | null,
};

export type ModelTrailConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  difficulty?: ModelStringInput | null,
  distance?: ModelFloatInput | null,
  elevationGain?: ModelIntInput | null,
  image?: ModelStringInput | null,
  location?: ModelStringInput | null,
  trailPath?: ModelStringInput | null,
  and?: Array< ModelTrailConditionInput | null > | null,
  or?: Array< ModelTrailConditionInput | null > | null,
  not?: ModelTrailConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Trail = {
  __typename: "Trail",
  id: string,
  name: string,
  description?: string | null,
  difficulty?: string | null,
  distance?: number | null,
  elevationGain?: number | null,
  image?: string | null,
  location?: string | null,
  trailPath?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTrailInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  difficulty?: string | null,
  distance?: number | null,
  elevationGain?: number | null,
  image?: string | null,
  location?: string | null,
  trailPath?: string | null,
};

export type DeleteTrailInput = {
  id: string,
};

export type ModelTrailFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  difficulty?: ModelStringInput | null,
  distance?: ModelFloatInput | null,
  elevationGain?: ModelIntInput | null,
  image?: ModelStringInput | null,
  location?: ModelStringInput | null,
  trailPath?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTrailFilterInput | null > | null,
  or?: Array< ModelTrailFilterInput | null > | null,
  not?: ModelTrailFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTrailConnection = {
  __typename: "ModelTrailConnection",
  items:  Array<Trail | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTrailFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  difficulty?: ModelSubscriptionStringInput | null,
  distance?: ModelSubscriptionFloatInput | null,
  elevationGain?: ModelSubscriptionIntInput | null,
  image?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  trailPath?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTrailFilterInput | null > | null,
  or?: Array< ModelSubscriptionTrailFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateTrailMutationVariables = {
  input: CreateTrailInput,
  condition?: ModelTrailConditionInput | null,
};

export type CreateTrailMutation = {
  createTrail?:  {
    __typename: "Trail",
    id: string,
    name: string,
    description?: string | null,
    difficulty?: string | null,
    distance?: number | null,
    elevationGain?: number | null,
    image?: string | null,
    location?: string | null,
    trailPath?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTrailMutationVariables = {
  input: UpdateTrailInput,
  condition?: ModelTrailConditionInput | null,
};

export type UpdateTrailMutation = {
  updateTrail?:  {
    __typename: "Trail",
    id: string,
    name: string,
    description?: string | null,
    difficulty?: string | null,
    distance?: number | null,
    elevationGain?: number | null,
    image?: string | null,
    location?: string | null,
    trailPath?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTrailMutationVariables = {
  input: DeleteTrailInput,
  condition?: ModelTrailConditionInput | null,
};

export type DeleteTrailMutation = {
  deleteTrail?:  {
    __typename: "Trail",
    id: string,
    name: string,
    description?: string | null,
    difficulty?: string | null,
    distance?: number | null,
    elevationGain?: number | null,
    image?: string | null,
    location?: string | null,
    trailPath?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTrailQueryVariables = {
  id: string,
};

export type GetTrailQuery = {
  getTrail?:  {
    __typename: "Trail",
    id: string,
    name: string,
    description?: string | null,
    difficulty?: string | null,
    distance?: number | null,
    elevationGain?: number | null,
    image?: string | null,
    location?: string | null,
    trailPath?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTrailsQueryVariables = {
  filter?: ModelTrailFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTrailsQuery = {
  listTrails?:  {
    __typename: "ModelTrailConnection",
    items:  Array< {
      __typename: "Trail",
      id: string,
      name: string,
      description?: string | null,
      difficulty?: string | null,
      distance?: number | null,
      elevationGain?: number | null,
      image?: string | null,
      location?: string | null,
      trailPath?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTrailSubscriptionVariables = {
  filter?: ModelSubscriptionTrailFilterInput | null,
};

export type OnCreateTrailSubscription = {
  onCreateTrail?:  {
    __typename: "Trail",
    id: string,
    name: string,
    description?: string | null,
    difficulty?: string | null,
    distance?: number | null,
    elevationGain?: number | null,
    image?: string | null,
    location?: string | null,
    trailPath?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTrailSubscriptionVariables = {
  filter?: ModelSubscriptionTrailFilterInput | null,
};

export type OnUpdateTrailSubscription = {
  onUpdateTrail?:  {
    __typename: "Trail",
    id: string,
    name: string,
    description?: string | null,
    difficulty?: string | null,
    distance?: number | null,
    elevationGain?: number | null,
    image?: string | null,
    location?: string | null,
    trailPath?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTrailSubscriptionVariables = {
  filter?: ModelSubscriptionTrailFilterInput | null,
};

export type OnDeleteTrailSubscription = {
  onDeleteTrail?:  {
    __typename: "Trail",
    id: string,
    name: string,
    description?: string | null,
    difficulty?: string | null,
    distance?: number | null,
    elevationGain?: number | null,
    image?: string | null,
    location?: string | null,
    trailPath?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
