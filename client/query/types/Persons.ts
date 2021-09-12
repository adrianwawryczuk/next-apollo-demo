/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Persons
// ====================================================

export interface Persons_persons_persons {
  __typename: "Person";
  id: string;
  address: string;
  name: string;
  phoneNumber: string;
}

export interface Persons_persons {
  __typename: "Persons";
  persons: Persons_persons_persons[];
  count: number;
}

export interface Persons {
  persons: Persons_persons | null;
}
