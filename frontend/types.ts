import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type DeleteResponse = {
  __typename?: 'DeleteResponse';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type Image = {
  __typename?: 'Image';
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
};

export type MemoTest = {
  __typename?: 'MemoTest';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  images: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMemoTest: MemoTest;
  deleteMemoTest: DeleteResponse;
  updateMemoTest: MemoTest;
};


export type MutationCreateMemoTestArgs = {
  images: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};


export type MutationDeleteMemoTestArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateMemoTestArgs = {
  id: Scalars['ID']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String']['input'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

export type Query = {
  __typename?: 'Query';
  memoTest?: Maybe<MemoTest>;
  memoTests: Array<MemoTest>;
};


export type QueryMemoTestArgs = {
  id: Scalars['ID']['input'];
};

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

/** Account of a person who utilizes this application. */
export type User = {
  __typename?: 'User';
  /** When the account was created. */
  created_at: Scalars['DateTime']['output'];
  /** Unique email address. */
  email: Scalars['String']['output'];
  /** When the email was verified. */
  email_verified_at?: Maybe<Scalars['DateTime']['output']>;
  /** Unique primary key. */
  id: Scalars['ID']['output'];
  /** Non-unique name. */
  name: Scalars['String']['output'];
  /** When the account was last updated. */
  updated_at: Scalars['DateTime']['output'];
};
